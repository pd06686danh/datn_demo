
import React, { useState } from 'react';
import './Cart.scss';
import { Button, Col, Divider, Input, Row, Space, Table, Tag } from 'antd';
import { MdDiscount } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";

const columns = [
  {
    title: 'Sản phẩm',
    dataIndex: 'name',
    key: 'name',
    render: (nameArray) => (
      <div style={{display:'flex', alignItems:'center', gap:'9px'}}>
        {nameArray.map((nameObj, index) => (
          <div key={index}>
            {Object.keys(nameObj).map((key) => (
              <span key={key}>{nameObj[key]} </span>
            ))}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Giá',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Số lượng',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Tạm tính',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
  },
 
];

const data = [
  {
    key: '1',
    name: [
      { icon: <span style={{fontSize:'25px'}}><CiCircleRemove /></span> },
      { image: <img style={{width:'75px', height:'auto'}} src='https://thucpham4.giaodienwebmau.com/wp-content/uploads/2021/10/Group-8053-510x512.jpg'/> },
      { name: <span style={{color:'green'}}>Củ cải xanh</span> },
    ],
    price: <span style={{color:'darkOrange', fontWeight:'bold'}}>150.000 VND</span>,
    quantity: 1,
    totalPrice : <span style={{color:'darkOrange', fontWeight:'bold'}}>150.000 VND</span>,
  },
  
];

export default function Cart() {
  const price = 300000;
  const totalPrice = 600000;
  const [quantity , setQuantity]= useState(1)
  const upQuantity = () => {
    setQuantity(pre => pre + 1)
  }
  const downQuanitity = () => {
    if(quantity < 1){return}
    setQuantity(pre => pre - 1)
  }
  return (
    <Row className='cart-container'>
      <Col className='left' span={15}>
        <Table columns={columns} dataSource={data} />
      </Col>

      <Col span={1}></Col>
      <Col className='right' span={8}>
        <span className='title'>Cộng giỏ hàng</span>
        <hr />
        <div className='tamtinh'>
          <span style={{ color: 'gray' }}>Tạm tính</span>
          <span style={{ color: 'orange', fontWeight: 'bold' }}>
            {price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
          </span>
        </div>
        <hr />
        <div className='tamtinh'>
          <span style={{ color: 'gray' }}>Tổng tiền</span>
          <span style={{ color: 'orange', fontWeight: 'bold' }}>
            {totalPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
          </span>
        </div>
        <hr />
        <button className='btn-submit'>Tiến hành thanh toán</button>
        <div className='discounts'>
          <span style={{ fontSize: '17px' }}><MdDiscount /></span>
          <span style={{ fontSize: '15px', padding: '0 5px' }}>Phiếu ưu đãi</span>
        </div>
        <hr />
        <Input style={{ padding: '10px', outline: 'none' }} placeholder='Mã giảm giá' />
        <button className='btn-discounts'>Áp dụng</button>
      </Col>
      

    </Row>
  );
}
