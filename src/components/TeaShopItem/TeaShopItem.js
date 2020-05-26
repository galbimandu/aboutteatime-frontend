import "./TeaShopItem.scss";
import url from "../../config";
import React, { Component } from "react";

import heart from "../../images/itemheart.gif";
import comment from "../../images/itemcomment.gif";
import image from "../../images/image.png";
import image2 from "../../images/image2.png";


class TeaShopItem extends Component{
  constructor(){
    super();
    this.state = {
      image : true
    }
  }
  changeImage = () =>{
    this.setState({image : !this.state.image})
  }
  render(){
    return(
      <div className='ShopItem' >
        <div>
          <img src = { this.state.image ? image : image2 } onMouseOver = { this.changeImage } onMouseLeave = { this.changeImage }>
          </img>
          
        </div>
        <img></img>
        <div className = "tag">

        </div>
        <p className = "name">

        </p>
        <p className = "price">

        </p>
        <div>
          <span><img src = { heart }/></span>
          <span><img src = { comment }/></span>
        </div>
      </div>
    )
  }
}

export default TeaShopItem ;
