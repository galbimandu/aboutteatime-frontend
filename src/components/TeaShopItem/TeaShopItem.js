import "./TeaShopItem.scss";
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
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
  finalPrice = () => {
    if (Math.floor(this.props.data.discount_percent) !== 1) {
      let str = this.props.data.price * (1 - this.props.data.discount_percent);
      return str.toLocaleString();
    } else {
      let str = this.props.data.price;
      return str.toLocaleString();
    }
  };

  priceTop = () => {
    if (this.props.data.discount_percent !== 1) {
      return this.props.data.price.toLocaleString() + " 원";
    }
  };

  discount_percent = () => {
    if (this.props.data.discount_percent !== 1.0) {
      return `(${this.props.data.discount_percent * 100}% ↓ )`;
    }
  };

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
              (image ? this.props.data.front : this.props.data.hover)
            }
            onMouseOver={() => this.changeImage("image")}
            onMouseLeave={() => this.changeImage("image")}
            onClick={() =>
              this.props.history.push(`/detail/${this.props.data.id}`)
            }
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
          <img
            className={
              this.props.data && this.props.data.sold_out ? "" : "none"
            }
            src="https://www.osulloc.com/kr/ko/static_renew/images/label_sold.gif"
            alt="soldout"
          />
          <img
            className={this.props.data && this.props.data.new ? "" : "none"}
            src="https://www.osulloc.com/kr/ko/static_renew/images/label_new.gif"
            alt="new"
          />
        </div>
        <p className="name">{this.props.data && this.props.data.title}</p>
        {this.props.data && (
          <p className="price">
            <div className="finalPrice">
              <strong>{this.finalPrice()}</strong>
              <span> 원</span>
            </div>
            <div className="priceBottom">
              {Math.floor(this.props.data.discount_percent) !== 1 && (
                <div className="priceTop">
                  <span>{this.priceTop()}</span>
                </div>
              )}
              {Math.floor(this.props.data.discount_percent) !== 1 && (
                <div className="percent">{this.discount_percent()}</div>
              )}
            </div>
          </p>
        )}

        <div className="likecomment">
          <img alt="heart" src={heart} />
          <span>{this.props.data && this.props.data.num_wishlist}</span>
          <img alt="comment" src={comment} />
          <span>{this.props.data && this.props.data.num_reviews}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(TeaShopItem);
