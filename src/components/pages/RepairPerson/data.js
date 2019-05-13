export default {
    searchFrom: [
        { label: '报修姓名', key: 'repairName' },
        { label: '报修电话', key: 'repairTel' },
        { label: '报修单位', key: 'repairUnit' },
        { label: '报修编码', key: 'repairCode' },
    ],
    columns: [{
        title: '报修编码',
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
        name: '张钰录',
        tel: 18097958788,
        unit: '世光创建集团',
        address: '中山坦洲大道108号',
    }, {
        code: 'BM20190429',
        name: '刘学邮',
        tel: 13855568880,
        unit: '雅居乐集团',
        address: '中山三乡大道101号',
    }, {
        code: 'BM20190428',
        name: '斐少锋',
        tel: 15578889990,
        unit: '绿城控股有限公司',
        address: '广州天河大道北11号',
    }]
}