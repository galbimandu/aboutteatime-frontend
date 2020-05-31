import React, { Component } from "react";
import "./ItemDetail.scss";
class ItemDetail extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
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
                  <div className="bar15"></div>
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
                  <span>Tea Food</span>
                </div>
                <img
                  alt="arrow right"
                  src="https://www.osulloc.com/kr/ko/static_renew/images/item_detail/arr_10x14.png?quality=80"
                />
                <div>
                  <span>초콜릿/잼</span>
                </div>
              </div>
              <div className="itemName">녹차밀크스프레드 200 g</div>
              <div className="description">
                오설록의 최고급 가루 녹차를 함유한 고급스러운 풍미의 녹차
                스프레드입니다. 빵에발라 먹거나, 간편하게 밀크티를 만들어
                드세요.
              </div>
              <div className="middleBox">
                <div className="icons">
                  <img
                    alt="url"
                    src="https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_url.png?quality=80"
                  />
                  <img
                    alt="fb"
                    src="https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_facebook.png?quality=80"
                  />
                  <img
                    alt="kakao"
                    src="https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_kakao.png?quality=80"
                  />
                  <img
                    alt="like"
                    src="https://www.osulloc.com/kr/ko/static_renew/images/item_detail/ic_like.png?quality=80"
                  />
                </div>
                <div className="price">
                  <div className="priceTop">
                    <span>8500 원</span>
                  </div>
                  <div className="priceBottom">
                    <div className="finalPrice">
                      6,800<span>원</span>
                    </div>
                    <div className="percent">20 %</div>
                  </div>
                </div>
              </div>
              <div className="additionals">

              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemDetail;
