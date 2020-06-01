import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="topSec">
          <div className="sizer">
            <div className="leftSec">
              <div className="notification">
                <span>공지사항</span>
                <div className="scrollContainer">
                  <ul className="notifList">
                    <li>[공지] 오설록몰 앱 최신 버전 업데이트 오류 안내</li>
                    <li>[공지] L.POINT 서비스 점검(일시중단) 안내_ 3/16(월)</li>
                    <li>
                      [공지] 구매사은품 지류쿠폰 지급 종료 및 혜택 변경 예정
                      안내
                    </li>
                    <li>[공지]오설록몰 개인정보처리방침 일부가 변경됩니다.</li>
                    <li>[공지] 오설록몰 앱 최신 버전 업데이트 오류 안내</li>
                  </ul>
                </div>
              </div>
              <button className="more">+더보기</button>
            </div>
            <div className="sns">
              <img
                className="fb"
                src="https://www.osulloc.com/kr/ko/static_renew/images/sns_f.png?quality=80"
                alt="fb"
              ></img>
              <img
                className="insta"
                src="https://www.osulloc.com/kr/ko/static_renew/images/sns_i.png?quality=80"
                alt="insta"
              ></img>
            </div>
          </div>
        </div>
        <div className="bodySec">
          <div className="bodySizer">
            <div className="left">
              <div className="number">
                <span>고객상담센터 · 주문/배송문의</span>
                <span>
                  <br />
                  080-805-5555
                  <br />
                </span>
                <span>평일 09:30 - 17:00 (점심 11:30 - 13:00)</span>
              </div>
              <div className="email">
                <span>
                  특판, 대량구매 문의
                  <br />
                  <br />
                </span>
                <span>
                  help@osulloc.com
                  <br />
                </span>
                <span>
                  010-2515-1979 / 카톡ID : osullocmall
                  <br />
                </span>
                <span>평일 09:30 - 17:00 (점심 11:30 - 13:00)</span>
              </div>
            </div>
            <div className="right">
              <div>
                <img
                  id="one"
                  alt="storemap"
                  src="https://www.osulloc.com/kr/ko/static_renew/images/f1.png?quality=80"
                ></img>
                <p>매장안내</p>
              </div>
              <div>
                <img
                  id="two"
                  alt="membership"
                  src="https://www.osulloc.com/kr/ko/static_renew/images/f2.png?quality=80"
                ></img>
                <p>멤버십혜택</p>
              </div>
              <div>
                <img
                  id="three"
                  alt="faq"
                  src="https://www.osulloc.com/kr/ko/static_renew/images/f3.png?quality=80"
                ></img>
                <p>FAQ</p>
              </div>
              <div>
                <img
                  id="four"
                  alt="1:1문의"
                  src="https://www.osulloc.com/kr/ko/static_renew/images/f4.png?quality=80"
                ></img>
                <p>1:1문의</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomSec">
          <div className="bottomSizer">
            <div className="spacer">
              <img
                src="https://www.osulloc.com/kr/ko/static_renew/images/f_logo.png?quality=80"
                alt="logo"
                className="logo"
              ></img>
              <div className="left">
                <div className="topList">
                  <ul>
                    <li>회사소개</li>
                    <li>서비스 이용약관</li>
                    <li>
                      <strong>개인정보 처리방침</strong>
                    </li>
                    <li>영상정보 처리방침</li>
                    <li>뷰티포인트</li>
                    <li>임직원할인</li>
                    <li>사이트맵</li>
                    <li>전자공고</li>
                  </ul>
                </div>
                <div className="info">
                  <div className="top">
                    <span>
                      ㈜ 오설록
                      <br />
                      대표이사:서혁제 주소:서울특별시 용산구 한강대로 100,
                      14층(한강로2가) 사업자등록번호: 390-87-01499
                      <br />
                      통신판매업신고번호:2019-서울용산-1173호 호스팅제공자:
                      ㈜오설록
                    </span>
                    <button>사업자 정보확인></button>
                  </div>
                  <div className="bottom">
                    <span>
                      (주)오설록은 오설록 브랜드를 제외한 입점 브랜드에 대해서는
                      통신판매중개자 이며 통신판매의 당사자가 아닙니다.
                      <br />
                      따라서 입점판매자가 등록한 상품정보 및 거래에 대해 책임을
                      지지 않습니다.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="border">
                <span>(주)이니시스 구매안전서비스</span>
                <div>
                  <img
                    src="http://image.inicis.com/mkt/certmark/escrow/escrow_43x43_gray.png"
                    alt="INIPAY"
                  ></img>
                  <span>
                    고객님의 안전거래를 위해 현금 거래에 대해 이니페이
                    에스크로서비스를 이용하실 수 <br />
                    있습니다.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
