import fetch from './fetch';

export default {
  fetchPoundRecieve(params) { //过磅收料
    return fetch('/api/services/app/table31Order/getMainPageList', params)
  },
  fetchSupplier(params) { //过磅收料供应商
    return fetch('/api/services/app/commonSupplier/getMainPageList', params)
  },
  fetchPDARecieve(params) { //PDA收料
    return fetch('/api/services/app/table40Order/getMainPageList', params)
  },
  fetchPDADetial(params) { //PDA收料明细
    return fetch('/api/services/app/table40Order/getMainObjectForEdit', params)
  },
    requestOrganize(params) {//获取组织机构树
      return fetch('/api/services/app/organize/GetOrganizes', params)
    }
}
