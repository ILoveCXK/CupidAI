export const widgetProps = {
  "scrollView1": {
    "style": {
      "height": "540PX",
      "background": "rgb(244, 244, 244)",
      "paddingTop": "10px",
      "paddingBottom": "100px"
    },
    "classList": [],
    "bounces": true,
    "enableBackToTop": false,
    "enableFlex": false,
    "enhanced": false,
    "fastDeceleration": false,
    "lowerThreshold": 50,
    "pagingEnabled": false,
    "refresherBackground": "#fff",
    "refresherDefaultStyle": "block",
    "refresherEnabled": false,
    "refresherThreshold": 50,
    "refresherTriggered": false,
    "scrollAnchoring": false,
    "scrollWithAnimation": true,
    "scrollX": false,
    "scrollY": true,
    "showScrollbar": true,
    "upperThreshold": 50,
    "_order": 0,
    "widgetType": "gsd-h5-react:ScrollView"
  },
  "repeater1": {
    "style": {},
    "classList": [],
    "forIndex": "index_repeater1",
    "forItem": "item_repeater1",
    "suffix": "repeater1",
    "_parentId": "scrollView1",
    "_order": 0,
    "widgetType": "gsd-h5-react:Repeater"
  },
  "repeater1_item": {
    "style": {},
    "classList": [],
    "_parentId": "repeater1",
    "widgetType": "gsd-h5-react:RepeaterItem"
  },
  "container3": {
    "style": {},
    "classList": [],
    "data": {},
    "_parentId": "repeater1_item",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "container4": {
    "style": {
      "color": "rgb(0,0,0)",
      "display": "flex",
      "fontSize": "14px",
      "justifyContent": "flex-end"
    },
    "classList": [],
    "data": {},
    "_parentId": "container3",
    "_order": 0,
    "widgetType": "gsd-h5-react:Container"
  },
  "text1": {
    "style": {
      "padding": "10px",
      "textAlign": "left",
      "background": "rgb(19, 255, 0)",
      "marginLeft": "0",
      "marginRight": "5px",
      "borderRadius": "5px"
    },
    "classList": [],
    "maxLines": "1",
    "_parentId": "container4",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdText"
  },
  "image1": {
    "style": {
      "width": "40PX",
      "height": "40PX",
      "borderRadius": "5px"
    },
    "classList": [],
    "alt": "[图片]",
    "fit": "widthFix",
    "_parentId": "container4",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "container2": {
    "style": {
      "display": "flex",
      "justifyContent": "flex-start"
    },
    "classList": [],
    "_parentId": "container3",
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "image2": {
    "style": {
      "width": "40PX",
      "height": "40PX",
      "borderRadius": "5px"
    },
    "classList": [],
    "_staticResourceAttribute": [
      "src"
    ],
    "alt": "[图片]",
    "fit": "widthFix",
    "src": "/resources/2024-03/lowcode-1632839",
    "_parentId": "container2",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdImage"
  },
  "text2": {
    "style": {
      "padding": "10px",
      "fontSize": "14px",
      "textAlign": "right",
      "background": "rgb(255, 0, 0)",
      "marginLeft": "5px",
      "borderRadius": "5px"
    },
    "classList": [],
    "maxLines": "1",
    "_parentId": "container2",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdText"
  },
  "container1": {
    "style": {
      "bottom": "0",
      "display": "flex",
      "position": "fixed",
      "justifyContent": "flex-start"
    },
    "classList": [],
    "data": {},
    "_order": 1,
    "widgetType": "gsd-h5-react:Container"
  },
  "textarea1": {
    "style": {
      "background": "rgb(255, 255, 255)"
    },
    "classList": [],
    "label": "标题",
    "name": "textarea1",
    "placeholder": "请输入",
    "requiredMsg": "该项为必填项",
    "status": "edit",
    "value": "",
    "_parentId": "container1",
    "_order": 0,
    "widgetType": "gsd-h5-react:WdTextarea"
  },
  "button1": {
    "style": {
      "opacity": 1,
      "borderRadius": "10px"
    },
    "classList": [],
    "icon": "success",
    "text": "发送",
    "_parentId": "container1",
    "_order": 1,
    "widgetType": "gsd-h5-react:WdButton"
  }
}
