import { commonCompBehavior } from '../../utils/common-behavior';
import formFieldBehavior from '../form-field-behavior/form-field-behavior';
import itemBehavior from '../form-field-behavior/item-behavior';
import tagBehavior from '../wd-tag/tag-behavior';
import { arrayToMap, isObjHasProp } from '../../utils/tool';
import isEqual from '../../utils/deepEqual';

/**
 * 标准化：标签选择
 */
Component({
  options: { virtualHost: true, pureDataPattern: /^rangeMap$/ },
  behaviors: [itemBehavior, tagBehavior, commonCompBehavior, formFieldBehavior],
  properties: {
    classRoot: {
      type: String,
      value: 'tag-select',
    },
    size: {
      type: String,
      value: 'lg',
    },
  },
  data: {
    selectedLabel: undefined,
    processedRange: [], // 过滤掉无value值后的 range
    rangeMap: new Map(),
  },
  methods: {
    updateWidgetAPI: function () {
      const {
        name,
        value,
        label,
        required,
        visible,
        disabled,
        readOnly,
        selectedLabel,
        processedRange: range,
      } = this.data;
      this.setReadonlyAttributes?.({
        name,
        value,
        label,
        required,
        visible,
        disabled,
        readOnly,
        selectedLabel,
        range,
      });
    },
    handleChange: function (e) {
      const item = e.detail.item;
      if (this.data.disabled || item.disabled) return;
      const newValue =
        this.properties.checkType !== 'radio'
          ? this.getMultipleValue(this.data.value, item.value)
          : this.getSingleValue(this.data.value, item.value);
      this.setData({ value: newValue });
      this.triggerEvent('change', { value: newValue });
    },
    getSingleValue: function (value, val) {
      const lastChecked = isEqual(value, val);
      return lastChecked ? null : val;
    },
    getMultipleValue: function (value, val) {
      let newValue = Array.isArray(value) ? [].concat(value) : [];
      const lastChecked = newValue.some((d) => isEqual(d, val));
      if (lastChecked) {
        newValue = newValue.filter((d) => !isEqual(d, val));
      } else {
        newValue.push(val);
      }
      return newValue;
    },
  },
  observers: {
    'name, value, label, required, visible, disabled, readOnly, selectedLabel':
      function () {
        this.updateWidgetAPI();
      },
    range: function (range) {
      const list = Array.isArray(range) ? range : [];
      const processedRange = list.filter((item) => isObjHasProp(item, 'value'));
      const rangeMap = arrayToMap(processedRange);
      this.setData({ processedRange, rangeMap });
    },
    'rangeMap, value, checkType': function (rangeMap, value, checkType) {
      let selectedLabel;
      if (checkType !== 'radio') {
        selectedLabel = Array.isArray(value)
          ? value.map((d) => (rangeMap.has(d) ? rangeMap.get(d) : d))
          : value;
      } else {
        selectedLabel = rangeMap.has(value) ? rangeMap.get(value) : value;
      }
      this.setData({ selectedLabel });
    },
  },
  lifetimes: {
    attached: function () {
      this.updateWidgetAPI();
    },
  },
});
