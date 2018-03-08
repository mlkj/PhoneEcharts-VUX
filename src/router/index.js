const Login = () => import('../pages/Login.vue')
const Home = () => import('../pages/Home.vue')
const Homepage = () => import('../pages/homePage/Homepage.vue')
const NewsList = () => import('../pages/systeminfo/NewsList.vue')
const Page404 = () => import('../components/Page404.vue')

const recieveWarning = () => import('../pages/materialWarning/recieve/recieveWarning.vue')
const deliveryWarning = () => import('../pages/materialWarning/delivery/deliveryWarning.vue')

const poundRecieve = () => import('../pages/receiveSendInfo/poundInfo/poundRecieve.vue')
const PDARecieve = () => import('../pages/receiveSendInfo/PDA/PDARecieve.vue')
const concreteInfo = () => import('../pages/receiveSendInfo/concreteInfo/concreteInfo.vue')
const rebarInfo = () => import('../pages/receiveSendInfo/rebarInfo/rebarInfo.vue')
const inventoryInfo = () => import('../pages/Inventory/inventoryInfo.vue')

const recieveReport = () => import('../pages/queryStatistic/receiveReport/recieveReport.vue')
const deliveryReport = () => import('../pages/queryStatistic/deliveryReport/deliveryReport.vue')

const concreteAnalysis = () => import('../pages/concreteAccounting/concreteAnalysis.vue')
const materialAnalysis = () => import('../pages/concreteAccounting/materialAnalysis.vue')

const rebarAnalysis = () => import('../pages/rebarAccounting/rebarAnalysis.vue')
const rebarCenter = () => import('../pages/rebarAccounting/rebarCenter.vue')

const routes=[
      {path: '/login', component: Login }, 
      { path: '/', redirect: "/login" },//重定向    
      {path: '/home', component: Home, name: '工作台', meta: {requireMenue: true}},
      {path: '/homepage', component: Homepage, meta: {requireMenue: false},
      children: [
            { path: ':tableName', component: Homepage,meta: {children:true}},
      ] },
      {path: '/newsList', component: NewsList , name: '微应用', meta: {requireMenue: true}},

      {path: '/recieveWarning', component: recieveWarning , name: '收料预警', meta: {requireMenue: false}}, 
      {path: '/deliveryWarning', component: deliveryWarning , name: '发料预警', meta: {requireMenue: false}}, 

      {path: '/poundRecieve', component: poundRecieve , name: '过磅收料', meta: {requireMenue: false}}, 
      {path: '/PDARecieve', component: PDARecieve , name: 'PDA收发料', meta: {requireMenue: false}}, 
      {path: '/concreteInfo', component: concreteInfo , name: '混凝土收发', meta: {requireMenue: false}}, 
      {path: '/rebarInfo', component: rebarInfo , name: '钢筋发放', meta: {requireMenue: false}}, 
      {path: '/inventoryInfo', component: inventoryInfo , name: '库存信息', meta: {requireMenue: false}}, 

      {path: '/recieveReport', component: recieveReport , name: '收料报表', meta: {requireMenue: false}}, 
      {path: '/deliveryReport', component: deliveryReport , name: '发料报表', meta: {requireMenue: false}}, 

      {path: '/concreteAnalysis', component: concreteAnalysis , name: '混凝土节超分析', meta: {requireMenue: false}},  
      {path: '/materialAnalysis', component: materialAnalysis , name: '原材料节超分析', meta: {requireMenue: false}},  
      
      {path: '/rebarAnalysis', component: rebarAnalysis , name: '钢筋节超分析', meta: {requireMenue: false}},  
      {path: '/rebarCenter', component: rebarCenter , name: '钢筋加工中心分析', meta: {requireMenue: false}},  

      {path: '/*',component: Page404,name: '页面不存在', meta: {requireMenue: false}}    
];


export default routes;