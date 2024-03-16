export const widgetProps = {
  "container1": {
    "style": {
      "display": "flex",
      "marginTop": "50px",
      "alignItems": "center",
      "flexDirection": "column",
      "justifyContent": "center"
    },
    "classList": [],
    "data": {},
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container4": {
    "style": {
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "column",
      "justifyContent": "center"
    },
    "classList": [],
    "data": {},
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "uploadImage1": {
    "style": {},
    "classList": [],
    "callbacks": {},
    "label": "图片上传",
    "name": "uploadImage1",
    "requiredMsg": "该项为必填项",
    "single": true,
    "status": "edit",
    "value": [],
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdUploadImage"
  },
  "container3": {
    "style": {
      "display": "flex",
      "marginRight": "55px",
      "justifyContent": "flex-start"
    },
    "classList": [],
    "data": {},
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "input1": {
    "style": {},
    "classList": [],
    "_staticResourceAttribute": [
      "suffixSrc",
      "prefixSrc"
    ],
    "inputValue": "",
    "isNickNameType": true,
    "label": "昵称",
    "name": "",
    "placeholder": "点击获取微信昵称",
    "prefixIcon": "success",
    "prefixType": "",
    "requiredMsg": "该项为必填项",
    "status": "edit",
    "suffixIcon": "success",
    "suffixType": "",
    "template": "inputBox",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "container2": {
    "style": {
      "display": "flex",
      "marginTop": "-10px",
      "alignItems": "center",
      "justifyContent": "center"
    },
    "classList": [
      "wd-form__action"
    ],
    "data": {},
    "_parentId": "container1",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "button1": {
    "style": {},
    "classList": [],
    "icon": "success",
    "text": "按钮",
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  }
}
