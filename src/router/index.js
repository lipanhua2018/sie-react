import Settlement from '../components/pages/Settlement/Settlement';
import RepairPerson from '../components/pages/RepairPerson/RepairPerson';
import DetailsPage from '../components/pages/DetailsPage/DetailsPage';
import Guzhang from '../components/pages/Guzhang/Guzhang';
import Yewu from '../components/pages/Yewu/Yewu';
import Addorder from '../components/pages/Addorder/Addorder';
export const main = [
    { path: '/Settlement', exact: true, name: '结算单', component: Settlement },
    { path: '/RepairPerson', exact: true,  name: '报修人', component: RepairPerson },
    { path: '/Guzhang', exact: true,  name: '故障信息', component: Guzhang },
    { path: '/Yewu', exact: true,  name: '业务跟进', component: Yewu },
    { path: '/DetailsPage', exact: true,  name: '详情页', component: DetailsPage },
    { path: '/Addorder', exact: true,  name: '新增订单', component: Addorder },
    { path: '/', exact: true,  name: '报修人', component: RepairPerson }
]

export const menus = [    // 菜单相关路由
]

export const routerConfig =  {
    main, menus
}
