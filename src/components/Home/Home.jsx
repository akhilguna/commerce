import React from "react";
import ProductList from "../ProductList";
import { Checkbox } from 'antd';
import { Menu, Dropdown } from 'antd';
import '../feedback.css';
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: [],
      dropdown:[],
    };
  }
  render() {
    const CheckboxGroup = Checkbox.Group;
    return (
      <React.Fragment>
       <div className="App">
       <div class="container-fluid">  
       <div class="row">    
       <div class="col-md-2">
      
       <div class="filter-widget">
						<h2 class="fw-title">Categories</h2>
						<ul class="category-menu">
              <CheckboxGroup onChange={value => this.setState({checked: value})}>
              <li class=""><Checkbox value='1'>Women wear</Checkbox></li>
             <li class=""><Checkbox value='2'>Man wear</Checkbox></li>
             <li class=""><Checkbox value='3'>Children</Checkbox></li>
             <li class=""><Checkbox value='4'>Bags and purses</Checkbox></li>
             <li class=""><Checkbox value='5'>Eye wear</Checkbox></li>
       </CheckboxGroup>
						</ul>
           
					</div>
          <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me 
    </a>
  </Dropdown>
       </div>
       <div class="col-md-10">
       {this.state.checked.indexOf('1') !== -1 ? <ProductList/> : null}
       {this.state.checked.indexOf('2') !== -1 ? <ProductList/> : null}
       {this.state.checked.indexOf('3') !== -1 ? <ProductList/> : null}
       {this.state.checked.indexOf('4') !== -1 ? <ProductList/> : null}
       {this.state.checked.indexOf('5') !== -1 ? <ProductList/> : null}
       </div>
       </div>
     </div>
     </div>
     </React.Fragment>
    );
  }
}
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

export default Home;
