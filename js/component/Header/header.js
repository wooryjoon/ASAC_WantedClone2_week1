import Component from "../../core/Component.js"
import headerModal from "./headerModal.js"
import plusHeaderCarousel from "./plusHeaderCarousel.js"
import plusHeaderScroll from "./plusHeaderScroll.js"
import {
  plusHeaderModal1,
  plusHeaderModal2,
  plusHeaderModal3,
  plusHeaderModal4,
  plusHeaderModal5,
  plusHeaderModal6,
} from "./plusHeaderModal.js"

export default class header extends Component {
  constructor() {
    super("header") // tagName으로 header 지정
    this.render()
  }
  render() {
    // html태그를 담는 함수
    this.el.classList.add("header_wrap")
    this.el.innerHTML = /*html*/ `
    <nav class="header">
        <div class="moreMenu">
          <ul class="menu_container">
            <a href="" class="menu_child">직군 전체</a>
            <div class="menu_child_detail_container">
              <a href="" class="menu_child_detail">2</a>
              <a href="" class="menu_child_detail">2</a>
              <a href="" class="menu_child_detail">2</a>
              <a href="" class="menu_child_detail">2</a>
              <a href="" class="menu_child_detail">2</a>
              <a href="" class="menu_child_detail">2</a>
            </div>
            <a href="" class="menu_child">개발</a>
            <div class="menu_child_detail_container">
              <a href="" class="menu_child_detail">백엔드</a>
              <a href="" class="menu_child_detail">프론트엔드</a>
              <a href="" class="menu_child_detail">데브옵스</a>
              <a href="" class="menu_child_detail">클라우드</a>
              <a href="" class="menu_child_detail">IOS</a>
              <a href="" class="menu_child_detail">안드로이드</a>
            </div>
            <a href="" class="menu_child">경영 | 비즈니스</a>
            <div class="menu_child_detail_container">
              <a href="" class="menu_child_detail">경영</a>
              <a href="" class="menu_child_detail">비즈니스</a>
              <a href="" class="menu_child_detail">PM | PO</a>
              <a href="" class="menu_child_detail">경영지원</a>
              <a href="" class="menu_child_detail">운영 매니저</a>
              <a href="" class="menu_child_detail">경제학</a>
            </div>
            <a href="" class="menu_child">마케팅 | 광고</a>
            <div class="menu_child_detail_container">
              <a href="" class="menu_child_detail">데이터분석</a>
              <a href="" class="menu_child_detail">마케터</a>
              <a href="" class="menu_child_detail">MD</a>
              <a href="" class="menu_child_detail">몰라</a>
            </div>
            <a href="" class="menu_child">디자인</a>
            <div class="menu_child_detail_container">
              <a href="" class="menu_child_detail">웹디자이너</a>
              <a href="" class="menu_child_detail">의상디자이너</a>
              <a href="" class="menu_child_detail">그냥디자이너</a>
              <a href="" class="menu_child_detail">클라우드맥주</a>
              <a href="" class="menu_child_detail">으라차</a>
            </div>
            <a href="" class="menu_child">영업</a>
            <div class="menu_child_detail_container">
              <a href="" class="menu_child_detail">기업영업</a>
              <a href="" class="menu_child_detail">외부영업</a>
              <a href="" class="menu_child_detail">해외영업</a>
              <a href="" class="menu_child_detail">내부영업</a>
              <a href="" class="menu_child_detail">영업사원</a>
              <a href="" class="menu_child_detail">맥주영업</a>
            </div>
            <a href="" class="menu_child">게임 제작</a>
            <div class="menu_child_detail_container">
              <a href="" class="menu_child_detail">롤</a>
              <a href="" class="menu_child_detail">서든어택</a>
              <a href="" class="menu_child_detail">스타크래프트</a>
              <a href="" class="menu_child_detail">워크래프트</a>
              <a href="" class="menu_child_detail">몰라요</a>
              <a href="" class="menu_child_detail">끝</a>
            </div>
            <a href="" class="menu_child">미디어</a>
            <div class="menu_child_detail_container">
              <a href="" class="menu_child_detail">백엔드</a>
              <a href="" class="menu_child_detail">프론트엔드</a>
              <a href="" class="menu_child_detail">데브옵스</a>
              <a href="" class="menu_child_detail">클라우드</a>
              <a href="" class="menu_child_detail">맥주</a>
              <a href="" class="menu_child_detail">2</a>
            </div>
            <a href="" class="menu_child">HR</a>
            <div class="menu_child_detail_container">
              <a href="" class="menu_child_detail">HR</a>
              <a href="" class="menu_child_detail">HR</a>
              <a href="" class="menu_child_detail">HR</a>
              <a href="" class="menu_child_detail">HR</a>
              <a href="" class="menu_child_detail">HR</a>
              <a href="" class="menu_child_detail">HR</a>
            </div>
            <a href="" class="menu_child">ASAC</a>
            <div class="menu_child_detail_container">
              <a href="" class="menu_child_detail">ASAC</a>
              <a href="" class="menu_child_detail">ASAC</a>
              <a href="" class="menu_child_detail">ASAC</a>
              <a href="" class="menu_child_detail">ASAC</a>
              <a href="" class="menu_child_detail">ASAC</a>
              <a href="" class="menu_child_detail">ASAC</a>
            </div>
            <a href="" class="menu_child">컴공선배</a>
            <div class="menu_child_detail_container">
              <a href="" class="menu_child_detail">컴공선배</a>
              <a href="" class="menu_child_detail">컴공선배</a>
              <a href="" class="menu_child_detail">컴공선배</a>
              <a href="" class="menu_child_detail">컴공선배</a>
              <a href="" class="menu_child_detail">컴공선배</a>
              <a href="" class="menu_child_detail">컴공선배</a>
            </div>
          </ul>
        </div>
        <div class="logo">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=17&q=75"
            alt=""
            class="logo_menu"
            id="headerModal"
          />
          <a href="/"
            ><img
              src="https://www.wantedlab.com/img/logo.png"
              alt=""
              class="logo_img"
          /></a>
        </div>
        <div class="navBar">
          <a href="" class="navBar-menu"> 채용 </a>
          <a href="" class="navBar-menu"> 이벤트 </a>
          <a href="" class="navBar-menu"> 직군별 연봉 </a>
          <a href="" class="navBar-menu"> 이력서 </a>
          <a href="" class="navBar-menu">
            커뮤니티
            <span class="header_addText1">New</span>
          </a>
          <a href="" class="navBar-menu"> 프리랜서 </a>
          <a href="" class="navBar-menu">
            AI 합격예측 <span class="header_addText2">Beta</span>
          </a>
        </div>
        <div class="option">
          <div class="option_wrap1">
            <button class="option_search">
              <i class="fa solid fa-magnifying-glass fa-lg"></i>
            </button>
            <button class="option_news">
              <i class="fa-regular fa-bell fa-lg"></i>
            </button>
            <button class="option_user">
              <i class="fa-regular fa-user fa-lg"></i>
            </button>
          </div>
          <div class="header_ghost"></div>
          <a class="option_wrap2"> <span>기업 서비스</span> </a>
        </div>
      </nav>
  `
    this.modal = headerModal
  }
  static modal() {
    headerModal()
  }
  static carousel() {
    plusHeaderCarousel()
  }
  static plusModal1() {
    plusHeaderModal1()
  }
  static plusModal2() {
    plusHeaderModal2()
  }
  static plusModal3() {
    plusHeaderModal3()
  }
  static plusModal4() {
    plusHeaderModal4()
  }
  static plusModal5() {
    plusHeaderModal6()
  }
  static plusModal6() {
    plusHeaderModal6()
  }
  static scroll() {
    plusHeaderScroll()
  }
}
