import React, { Component } from "react";
import "./ActiveMainSlide.scss";

class ActiveMainSlide extends Component {
  render() {
    const transformLogo = {
      transform: `translate(0, ${this.props.logoTransFormValue}px)`,
      transition: "ease 5s",
    };
    const transformbrandImgBottom = {
      transform: `translate(0, -${this.props.brandImgTransFormValue}px)`,
      transition: "ease 3.5s",
    };

    return (
      <div className="activeMainSlide">
        <div className="brandImg">
          <div className="brandLogo">
            <img
              style={transformLogo}
              src={require("../../images/activeMain/brand_bi_new.png")}
              alt="logo"
            />
          </div>
          <img
            className="brandImgTop"
            src={require("../../images/activeMain/brand.jpg")}
            alt="brandTop"
          />
          <img
            style={transformbrandImgBottom}
            className="brandImgBottom"
            src={require("../../images/activeMain/brand_intro.png")}
            alt="brandBottom"
          />
        </div>
        <section className="brandStory part1">
          <span className="title">일구다</span>
          <span className="subTitle">아름다운 집념</span>
          <span className="content">
            “ 어느 나라를 가도 나라마다 독특한 차가 하나씩은 있는데 우리나라는
            없다. 어떤 희생을 치르더라도 우리의 전통 차문화를 정립하고 싶다.
          </span>
          <span className="from">- 아모레퍼시픽 창업자 故 서성환 회장”</span>
          <span className="subTitle">제주와의 인연</span>
          <span className="content">
            연평균 기온이 14℃ 이상, pH4.0~5.0의 약산성 토양, 연간 강우량 1,600mm
            이상의 고온 다습한 기후에서 잘 자라는 차나무의 재배 조건에 가장
            최적의 산지, 제주. <br />
            그렇게 제주와 오설록의 인연은 시작되었습니다.
          </span>
          <span className="content">
            그러나, <br />
            돌과 바람이 전부였던 제주의 버려진 땅.
            <br />
          </span>
          <span className="content">
            억척스런 제주 사람의 손조차 한 번도 닿지 않은 채 버려진 3곳의 땅을
            제주의 자연을 이해하고 극복하며 푸른 꿈을 45여년을 키워온 결과,
          </span>
          <span className="content">
            제주의 땅은 세계적인 녹차 산지로 손꼽히는 최고의 차 재배지로
            거듭났으며 한국의 차문화 정립을 위해 땀과 열정들이 모여 세계적으로
            권위 있는 명차 대회에서 매년 수상을 이어가며 한국의 차문화 전파를
            위해 오설록의 아름다운 집념은 계속되고 있습니다.
          </span>
        </section>
        <section className="brandStory part2">
          <span className="title">가꾸다</span>
          <span className="subTitle">
            천혜의 자연과 사람의 정성으로 만든 명차
          </span>
          <span className="content">
            오설록은 생산에서 재배, 그리고 판매까지 한 곳에서 이루어지는
            세계적으로도 손꼽히는 최대 규모의 국산 차 브랜드입니다.
          </span>
          <span className="content">
            오설록은 제주라는 천혜의 자연 안에서 오설록의 자연과의 상생을 통한
            따뜻한 과학영농을 통해 최상의 찻잎을 얻기 위해 노력하고 있습니다.
          </span>
          <span className="content">
            이는 전통적인 방식을 토대로 현대의 기술을 더해 최상의 차를 만들어
            가는 것, 즉 전통을 유지하되 시대의 흐름을 받아들이는 오설록의
            자세입니다.
          </span>
          <span className="subTitle">제주의 자연으로 가꾼 유기농</span>
          <span className="content">
            오설록의 유기농이란 단순히 가만히 놓아두는 것이 아니라, 자연 안에서
            더 안전하고 세계적으로 인정받는 품질을 위하여 자연과 더불어 오설록의
            연구와 기술을 더한 선진 유기농법을 실현하고 있습니다. 2010년
            이후부터는 오설록 차밭 전체에서 국내뿐 아니라 미국, 유럽 등 전
            세계적으로 대표 유기농 인증을 획득한 믿을 수 있는 품질의 차만을
            재배하고 있습니다. <br />
          </span>
          <span className="subTitle">제주의 자연으로 빚은 발효</span>
          <span className="content">
            오설록은 한국인의 발효과학의 지혜와 제주의 자연과 정성의 깊이를 더해
            한국적이면서도 오설록만의 시그니처 발효법을 완성하였습니다. 한국의
            전통 장류에서 추출한 균으로 발효하거나, 제주의 자연소재에서 다시
            한번 숙성하여 풍미와 맛의 깊이를 더한 건강한 발효명차를 만들어 가고
            있습니다.
          </span>
          <span className="content">
            오설록은 제주의 푸른 차밭, 차문화의 깊이를 느낄 수 있는 티스톤과
            티뮤지엄, 도심 속 티하우스와 정신없이 바쁜 현대인들에게 제주 자연과
            정성을 담은 차를 통해 내면을 아름답게 가꾸고 일상에 삶의 멋을
            더하며, 관계를 따뜻하게 이어주는 가치있는 쉼을 선사합니다.
          </span>
        </section>
        <section className="brandStory part3">
          <span className="title">즐기다</span>
          <span className="subTitle">
            차와 제주가 선사하는 <br />
            삶의 아름다움
          </span>
          <span className="content">
            <br />
            하루를 시간과 분으로 조각 내며 바쁘게 살다 보면, 문득 차 한잔의
            여유가 간절해지는 순간이 있습니다. 그 순간을 좋은 사람과 함께 하면
            삶은 더 아름다워집니다.
          </span>
        </section>
      </div>
    );
  }
}

export default ActiveMainSlide;
