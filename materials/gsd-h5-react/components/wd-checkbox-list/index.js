import { commonCompBehavior } from '../../utils/common-behavior';
import formFieldBehavior from '../form-field-behavior/form-field-behavior';
import { WD_PREFIX } from '../../utils/constant';
import classNames from '../../utils/classnames';
import itemBehavior from '../form-field-behavior/item-behavior';
import { callWedaApi } from '../../utils/tcb';
import destr from '../../utils/destr';

Component({
  options: {
    virtualHost: true,
  },
  behaviors: [itemBehavior, commonCompBehavior, formFieldBehavior],
  properties: {},
  data: {
    checkboxCls: '',
    classPrefix: WD_PREFIX,
    options: [],
    enumOptions: [],
    checkedItemValue: {},
    readValue: '-',
    selectedLabel: '',
  },
  methods: {
    handleClick: function (e) {
      const { disabled, readOnly } = this.properties;
      const { checkedItemValue } = this.data;
      const value = e.currentTarget.dataset.value;
      const checked = !checkedItemValue[value];
      const newMap = Object.assign({}, checkedItemValue, {
        [value]: checked,
      });
      if (!disabled && !readOnly) {
        const value = Object.entries(newMap)
          .filter(([, checked]) => checked)
          .map(([value]) => value);
        this.setData({ checkedItemValue: newMap });
        this.setData({ value });
        this.triggerEvent('change', { value });
      }
    },
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
      });
    },
    _fetchData: async function () {
      let data = await callWedaApi({
        action: 'DescribeGeneralOptionsDetailList',
        data: {
          OptNameList: [this.properties.enumName],
          PageIndex: 1,
          PageSize: 10,
        },
      });
      const config = destr(data?.Items?.[0]?.Config) ?? [];
      const enumOption = config.map((item) => {
        return {
          label: item.value,
          value: item.key,
          checked: false,
        };
      });
      this.setData({ enumOptions: enumOption });
      const opt =
        enumOption &&
        enumOption.map((item) => {
          const checked =
            this.properties.value &&
            this.properties.value.find((val) => `${val}` === `${item.value}`);
          return {
            value: item.value,
            label: item.label,
            checked: !!checked,
          };
        });
      this.setData({ options: opt });
    },
  },
  observers: {
    direction: function (direction) {
      const { classPrefix } = this.data;
      const compClassName = `${classPrefix}-checkbox-group `;
      const classList = [compClassName];
      if (['inline'].includes(direction)) {
        classList.push(`${classPrefix}-checkbox-group--inline `);
      }
      this.setData({ checkboxCls: classNames(classList) });
    },
    'format, range, value': function (format, range, value) {
      if (format !== 'x-enum') {
        const opts = range?.map((item) => {
          const checked =
            value && value.find((val) => `${val}` === `${item.value}`);
          return {
            value: item.value,
            label: item.label,
            checked: !!checked,
          };
        });
        this.setData({ options: opts });
      } else {
        const opt = this.data.enumOptions?.map((item) => {
          const checked =
            value && value.find((val) => `${val}` === `${item.value}`);
          return {
            value: item.value,
            label: item.label,
            checked: !!checked,
          };
        });
        this.setData({ options: opt });
      }
    },
    'options, readOnly': function (options, readOnly) {
      const tempValue = {};
      const tempLabel = [];
      options.forEach(({ value, label, checked }) => {
        tempValue[value] = !!checked;
        if (checked) {
          tempLabel.push(label);
        }
      });
      this.setData({
        checkedItemValue: tempValue,
      });
      if (readOnly && tempLabel.length > 0) {
        this.setData({ readValue: tempLabel.join('，') });
      } else {
        this.setData({ readValue: '-' });
      }
    },
    options: function (options) {
      if (Array.isArray(options)) {
        const tempLabel = [];
        options.forEach(({ label, checked }) => {
          if (checked) {
            tempLabel.push(label);
          }
        });
        this.setData({ selectedLabel: tempLabel });
      }
    },
    'format, enumName': function (format, enumName) {
      if (format === 'x-enum' && enumName) {
        this._fetchData();
      }
    },
    'name, value, label, required, visible, disabled, readOnly, selectedLabel':
      function () {
        this.updateWidgetAPI();
      },
  },
});
