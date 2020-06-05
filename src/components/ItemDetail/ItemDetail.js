import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ItemDetail.scss";
import urlset from "../../config";
class ItemDetail extends Component {
  constructor() {
    super();
    this.state = {
      url: true,
      fb: true,
      kakao: true,
      like: true,
      num: 1,
      foldUp: false,
      view: false,
      benefits: [],
      best: null,
      bonus: null,
      gift: null,
      neww: null,
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
      discount_percent: 0,
      bp: false,
      bp_text: "",
      tl: false,
      tl_text: "",
      fd: false,
      fd_text: "",
      fp: false,
      fp_text: "",
      sb: false,
      sb_text: "",
      rateClass: 0,
      sb_orig: true,
    };
  }
  changeImage = (key) => {
    this.setState({ [key]: !this.state[key] });
  };

  total = () => {
    let tmp;
    if (Math.floor(this.state.discount_percent) !== 1) {
      tmp =
        this.state.num *
        this.state.price *
        (1 - this.state.item.discount_percent);
    } else {
      tmp = this.state.num * this.state.price;
    }
    return tmp.toLocaleString();
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      //fetch(url+"endpoint/"+this.props.match.params.id, {})
      fetch(`${urlset}/data/itemDetail${this.props.match.params.id}.json`, {})
        .then((response) => response.json())
        .then((response) => {
          this.setState({
            benefits: response.item.benefits,
            best: response.item.best,
            bonus: response.item.bonus,
            gift: response.item.gift,
            neww: response.item.new,
            on_sale: response.item.on_sale,
            sold_out: response.item.sold_out,
            sub_category: response.item.sub_category,
            fourth_category: response.item.fourth_category,
            description: response.item.description,
            main_image: response.item.main_image,
            price: response.item.price,
            num_reviews: response.item.num_reviews,
            rating: response.item.rating,
            title: response.item.title,
            item: response.item,
            discount_percent: response.item.discount_percent,
          });
          this.bottomTagCheck();
          this.revNum();
        });
    }
  };
  componentDidMount = () => {
    //fetch(url+"/item/teashop/detail/"+this.props.match.params.id, {})
    fetch(
      `${urlset}/item/teashop/detail/${this.props.match.params.minchang}`,
      {}
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          benefits: response.item.benefits,
          best: response.item.best,
          bonus: response.item.bonus,
          gift: response.item.gift,
          neww: response.item.new,
          on_sale: response.item.on_sale,
          sold_out: response.item.sold_out,
          sub_category: response.item.sub_category,
          fourth_category: response.item.fourth_category,
          description: response.item.description,
          main_image: response.item.main_image,
          price: Math.floor(response.item.price),
          num_reviews: response.item.num_reviews,
          rating: response.item.rating.overall_rating__avg,
          title: response.item.title,
          item: response.item,
          discount_percent: response.item.discount_percent,
        });
        this.bottomTagCheck();
        this.revNum();
      });
  };

  priceTop = () => {
    if (this.state.discount_percent !== 1) {
      return this.state.price.toLocaleString() + " 원";
    }
  };

  finalPrice = () => {
    if (Math.floor(this.state.discount_percent) !== 1) {
      let str = this.state.price * (1 - this.state.item.discount_percent);
      return str.toLocaleString();
    } else {
      let str = this.state.price;
      return str.toLocaleString();
    }
  };

  discount_percent = () => {
    if (this.state.discount_percent !== 1.0) {
      return this.state.item.discount_percent * 100 + "%";
    }
  };

  foldUp = () => {
    this.setState({ foldUp: !this.state.foldUp });
  };
  foldChoose = (bool) => {
    this.setState({ sb_orig: false, free_sb: bool });
  };

  bottomTagCheck = () => {
    for (let i = 0; i < this.state.benefits.length; i++) {
      let str = this.state.benefits[i];
      switch (true) {
        case str.includes("뷰티포인트"):
          this.setState({ bp: true, bp_text: str });
          break;
        case str.includes("찻잎"):
          this.setState({ tl: true, tl_text: str });
          break;
        case str.includes("무료배송"):
          this.setState({ fd: true, fd_text: str });
          break;
        case str.includes("포장"):
          this.setState({ fp: true, fp_text: str });
          break;
        case str.includes("쇼핑백"):
          this.setState({ sb: true, sb_text: str });
          break;
        default:
      }
    }
  };

  revNum = () => {
    let floor = Math.floor(this.state.rating);
    let flrUp = floor * 10;
    let dif = this.state.rating * 10 - flrUp;
    if (dif < 4) {
      dif = 0;
    } else if (dif < 8) {
      dif = 5;
    } else {
      dif = 10;
    }
    this.setState({ rateClass: flrUp + dif });
  };

  render() {
    const {
      url,
      fb,
      kakao,
      like,
      num,
      foldUp,
      view,
      benefits,
      best,
      bonus,
      gift,
      neww,
      on_sale,
      sold_out,
      sub_category,
      fourth_category,
      description,
      main_image,
      price,
      num_reviews,
      rating,
      title,
      item,
      bp,
      bp_text,
      tl,
      tl_text,
      fd,
      fd_text,
      fp,
      fp_text,
      sb,
      sb_text,
      rateClass,
      sb_orig,
      discount_percent,
    } = this.state;
    console.log(discount_percent);
    return (
      <div className="Pager">
        <div className="ItemDetail">
          <div className="leftWrap">
            <div className="left">
              <div className="topTag">
                <img
                  className={this.state.best ? "" : "none"}
                  src="https://www.osulloc.com/kr/ko/static_renew/images/label_best.gif"
                  alt="best"
                />
                <img
                  className={this.state.gift ? "" : "none"}
                  src="https://www.osulloc.com/kr/ko/static_renew/images/label_giftpack.gif"
                  alt="gift"
                />
                <img
                  className={this.state.on_sale ? "" : "none"}
                  src="https://www.osulloc.com/kr/ko/static_renew/images/label_sale.gif"
                  alt="sale"
                />
                <img
                  className={this.state.bonus ? "" : "none"}
                  src="https://www.osulloc.com/kr/ko/static_renew/images/label_gift.gif"
                  alt="bonus"
                />
                <img
                  className={this.state.sold_out ? "" : "none"}
                  src="https://www.osulloc.com/kr/ko/static_renew/images/label_sold.gif"
                  alt="soldout"
                />
                <img
                  className={this.state.neww ? "" : "none"}
                  src="https://www.osulloc.com/kr/ko/static_renew/images/label_new.gif"
                  alt="new"
                />
              </div>
              <img
                className="item"
                alt="item"
                src={this.state.main_image}
              ></img>
              <div className="bottomTag">
                <ul>
                  {this.state.bp && (
                    <li className="ic01">
                      <span>{this.state.bp_text}</span>
                    </li>
                  )}
                  {this.state.tl && (
                    <li className="ic02">
                      <span>{this.state.tl_text}</span>
                    </li>
                  )}
                  {this.state.fd && (
                    <li className="ic03">
                      <span>{this.state.fd_text}</span>
                    </li>
                  )}
                  {this.state.fp && (
                    <li className="ic04">
                      <span>{this.state.fp_text}</span>
                    </li>
                  )}
                  {this.state.sb && (
                    <li className="ic05">
                      <span>{this.state.sb_text}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="review">
              <div className="revLeft">
                <div className="leftBox">
                  <span className="txt">리뷰 평점</span>
                  <span className="score">{this.state.rating}</span>
                </div>
                <div className="stars">
                  <div className={`bar${this.state.rateClass}`}></div>
                </div>
              </div>
              <div className="revRight">
                <div className="rightBox">
                  <span>REVIEW</span>
                  <span>{this.state.num_reviews}</span>
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
                  {Math.floor(discount_percent) !== 1 && (
                    <div className="priceTop">
                      <span>{this.priceTop()}</span>
                    </div>
                  )}
                  <div className="priceBottom">
                    <div className="finalPrice">
                      {this.finalPrice()}
                      <span>원</span>
                    </div>
                    {Math.floor(discount_percent) !== 1 && (
                      <div className="percent">{this.discount_percent()}</div>
                    )}
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
                      onClick={() => {
                        this.setState({ num: this.state.num + 1 });
                      }}
                    >
                      <div>+</div>
                    </button>
                  </div>
                </div>
                <div className="shoppingBag">
                  <div className="topSec">
                    {this.state.sb_orig && (
                      <div onClick={() => this.foldUp()}>
                        쇼핑백 &nbsp; (+100원)
                      </div>
                    )}
                    {!this.state.sb_orig && (
                      <div onClick={() => this.foldUp()}>
                        {this.state.free_sb
                          ? "쇼핑백 동봉 안함"
                          : "쇼핑백 동봉 함"}
                      </div>
                    )}
                    <button
                      onClick={() => this.foldUp()}
                      className={this.state.foldUp ? "show" : "hide"}
                    ></button>
                    {this.state.foldUp && (
                      <div onClick={() => this.foldUp()} className="extra">
                        <div onClick={() => this.foldChoose(true)}>
                          쇼핑백 동봉 안함
                        </div>
                        <div onClick={() => this.foldChoose(false)}>
                          쇼핑백 동봉 함
                        </div>
                      </div>
                    )}
                  </div>
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
                <div className="basket">장바구니 담기</div>
                <div className="buy">바로구매</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(ItemDetail);
