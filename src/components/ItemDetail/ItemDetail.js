import React, { Component } from "react";
import "./ItemDetail.scss";
import url from "../../config";
class ItemDetail extends Component {
  constructor() {
    super();
    this.state = {
      url: true,
      fb: true,
      kakao: true,
      like: true,
      num: 1,
      foldUp: "hide",
      view: "disappear",
      benefits: [],
      best: null,
      bonus: null,
      gift: null,
      new: null,
      on_sale: null,
      sold_out: null,
      sub_category: "",
      fourth_category: "",
      description: "",
      main_image: "",
      price: 0,
      num_reviews: 0,
      rating: 0,
      title: "",
      item: {},
    };
  }

  foldUp = () => {
    if (this.state.view === "appear") {
      this.setState({ view: "disappear" });
    } else {
      this.setState({ view: "appear" });
    }
    if (this.state.foldUp === "show") {
      this.setState({ foldUp: "hide" });
    } else {
      this.setState({ foldUp: "show" });
    }
  };

  changeImage = (key) => {
    this.setState({ [key]: !this.state[key] });
  };

  total = () => {
    if (this.state.num === 0) {
      return 0;
    }
    let tmp;
    if ("discount_percent" in this.state.item) {
      tmp = (
        this.state.num *
        this.state.price *
        (1 - this.state.item.discount_percent)
      ).toString();
    } else {
      tmp = (this.state.num * this.state.price).toString();
    }

    return tmp.slice(0, tmp.length - 3) + "," + tmp.slice(tmp.length - 3);
  };

  componentDidMount = () => {
    fetch(url + "/data/itemDetail.json", {})
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          benefits: response["Item"]["benefits"],
          best: response["Item"][""],
          bonus: response["Item"]["bonus"],
          gift: response["Item"]["gift"],
          new: response["Item"]["new"],
          on_sale: response["Item"]["on_sale"],
          sold_out: response["Item"]["sold_out"],
          sub_category: response["Item"]["sub_category"],
          fourth_category: response["Item"]["fourth_category"],
          description: response["Item"]["description"],
          main_image: response["Item"]["main_image"],
          price: response["Item"]["price"],
          num_reviews: response["Item"]["num_reviews"],
          rating: response["Item"]["rating"],
          title: response["Item"]["title"],
          item: response["Item"],
        })
      );
  };

  priceTop = () => {
    if ("discount_percent" in this.state.item) {
      return this.state.price + " 원";
    }
  };

  finalPrice = () => {
    if ("discount_percent" in this.state.item) {
      let str = (
        this.state.price *
        (1 - this.state.item.discount_percent)
      ).toString();
      return str.slice(0, str.length - 3) + "," + str.slice(str.length - 3);
    } else {
      let str = this.state.price.toString();
      return str.slice(0, str.length - 3) + "," + str.slice(str.length - 3);
    }
  };

  discount_percent = () => {
    if ("discount_percent" in this.state.item) {
      return this.state.item.discount_percent * 100 + "%";
    }
  };

  render() {
    // console.log(this.state);
    return (
      <div className="Pager">
        <div className="ItemDetail">
          <div className="leftWrap">
            <div className="left">
              <div className="topTag">
                <img
                  className={this.props.data && this.props.data.best ? "" : ""}
                  src="https://www.osulloc.com/kr/ko/static_renew/images/label_best.gif"
                  alt="best"
                />
                <img
                  className={
                    this.props.data && this.props.data.gift ? "" : "none"
                  }
                  src="https://www.osulloc.com/kr/ko/static_renew/images/label_giftpack.gif"
                  alt="gift"
                />
                <img
                  className={this.props.data && this.props.data.sale ? "" : ""}
                  src="https://www.osulloc.com/kr/ko/static_renew/images/label_sale.gif"
                  alt="sale"
                />
                <img
                  className={
                    this.props.data && this.props.data.bonus ? "" : "none"
                  }
                  src="https://www.osulloc.com/kr/ko/static_renew/images/label_gift.gif"
                  alt="bonus"
                />
                <img
                  className={
                    this.props.data && this.props.data.sold_out ? "" : "none"
                  }
                  src="https://www.osulloc.com/kr/ko/static_renew/images/label_sold.gif"
                  alt="soldout"
                />
                <img
                  className={
                    this.props.data && this.props.data.new ? "" : "none"
                  }
                  src="https://www.osulloc.com/kr/ko/static_renew/images/label_new.gif"
                  alt="new"
                />
              </div>
              <img
                className="item"
                alt="item"
                src="https://www.osulloc.com/upload/kr/ko/adminImage/PW/US/20180406140800938CQ.png?quality=a"
              ></img>
              <div className="bottomTag">
                <ul>
                  <li className="ic01">
                    <span>뷰티포인트 250P 적립</span>
                  </li>
                  <li className="ic02">
                    <span>찻잎 250P 적립</span>
                  </li>
                  <li className="ic03">
                    <span>3만원 이상 무료배송</span>
                  </li>
                  <li className="ic04">
                    <span>(유료)포장가능</span>
                  </li>
                  <li className="ic05">
                    <span>쇼핑백동봉</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="review">
              <div className="revLeft">
                <div className="leftBox">
                  <span className="txt">리뷰 평점</span>
                  <span className="score">4.7</span>
                </div>
                <div className="stars">
                  <div className="bar40"></div>
                </div>
              </div>
              <div className="revRight">
                <div className="rightBox">
                  <span>REVIEW</span>
                  <span>557</span>
                </div>
                <img
                  alt="arrow"
                  src="https://www.osulloc.com/kr/ko/static_renew/images/item_detail/arr_10x14.png?quality=80"
                />
              </div>
            </div>
          </div>
          <div className="rightWrap">
            <div className="right">
              <div className="category">
                <div>
                  <span>{this.state.sub_category}</span>
                </div>
                <img
                  alt="arrow right"
                  src="https://www.osulloc.com/kr/ko/static_renew/images/item_detail/arr_10x14.png?quality=80"
                />
                <div>
                  <span>{this.state.fourth_category}</span>
                </div>
              </div>
              <div className="itemName">{this.state.title}</div>
              <div className="description">{this.state.description}</div>
              <div className="middleBox">
                <div className="icons">
                  <img
                    alt="url"
                    onMouseOver={() => this.changeImage("url")}
                    onMouseLeave={() => this.changeImage("url")}
                    src={
                      this.state.url
                        ? "https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_url.png?quality=80"
                        : "https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_url_on.png?quality=80"
                    }
                  />
                  <img
                    alt="fb"
                    onMouseOver={() => this.changeImage("fb")}
                    onMouseLeave={() => this.changeImage("fb")}
                    src={
                      this.state.fb
                        ? "https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_facebook.png?quality=80"
                        : "https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_facebook_on.png?quality=80"
                    }
                  />
                  <img
                    alt="kakao"
                    onMouseOver={() => this.changeImage("kakao")}
                    onMouseLeave={() => this.changeImage("kakao")}
                    src={
                      this.state.kakao
                        ? "https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_kakao.png?quality=80"
                        : "https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_kakao_on.png?quality=80"
                    }
                  />
                  <img
                    alt="like"
                    onMouseOver={() => this.changeImage("like")}
                    onMouseLeave={() => this.changeImage("like")}
                    src={
                      this.state.like
                        ? "https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_like.png?quality=80"
                        : "https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_like_hover.png?quality=80"
                    }
                  />
                </div>
                <div className="price">
                  <div className="priceTop">
                    <span>{this.priceTop()}</span>
                  </div>
                  <div className="priceBottom">
                    <div className="finalPrice">
                      {this.finalPrice()}
                      <span>원</span>
                    </div>
                    <div className="percent">{this.discount_percent()}</div>
                  </div>
                </div>
              </div>
              <div className="additionals"></div>
              <div className="choice">
                <div className="purchaseNum">
                  <div className="chooseText">구매수량</div>
                  <div className="chooser">
                    <button
                      onClick={() => {
                        if (this.state.num !== 0) {
                          this.setState({ num: this.state.num - 1 });
                        }
                      }}
                    >
                      <div className="btnBorder"></div>
                    </button>
                    <div className="number">{this.state.num}</div>
                    <button
                      onClick={() => this.setState({ num: this.state.num + 1 })}
                    >
                      <div>+</div>
                    </button>
                  </div>
                </div>
                <div className="shoppingBag">
                  <div onClick={() => this.foldUp()} className="topSec">
                    <div>쇼핑백 &nbsp; (+100원)</div>
                    <button className={this.state.foldUp}></button>
                  </div>
                  <div className="show"></div>
                </div>
                <div className="noPackage">
                  <div>포장불가</div>
                </div>
              </div>
              <div className="total">
                <div className="text">상품금액 합계</div>
                <div className="totalPrice">
                  <div className="cost">{this.total()}</div>
                  <div className="won">원</div>
                </div>
              </div>
              <div className="checkout">
                <div className="gift">선물하기</div>
                <div className="basket">장바구니</div>
                <div className="buy">바로구매</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemDetail;
