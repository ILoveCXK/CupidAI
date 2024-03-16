export const widgetProps = {
  "container4": {
    "style": {
      "width": "100%",
      "height": "100vh",
      "display": "flex",
      "position": "relative",
      "alignItems": "center",
      "background": "rgb(253, 207, 249)",
      "flexDirection": "column",
      "justifyContent": "center"
    },
    "classList": [],
    "data": {},
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container5": {
    "style": {
      "display": "flex",
      "textAlign": "left",
      "alignItems": "center",
      "background": "rgb(255, 255, 255)",
      "borderRadius": "20px",
      "flexDirection": "column",
      "justifyContent": "center"
    },
    "classList": [],
    "data": {},
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "form1": {
    "style": {
      "width": "90%"
    },
    "classList": [],
    "_id": "",
    "dataSourceName": "zcyhxx_2y7u8nd",
    "fields": [
      {}
    ],
    "formType_bind": false,
    "initialValues": {},
    "lgWidth": "md",
    "methodCreate": "",
    "methodGetItem": "",
    "methodUpdate": "",
    "paramGetItem": {},
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdForm"
  },
  "container2": {
    "style": {},
    "classList": [
      "wd-form-item",
      "wd-form-title"
    ],
    "_parentId": "form1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text1": {
    "style": {},
    "classList": [
      "wd-form-title__text"
    ],
    "level": "title-6",
    "text": "注册用户信息",
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "input1": {
    "style": {},
    "classList": [],
    "inputValue": null,
    "label": "账号",
    "name": "zh",
    "placeholder": "请输入",
    "prefixIcon": "success",
    "prefixType": "",
    "required": true,
    "requiredMsg": "该项为必填项",
    "status": "edit",
    "suffixIcon": "success",
    "suffixType": "",
    "template": "inputBox",
    "_parentId": "form1",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "input2": {
    "style": {},
    "classList": [],
    "_staticResourceAttribute": [
      "suffixSrc",
      "prefixSrc"
    ],
    "inputValue": null,
    "label": "密码",
    "name": "mm",
    "password": true,
    "placeholder": "请输入",
    "prefixType": "",
    "required": true,
    "requiredMsg": "该项为必填项",
    "status": "edit",
    "suffixType": "",
    "template": "inputBox",
    "_parentId": "form1",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "input6": {
    "style": {
      "display": "none"
    },
    "classList": [],
    "label": "openid",
    "name": "openid",
    "placeholder": "请输入",
    "prefixIcon": "success",
    "prefixType": "",
    "requiredFlag": false,
    "requiredMsg": "该项为必填项",
    "status": "edit",
    "suffixIcon": "success",
    "suffixType": "",
    "template": "inputBox",
    "_parentId": "form1",
    "_order": 3,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "input7": {
    "style": {
      "display": "none"
    },
    "classList": [],
    "label": "用户状态",
    "name": "yhzt",
    "placeholder": "请输入",
    "prefixIcon": "success",
    "prefixType": "",
    "requiredFlag": false,
    "requiredMsg": "该项为必填项",
    "status": "edit",
    "suffixIcon": "success",
    "suffixType": "",
    "template": "inputBox",
    "_parentId": "form1",
    "_order": 4,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "container1": {
    "style": {
      "display": "flex",
      "marginLeft": "10px",
      "justifyContent": "center"
    },
    "classList": [
      "wd-form__action"
    ],
    "data": {},
    "_parentId": "form1",
    "_order": 5,
    "widgetType": "gsd-h5-react:Container"
  },
  "button1": {
    "style": {
      "textAlign": "center"
    },
    "classList": [],
    "formType": "submit",
    "icon": "success",
    "text": "提交",
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container3": {
    "style": {
      "display": "flex",
      "flexDirection": "row"
    },
    "classList": [],
    "data": {},
    "_parentId": "container5",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "radio1": {
    "style": {},
    "classList": [],
    "borderedH5": true,
    "direction": "vertical",
    "enumName": "",
    "format": "",
    "label": "",
    "labelVisible": false,
    "name": "radio1",
    "range": [
      {
        "label": "我已阅读并同意",
        "value": "1",
        "__sortid__": "tCiDV43-4QxtsCheCJO--"
      }
    ],
    "required": false,
    "requiredFlag": true,
    "requiredMsg": "该项为必填项",
    "size": "",
    "status": "edit",
    "tipBlock": "",
    "value": "",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdRadioList"
  },
  "button2": {
    "style": {},
    "classList": [],
    "icon": "success",
    "text": "用户协议",
    "variant": "link",
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button3": {
    "style": {},
    "classList": [],
    "icon": "success",
    "text": "隐私协议",
    "variant": "link",
    "_parentId": "container3",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "modal1": {
    "style": {},
    "classList": [],
    "closeType": [
      "mask"
    ],
    "defaultMaskShow": true,
    "defaultShow": false,
    "position": "center",
    "template": "default",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdModal"
  },
  "text2": {
    "style": {
      "fontWeight": "bolder"
    },
    "classList": [],
    "level": "title-7",
    "maxLines": "1",
    "text": "待完善",
    "_parentId": "modal1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "icon1": {
    "style": {
      "color": "rgba(0, 0, 0, 0.6)"
    },
    "classList": [],
    "name": "td:close",
    "_parentId": "modal1",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text3": {
    "style": {},
    "classList": [],
    "maxLines": "1",
    "text": "文本内容",
    "_parentId": "modal1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button4": {
    "style": {},
    "classList": [],
    "icon": "success",
    "text": "取消",
    "theme": "secondary",
    "variant": "outline",
    "_parentId": "modal1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button5": {
    "style": {},
    "classList": [],
    "icon": "success",
    "text": "确认",
    "_parentId": "modal1",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "modal2": {
    "style": {},
    "classList": [],
    "closeType": [
      "mask"
    ],
    "defaultMaskShow": true,
    "defaultShow": false,
    "position": "center",
    "template": "default",
    "_order": 2,
    "widgetType": "gsd-h5-react:WdModal"
  },
  "text4": {
    "style": {
      "fontWeight": "bolder"
    },
    "classList": [],
    "level": "title-7",
    "maxLines": "1",
    "text": "待完善",
    "_parentId": "modal2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "icon2": {
    "style": {
      "color": "rgba(0, 0, 0, 0.6)"
    },
    "classList": [],
    "name": "td:close",
    "_parentId": "modal2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdIcon"
  },
  "text5": {
    "style": {},
    "classList": [],
    "maxLines": "1",
    "text": "文本内容",
    "_parentId": "modal2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button6": {
    "style": {},
    "classList": [],
    "icon": "success",
    "text": "取消",
    "theme": "secondary",
    "variant": "outline",
    "_parentId": "modal2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button7": {
    "style": {},
    "classList": [],
    "icon": "success",
    "text": "确认",
    "_parentId": "modal2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  }
}
