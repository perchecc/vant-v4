import wx from 'weixin-js-sdk'
import { showToast } from 'vant'

export const navigateTo = params => {
  isMiniProgram(isMiniProgramEnv => {
    if (isMiniProgramEnv) {
      wx.miniProgram.navigateTo(params)
    } else {
      showToast('无法跳转')
    }
  })
}

/* 是否在微信小程序当中 */
export const isMiniProgram = callback => {
  var ua = window.navigator.userAgent.toLowerCase()
  if (ua.indexOf('micromessenger') === -1) {
    // 不在微信或者小程序中
    callback(false)
  } else {
    // window.__wxjs_environment === 'miniprogram' 为true 则表示在微信小程序的环境
    if (!window.WeixinJSBridge || !window.WeixinJSBridge.invoke) {
      document.addEventListener(
        'WeixinJSBridgeReady',
        function () {
          callback(window.__wxjs_environment === 'miniprogram')
        },
        false
      )
    } else {
      callback(window.__wxjs_environment === 'miniprogram')
    }
  }
}