import React, { Component } from "react";
import "./TeaShopPage.scss";
import TeaShopList from "../../components/TeaShopList/TeaShopList";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
class TeaShopPage extends Component {
  constructor() {
    super();
  }

  render() {
    
    return (
      <div className="TeaShopPage">
   
      
        <TeaShopList history={this.props.history}/>
        <Footer />
      </div>
    );
  }
}

export default TeaShopPage;
