import { app, $app } from '../../../app/weapps-api';
import { $page, $w } from '../../../pages/u81h26k2dho/api';
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


export default async function ({ event, data }) {
  const username = $w.input1.value
  const password = $w.input2.value
  const agree = $w.radio1.value
  console.log('agree', agree, typeof (agree))
  if (agree == '1') {
    const user = await $w.cloud.callDataSource({
      dataSourceName: "zcyhxx_2y7u8nd",
      methodName: "wedaGetItemV2",
      params: {
        // 筛选内容，筛选内容推荐使用编辑器数据筛选器生成
        filter: {
          where: {
            $and: [
              {
                zh: {
                  $eq: username, // 获取单条时，推荐传入_id数据标识进行操作
                },
              },
              {
                mm: {
                  $eq: password, // 获取单条时，推荐传入_id数据标识进行操作
                },
              },
            ],
          },
        },
        select: {
          $master: true, // 常见的配置，返回主表
        },
      },
    });
    console.log('user', user)
    console.log($w.auth.currentUser.nickName)
    if (user._id) {
      $w.app.dataset.state.user = user
      $w.utils.redirectTo({
        pageId: "index", // 页面 Id
        packageName: "", // 主应用为空或不填，子模块填写 子包目录，查找位置 子包编辑器 --- 页面 --- 子包目录
        params: { key: "value" },
      });
    } else {
      $w.utils.showToast({
        title: "用户名或者密码错误",
        icon: "error",
        duration: 2000, // 2秒
      });
    }
  } else {
    $w.utils.showToast({
      title: "请勾选用户协议",
      icon: "error",
      duration: 2000, // 2秒
    });
  }
}