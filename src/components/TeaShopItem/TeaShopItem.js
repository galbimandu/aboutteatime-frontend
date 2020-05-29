import "./TeaShopItem.scss";
import React, { Component } from "react";

import heart from "../../images/itemheart.gif";
import comment from "../../images/itemcomment.gif";

class TeaShopItem extends Component {
  constructor() {
    super();
    this.state = {
      image: true,
      basket: true,
    };
  }

  changeImage = (val) => {
    this.setState({ [val]: !this.state[val] });
  };

  render() {
    const { image } = this.state;

    return (
      <div className="ShopItem">
        <div className="image">
          <img
            src={
              this.props.data &&
              (image ? this.props.data.front : this.props.data.back)
            }
            onMouseOver={() => this.changeImage("image")}
            onMouseLeave={() => this.changeImage("image")}
            alt="item"
          />
          <img
            className={image ? "basket" : ""}
            src={
              this.state.basket
                ? "https://www.osulloc.com/kr/ko/static_renew/images/ico_big_bucket_filled.png?quality=80"
                : "https://www.osulloc.com/kr/ko/static_renew/images/ico_big_bucket_filled_over.png?quality=80"
            }
            onMouseOver={() => {
              this.changeImage("basket");
              this.changeImage("image");
            }}
            onMouseLeave={() => {
              this.changeImage("basket");
              this.changeImage("image");
            }}
            alt="basket"
          />
        </div>
        <div className="tag">
          <img
            className={this.props.data && this.props.data.best ? "" : "none"}
            src="https://www.osulloc.com/kr/ko/static_renew/images/label_best.gif"
            alt="best"
          />
          <img
            className={this.props.data && this.props.data.gift ? "" : "none"}
            src="https://www.osulloc.com/kr/ko/static_renew/images/label_giftpack.gif"
            alt="gift"
          />
          <img
            className={this.props.data && this.props.data.sale ? "" : "none"}
            src="https://www.osulloc.com/kr/ko/static_renew/images/label_sale.gif"
            alt="sale"
          />
          <img
            className={this.props.data && this.props.data.free ? "" : "none"}
            src="https://www.osulloc.com/kr/ko/static_renew/images/label_gift.gif"
            alt="free"
          />
        </div>
        <p className="name">{this.props.data && this.props.data.name}</p>
        <p className="price">
          <strong>{this.props.data && this.props.data.price}</strong> 원
        </p>
        <div className="likecomment">
          <img alt="heart" src={heart} />
          <span>{this.props.data && this.props.data.likes}</span>
          <img alt="comment" src={comment} />
          <span>{this.props.data && this.props.data.comments}</span>
        </div>
      </div>
    );
  }
}

export default TeaShopItem;
