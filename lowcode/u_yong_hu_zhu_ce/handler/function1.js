import { app, $app } from '../../../app/weapps-api';
import { $page, $w } from '../../../pages/u_yong_hu_zhu_ce/api';
/**
 * 
 * 可通过 $page 获取或修改当前页面的 变量 状态 handler lifecycle 等信息
 * 可通过 app 获取或修改全局应用的 变量 状态 等信息
 * 具体可以console.info 在编辑器Console面板查看更多信息
 * 注意：该方法仅在所属的页面有效
 * 如果需要 async-await，请修改成 export default async function() {}
 * 帮助文档 https://cloud.tencent.com/document/product/1301/57912
 **/

/**
 * @param {Object} event - 事件对象
 * @param {string} event.type - 事件名
 * @param {any} event.detail - 事件携带自定义数据
 *
 * @param {Object} data
 * @param {any} data.target - 获取事件传参的数据
 **/
export default function({event, data}) {
  const agree = $w.radio1.value
   console.log("nim")
  if (agree == '1'){
    console.log("what happend")
    $w.utils.redirectTo({
      pageId: "u_tou_xiang_ni_cheng",
      packageName: "",
      params: {key: "value"},
    });
  } else {
    $w.utils.showToast({
      title: "请勾选用户协议",
      icon: "error",
      duration: 2000, // 2秒
    });
  }
}