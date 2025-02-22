// import { Link } from 'react-router-dom'
// import './Heading.css'
// import {ShoppingCartOutlined } from '@ant-design/icons'
// import { ClockCircleOutlined } from '@ant-design/icons';
// import { Avatar, Badge, Space  } from 'antd';
// import {cart} from "../Main/Cart/index"
// function Heading(){
//     return(
//         <div >
//          <nav className="navbar bg-body-tertiary navbar-expand-lg bg-body-tertiary" style={{position:'fixed',zIndex:'1000',width:'100%'}}>
//             <div className="container" >
//                     <div>
                  
//                             <Link className="navbar-brand" to="/" >
//                             <img src="https://thucpham4.giaodienwebmau.com/wp-content/uploads/2021/10/lg.png" alt="Logo" width="178" height="83" className="d-inline-block align-text-top"/>  
//                             </Link>
                           
//                     </div>    
//                     <div>
//                          <ul className="nav justify-content-center">
//                         <li className="nav-item">
                   
//                             <Link className="nav-link text" aria-current="page" to="/">Trang chủ</Link>
                           
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link  text" href="#">Sản Phẩm</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link text" href="">Tin Tức</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link disabled text" aria-disabled="true">Giới thiệu</a>
//                         </li>
//                         </ul>
//                     </div>
//                     <div style={{ marginRight:"30px"}}>
//                             <form className="d-flex" role="search">
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                             <button className="btn btn-outline-success" type="submit">Search</button>
//                             </form>
//                     </div>
//                     <div >
//                           <button className="textbutton">
//                           <a href="" className='textlogin'> Đăng nhập/Đăng kí</a>
//                           </button>
                          
//                           <Badge count={5} style={{color : 'white' , backgroundColor:'green', fontSize:15}}>
//                           <button className="textbutton">
//                           {/* <a href="https://bitas.com.vn/lib/pic/giohang2.png" className="textlogin">Giỏ Hàng</a> */}
                          
//                             Giỏ hàng <span style={{fontSize:'20px'}}><ShoppingCartOutlined /></span>
//                             <Link to={<cart />}> </Link>
//                           </button>
//     </Badge>
                        
//                     </div>
                
//             </div>
//             </nav>
//         </div>
//     )

// }
// export default Heading  

import { Link } from 'react-router-dom'
import './Heading.css'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Avatar, Badge, Space } from 'antd'

function Heading() {
    return (
        <div style={{display:'block' , paddingBottom:'100px'}}>
            <nav className="navbar bg-body-tertiary navbar-expand-lg bg-body-tertiary" style={{ position: 'fixed', zIndex: '1000', width: '100%' }}>
                <div className="container">
                    <div>
                        <Link className="navbar-brand" to="/" >
                            <img src="https://thucpham4.giaodienwebmau.com/wp-content/uploads/2021/10/lg.png" alt="Logo" width="178" height="83" className="d-inline-block align-text-top" />
                        </Link>
                    </div>
                    <div>
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <Link className="nav-link text" aria-current="page" to="/">Trang chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text" to="/product">Sản Phẩm</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text" to="/tin-tuc">Tin Tức</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled text" to="/gioi-thieu" aria-disabled="true">Giới thiệu</Link>
                            </li>
                        </ul>
                    </div>
                    <div style={{ marginRight: "30px" }}>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div>
                        <button className="textbutton">
                            <Link to="/login" className='textlogin'> Đăng nhập/Đăng kí</Link>
                        </button>

                        <Badge count={5} style={{ color: 'white', backgroundColor: 'green', fontSize: 15 }}>
                            <button className="textbutton">
                                <Link to="/cart" className="textlogin">
                                    Giỏ hàng <span style={{ fontSize: '20px' }}><ShoppingCartOutlined /></span>
                                </Link>
                            </button>
                        </Badge>

                    </div>

                </div>
            </nav>
        </div>
    )
}
export default Heading
