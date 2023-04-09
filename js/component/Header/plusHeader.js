import Component from "../../core/Component.js"
import bottomChevron from "../etc/bottomChevron.js"
import leftChevron from "../etc/leftChevron.js"
import rightChevron from "../etc/rightChevron.js"
export default class plusHeader extends Component {
  constructor() {
    super("div")
  }
  render() {
    // 버튼 2개 클래스 따로 추가
    let btn1 = new bottomChevron().el
    let btn2 = new bottomChevron().el
    let prevBtn = new leftChevron().el
    let nextBtn = new rightChevron().el
    btn1.firstElementChild.classList.add("plusHeader1_Btn1")
    btn2.firstElementChild.classList.add("plusHeader1_Btn2")
    prevBtn.firstElementChild.classList.add("plusHeader_prevBtn")
    nextBtn.firstElementChild.classList.add("plusHeader_nextBtn")

    this.el.classList.add("plusHeader")

    this.el.innerHTML = /*html*/ `
      <!-- plusHeader1 -->
      <div class="plusHeader-wrapper" id="plusHeader1">
        <div class="plusHeader1_content_container">
          <div style="font-weight:bold;">개발</div>
          ${btn1.innerHTML} 
          <div class="plusHeader_ghost"></div>
          <div>개발 전체</div>
          ${btn2.innerHTML}
          <div class="plusHeader_modal one">
            <ul>
              <li><a href=""> 전체</a></li>
              <li> <a href="" style="color:#3466FF"> 개발</a></li>
              <li><a href=""> 경영</a></li>
              <li> <a href=""> 마케팅</a></li>
              <li>  <a href=""> 디자인</a></li>
              <li> <a href=""> 영업</a></li>
              <li><a href=""> 고객서비스</a></li>
              <li> <a href=""> 게임제작</a></li>
              <li><a href=""> 미디어</a></li>
              <li> <a href=""> HR</a></li>
              <li> <a href=""> 엔지니어링</a></li>
            </ul>
          </div>
          <div class="plusHeader_modal two">
            <div class="one">직무를 선택해주세요. (최대 5개 가능)</div>

            <div class="two">
              <span></span>
            </div>

            <div class="three">
              선택 완료하기
            </div>
          </div>
        </div>
      </div>


<!-- scroll시 fixed로 처리되어야 할 부분 -->
<div id="headerScroll">
  <div class="plusHeader-wrapper">
      <div class="plusHeader2_content_container">
        <div class="plusHeader2_child1">
          <button class="plusHeader2_button P2B_1">
            <span>지역</span>
            <span style="color:#3466FF;font-weight: bold;">한국</span>
            <div>1</div>
          </button>
          <button class="plusHeader2_button P2B_2">
            <span>경력</span>
            <span style="color:#3466FF;font-weight: bold;">신입
              <span><i class="fa-solid fa-caret-down"></i></span>
            </span>

          </button>
          <button class="plusHeader2_button P2B_3">
            <span>기술스택</span>
            <span><i class="fa-solid fa-caret-down"></i></span>
          </button>
        </div>
        <div class="plusHeader2_child2" style="cursor:pointer;">
          <span>응답률순</span>
           <span><i class="fa-solid fa-caret-down"></i></span>
        </div>
      </div>
      </div>
      <div class="plusHeader_ghost2"></div>




      <div class="plusHeader-wrapper" style="position:relative;">
        <div class="plusHeaderBtn_wrapper left">
           ${prevBtn.innerHTML}
        </div>
       
 <!-- OVERFLOW-CONTAINER -->
      <div class="plusHeader_carousel_container">
      <div class="plusHeader_carousel">
        <div class="plusHeader_carousel_child" style="margin-left:0">
          급성장 중
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" alt="" />
        </div>
        <div class="plusHeader_carousel_child">
          병역특례
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F68dadb80-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" alt="" />
        </div>
        <div class="plusHeader_carousel_child">
          50인 이하
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F5d873f3a-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" alt="" />
        </div>
        <div class="plusHeader_carousel_child">
          50인 이상
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F6eda33d2-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" alt="" />
        </div>
        <div class="plusHeader_carousel_child">
          유연근무
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F45bb9794-c524-11ec-901c-acde48001122.png&w=50&q=75" alt="" />
        </div>
        <div class="plusHeader_carousel_child">
          수평적 문화
           <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" alt="" />
        </div>
        <div class="plusHeader_carousel_child">
          자유로운 퇴근
           <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F6eda33d2-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" alt="" />
        </div>
        <div class="plusHeader_carousel_child">
          유연근무
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F5d873f3a-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" alt="" />
        </div>
        <div class="plusHeader_carousel_child">
          수평적 문화
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F68dadb80-9f6e-11ec-b909-0242ac120002.png&w=50&q=75" alt="" />
        </div>
        <div class="plusHeader_carousel_child">
          자유로운 퇴근
          <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F45bb9794-c524-11ec-901c-acde48001122.png&w=50&q=75" alt="" />
        </div>

       
      </div>
      </div>
      <div class="plusHeaderBtn_wrapper right"> ${nextBtn.innerHTML}</div>
      
      </div>
     <div class="plusHeader_ghost3"></div>
</div>
      
     <!-- scroll시 fixed로 처리되어야 할 부분 -->
    `
  }
}
