import Settlement from '../components/pages/Settlement/Settlement';
import RepairPerson from '../components/pages/RepairPerson/RepairPerson';
import DetailsPage from '../components/pages/DetailsPage/DetailsPage';

export const main = [
    { path: '/Settlement', exact: true, name: '结算单', component: Settlement },
    { path: '/RepairPerson', exact: true,  name: '报修人', component: RepairPerson },
    { path: '/DetailsPage', exact: true,  name: '详情页', component: DetailsPage },
    { path: '/', exact: true,  name: '报修人', component: RepairPerson }
]

export const menus = [    // 菜单相关路由
]

export const routerConfig =  {
    main, menus
}