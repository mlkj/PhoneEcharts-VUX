import fetch from  './fetch';

export default {
  GetToken(params) {
    return fetch('/Token', params)
  },
  requestUpdateCurrentUserInfo(params) {//切换角色
    return fetch('/api/services/app/session/UpdateCurrentUserInfo', params)
  },
  requestGetCurrentLoginInformations(params) {//获取用户信息
      return fetch('/api/services/app/session/GetCurrentLoginInformations', params)
    }
}
