/**
 * 数组转对象，用于遍历
 */
export const isObj = (v) =>
  Object.prototype.toString.call(v) === '[object Object]';
export const isObjHasProp = (obj, prop) =>
  isObj(obj) && Object.prototype.hasOwnProperty.call(obj, prop);
export const arrayToMap = (list, valueProp = 'value', labelProp = 'label') => {
  const map = new Map();
  Array.isArray(list) &&
    list.forEach((item) => {
      if (isObjHasProp(item, valueProp)) {
        map.set(item[valueProp], item[labelProp] || item[valueProp]);
      }
    });
  return map;
};
