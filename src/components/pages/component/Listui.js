import React, { Component } from 'react';

const Listui = (props) => {
    console.log(props, 'Listui')
    return (<div>
        <h3>待处理业务</h3>
        <ul>
            {props.list.map((item,index) => {
                return (
                    <li key={index} className="yewu-list">
                        <input defaultChecked={item.checkd} onChange={props.handleCheck.bind(this)} type="checkbox" />
                        <span>{item.id}</span>
                        <span>{item.name}</span>
                        <input type="button" value="已处理" />
                        <input type="button" onClick={props.onDelete.bind(this, item)} value="删除" />
                    </li>
                )
            })}
        </ul>
        <h3>已处理业务</h3>
    </div>)
}

export default Listui;
