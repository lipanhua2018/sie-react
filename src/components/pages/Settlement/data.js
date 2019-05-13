export default {
    searchFrom: [
        { label: '结算姓名', key: 'repairName' },
        { label: '结算电话', key: 'repairTel' },
        { label: '结算单位', key: 'repairUnit' },
        { label: '结算编码', key: 'repairCode' },
    ],
    columns: [{
        title: '结算编码',
        dataIndex: 'code',
        width: 250,
        key: 'code',
        // render: text => <a href="javascript:;">{text}</a>,
    }, {
        title: '姓名',
        dataIndex: 'name',
        width: 150,
        key: 'name'
    }, {
        title: '电话',
        dataIndex: 'tel',
        width: 200,
        key: 'tel'
    }, {
        title: '单位',
        dataIndex: 'unit',
        width: 300,
        key: 'unit'
    }, {
        title: '地址',
        dataIndex: 'address',
        width: 350,
        key: 'address'
    }],
    data: [{
        code: 'BM20190430',
        name: '黄少华',
        tel: 18097958788,
        unit: '世光创建股份集团',
        address: '中山市坦洲大道108号',
    }, {
        code: 'BM20190429',
        name: '李世民',
        tel: 13855562350,
        unit: '大唐天下科技股份有限公司',
        address: '广州市广州大道101号大唐天下科技大厦',
    }, {
        code: 'BM20190428',
        name: '任我行',
        tel: 15578876750,
        unit: '黑木崖集团',
        address: '河北黑山黑木崖101号栈',
    }, {
        code: 'BM20190507',
        name: '聂小凤',
        tel: 15986543221,
        unit: '一号客栈有限公司',
        address: '北京市海淀区王府井路一号客栈大厦',
    }]
}