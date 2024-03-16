
export function getDatapatch(base, pendingData) {
  const patch = {}
  for (const widgetId in pendingData) {
    const baseWidget = base[widgetId]
    const pendingWidget = pendingData[widgetId]
    if (!baseWidget || typeof pendingWidget === 'string') {
      patch[widgetId] = pendingWidget
    } else {
      patchProp(baseWidget, pendingWidget, patch, widgetId)
    }
  }
  return patch
}

function patchProp(baseWidget, pendingWidget, patch, prefixes) {
  if (Array.isArray(pendingWidget)) {
    /**
     * 数组长度发生变化，更新整个数组
     * 当启用 _WaForKey，且可以取到key时，更新整个数组
     * 通过 array[0].xxx 进行更新，id 不会更新，疑似 mp 实现 bug
     */
    if (pendingWidget.length != baseWidget.length) {
      patch[prefixes] = pendingWidget
    } else if (pendingWidget?.some(item=>item._waForKey) && pendingWidget[0]?._key) {
      patch[prefixes] = pendingWidget
    } else {
      for (let i = 0; i < pendingWidget.length; i++) {
        if (!baseWidget[i]) {
          patch[prefixes + '[' + i + ']'] = pendingWidget[i]
        } else {
          patchProp(baseWidget[i], pendingWidget[i], patch, prefixes + '[' + i + ']')
        }
      }
    }
  } else {
    if (pendingWidget._waIf === false && baseWidget._waIf === false) {
      return
    }
    const allProps = Object.keys(pendingWidget)
    // Attention: since setData will copy data deeply, if property is object, it should be treated as different
    const differentProps = allProps.filter(prop => typeof pendingWidget[prop] === 'object' || pendingWidget[prop] !== baseWidget[prop])
    if (differentProps.length === 1 || differentProps.length <= allProps.length / 3) {
      differentProps.map(patchProp => {
        patch[prefixes + '.' + patchProp] = pendingWidget[patchProp]
      })
    } else {
      patch[prefixes] = pendingWidget
    }
  }
}
