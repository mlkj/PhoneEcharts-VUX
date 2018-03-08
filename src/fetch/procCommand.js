import fetch from  './fetch';

export default {
  requestProcCommand(params) {//执行存储过程
      return fetch('/api/services/app/sqlExecute/ExecuteSqlAndProcCommand', params)
    },
    requestOrganize(params) {//获取组织机构树
      return fetch('/api/services/app/organize/GetOrganizes', params)
    },
    fetchSupplier(params) { //过磅收料供应商
      return fetch('/api/services/app/commonSupplier/getMainPageList', params)
    },
}