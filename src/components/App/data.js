export default {
    menuData: [
        {
            subMenu: '一级目录',
            key: 'sub1',
            title: '业务管理',
            iconType: 'user',
            childMenu: [
                {key: '001', name: '报修人', path: '/RepairPerson'},
                {key: '002', name: '结算单', path: '/Settlement'},
                {key: '003', name: '故障信息', path: '/Guzhang'},
                {key: '004', name: '业务跟进', path: '/Yewu'},
            ]
        },
        {
            subMenu: '一级目录',
            key: 'sub2',
            title: '订单管理',
            iconType: 'laptop',
            childMenu: [
                {key: '005', name: '新增订单', path: '/Addorder'},
                {key: '006', name: '已退订单', path: '/'},
                {key: '007', name: '故障订单', path: '/'},
                {key: '008', name: '结算订单', path: '/'},
            ]
        },
        {
            subMenu: '一级目录',
            key: 'sub3',
            title: '系统管理',
            iconType: 'notification',
            childMenu: [
                {key: '009', name: '菜单权限', path: '/'},
                {key: '010', name: '人员配置', path: '/'},
                {key: '011', name: '系统设置', path: '/'},
            ]
        }
    ],
    headMenu: [
        {key: 'system-001', name: '产品系统', path: '/'},
        {key: 'system-002', name: '业务系统', path: '/'},
        {key: 'system-003', name: '售后系统', path: '/'},
    ]
}