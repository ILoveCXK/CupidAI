export const widgetProps = {
  "container1": {
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
  "container2": {
    "style": {
      "width": "80PX",
      "border": "none",
      "height": "80PX",
      "display": "flex",
      "position": "relative",
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
  "image1": {
    "style": {
      "width": "80PX",
      "height": "80PX",
      "zIndex": "999",
      "position": "relative",
      "borderRadius": "90px"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "src"
    ],
    "alt": "[图片]",
    "fit": "heightFix",
    "src": "/resources/2024-03/lowcode-1632839",
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "container3": {
    "style": {
      "width": "90%",
      "bottom": "40px",
      "zIndex": 0,
      "opacity": 1,
      "position": "relative",
      "background": "rgb(255, 255, 255)",
      "paddingTop": "40px",
      "paddingLeft": "10px",
      "borderRadius": "20px",
      "paddingRight": "10px"
    },
    "classList": [],
    "data": {},
    "_parentId": "container1",
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
    "label": "标题",
    "labelVisible": false,
    "name": "input1",
    "placeholder": "请输入",
    "prefixIcon": "td:user-circle",
    "prefixType": "inner",
    "requiredMsg": "该项为必填项",
    "status": "edit",
    "suffixIcon": "success",
    "suffixType": "",
    "template": "inputBox",
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "input2": {
    "style": {},
    "classList": [],
    "_staticResourceAttribute": [
      "suffixSrc",
      "prefixSrc"
    ],
    "inputValue": "",
    "label": "标题",
    "labelVisible": false,
    "name": "input2",
    "placeholder": "请输入",
    "prefixIcon": "success",
    "prefixType": "inner",
    "requiredMsg": "该项为必填项",
    "status": "edit",
    "suffixType": "",
    "template": "inputBox",
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdInput"
  },
  "container4": {
    "style": {
      "display": "flex",
      "flexDirection": "row",
      "justifyContent": "space-between"
    },
    "classList": [],
    "data": {},
    "_parentId": "container3",
    "_order": 2,
    "widgetType": "gsd-h5-react:Container"
  },
  "button1": {
    "style": {},
    "classList": [],
    "icon": "success",
    "text": "立即注册",
    "variant": "link",
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button2": {
    "style": {},
    "classList": [],
    "icon": "success",
    "text": "忘记密码",
    "variant": "link",
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container5": {
    "style": {
      "paddingLeft": "10px",
      "paddingRight": "10px"
    },
    "classList": [],
    "data": {},
    "_parentId": "container3",
    "_order": 3,
    "widgetType": "gsd-h5-react:Container"
  },
  "button3": {
    "style": {
      "background": "rgb(253, 207, 249)",
      "borderRadius": "20px"
    },
    "classList": [],
    "block": true,
    "icon": "success",
    "text": "登录",
    "variant": "outline",
    "_parentId": "container5",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "container7": {
    "style": {
      "display": "flex",
      "flexDirection": "row"
    },
    "classList": [],
    "data": {},
    "_parentId": "container3",
    "_order": 4,
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
        "__sortid__": "KRVGmIbTFSBEARb3kEHjc"
      }
    ],
    "required": false,
    "requiredFlag": true,
    "requiredMsg": "该项为必填项",
    "size": "",
    "status": "edit",
    "tipBlock": "",
    "value": "",
    "_parentId": "container7",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdRadioList"
  },
  "button4": {
    "style": {},
    "classList": [],
    "icon": "success",
    "text": "用户协议",
    "variant": "link",
    "_parentId": "container7",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button5": {
    "style": {},
    "classList": [],
    "icon": "success",
    "text": "隐私协议",
    "variant": "link",
    "_parentId": "container7",
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
  "text1": {
    "style": {
      "fontWeight": "bolder"
    },
    "classList": [],
    "level": "title-7",
    "maxLines": "1",
    "text": "弹窗标题",
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
  "text2": {
    "style": {},
    "classList": [],
    "maxLines": "1",
    "text": "尚未完成",
    "_parentId": "modal1",
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
    "_parentId": "modal1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdButton"
  },
  "button7": {
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
  "text3": {
    "style": {
      "fontWeight": "bolder"
    },
    "classList": [],
    "level": "title-7",
    "maxLines": "1",
    "text": "弹窗标题",
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
  "text4": {
    "style": {},
    "classList": [],
    "maxLines": "1",
    "text": "尚未完成",
    "_parentId": "modal2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "button8": {
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
  "button9": {
    "style": {},
    "classList": [],
    "icon": "success",
    "text": "确认",
    "_parentId": "modal2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  }
}
