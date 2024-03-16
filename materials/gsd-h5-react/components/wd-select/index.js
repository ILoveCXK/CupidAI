import { commonCompBehavior } from '../../utils/common-behavior';
import formFieldBehavior from '../form-field-behavior/form-field-behavior';
import itemBehavior from '../form-field-behavior/item-behavior';
import { convertFixedIcon, SELECT_ICON_H5 } from '../../utils/getFormLegacy';
import debounce from '../../utils/debounce';

Component({
  options: { virtualHost: true },
  behaviors: [itemBehavior, commonCompBehavior, formFieldBehavior],
  properties: {
    classRoot: {
      type: String,
      value: 'select',
    },
  },
  data: {
    selectedLabel: null,
    _oldSelectedLabel: null,
    _suffixType: '',
    _suffixIcon: '',
  },
  methods: {
    finalUpdateWidgetAPI: function () {
      const { selectedLabel, primaryField } = this.properties;
      this.setReadonlyAttributes &&
        this.setReadonlyAttributes({
          selectedLabel,
          selectFields: [primaryField],
        });
      this.updateWidgetAPI();
    },
    changeLabel: function (e) {
      const selectedLabel = this.data.value == null ? null : e.detail.value;
      if (this.data._oldSelectedLabel === selectedLabel) return;
      this.setData({ selectedLabel, _oldSelectedLabel: selectedLabel });
    },
    search: function (e) {
      this.debouncedTriggerSearchEvent(e.detail.value);
    },
    debouncedTriggerSearchEvent: debounce(function (value) {
      this.triggerEvent('search', { value });
    }),
  },
  observers: {
    'name, value, label, required, visible, disabled, readOnly, before, after, primaryField, selectedLabel':
      function () {
        this.finalUpdateWidgetAPI();
      },
    'suffixType,suffixIcon': function (suffixType, suffixIcon) {
      const [_suffixType, _suffixIcon] = convertFixedIcon(
        suffixType,
        suffixIcon,
        SELECT_ICON_H5
      );
      this.setData({ _suffixType, _suffixIcon });
    },
  },
  lifetimes: {
    attached: function () {
      this.finalUpdateWidgetAPI();
    },
  },
});
