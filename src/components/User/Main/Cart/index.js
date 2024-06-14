
import React, { useEffect, useState } from 'react';
import './Cart.scss';
import { Button, Col, Divider, Input, Row, Space, Table, Tag } from 'antd';
import { MdDiscount } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { useSelector } from 'react-redux';

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





export default function Cart() {


  const listOrder = useSelector(state => state.order.carts)
  const [totalPrice, setTotalPrice] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    console.log(listOrder)
    let tempSubtotal = 0;
    listOrder.forEach(order => {
      const price = order.detail.price;
      const quantity = order.detail.quantity
      tempSubtotal += price * quantity;
    });
    setTotalPrice(tempSubtotal)
  }, [listOrder]);

  
  

  const data = listOrder.map((order, index) => ({
    key: index,
    name: [
      { icon: <span style={{fontSize:'25px'}}><CiCircleRemove /></span> },
      { image: <img style={{width:'75px', height:'auto'}} src={order.detail.image} alt={order.name}/> },
      { name: <span style={{color:'green'}}>{order.detail.name}</span> },
    ],
    price: <span style={{color:'darkOrange', fontWeight:'bold'}}>{order.detail.price}</span>,
    quantity: order.quantity,
    totalPrice : <span style={{color:'darkOrange', fontWeight:'bold'}}>{(order.detail.price )}</span>,
  }));
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
            
          </span>
        </div>
        <hr />
        <div className='tamtinh'>
          <span style={{ color: 'gray' }}>Tổng tiền</span>
          <span style={{ color: 'orange', fontWeight: 'bold' }}>
            {totalPrice}
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
