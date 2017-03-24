/**
 * Created by qx on 2017/3/1.
 */
import {
  Login,
  RouterView,
  Modules
} from '../components'

export default [
  {
    path: '/',
    redirect: (to) => {
      return '/main'
    },
    hidden: true
  }, {
    path: '/login',
    component: Login,
    hidden: true
  }, {
    path: '/404',
    component: RouterView.NotFound,
    hidden: true
  },
  {
    path: '/main',
    component: RouterView.Main,
    children: [
      {
        path: '',
        redirect: to => {
          return 'home'
        },
        hidden: true
      },
      {
        path: 'home',
        component: Modules.Home,
        hidden: true
      },
      {
        path: 'summaryGraph',
        name: '舆情统计图',
        icon: '',
        component: RouterView.Content,
        children: [{
          path: 'company',
          name: '企业舆情统计图',
          icon: '',
          component: Modules.SummaryGraph.Company
        }, {
          path: 'product',
          name: '产品舆情统计图',
          icon: '',
          children: [{
            path: 'pingAnMF',
            name: '平安理财',
            icon: '',
            component: Modules.SummaryGraph.PingAnMF
          }]
        }, {
          path: 'case',
          name: '事件舆情统计图',
          icon: '',
          children: [{
            path: 'FinancialLicense',
            name: '金融牌照',
            icon: '',
            component: Modules.SummaryGraph.FinancialLicense
          }]
        }]
      }, {
        path: 'information',
        name: '舆情资讯',
        icon: '',
        component: Modules.Information
      }, {
        path: 'AppInfo',
        name: 'APP应用信息',
        icon: '',
        component: RouterView.Content,
        children: [{
          path: 'pingAnCFB',
          name: '平安财富宝',
          icon: '',
          component: Modules.AppInfo.PingAn
        }]
      }
    ]
  }
]
