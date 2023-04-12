import Component from "../../core/Component.js"

export default class LoginModal extends Component {
  constructor() {
    super()
  }
  render() {
    this.el.classList.add("loginModal-background")
    this.el.innerHTML = /*html*/ `
        <div class="loginModal-container">
            <div class="loginModal title">
                <span>회원가입</span>
            </div>
            <div class="loginModal nametxt">
                <span style="color:black;">이름</span>
            </div>
            <input type="text" class="input-name" placeholder="이름을 입력해주세요." />
            <div class="loginModal phone">
                <span  style="color:black;">휴대폰 번호</span>
            </div>
            <input type="text" class="loginModal input-location" placeholder="대한민국 +82" />
            <div class="input-phone-container">
                <input type="text" class="one" placeholder="(예시) 01034567890" />
                <input type="text" class="two" placeholder="  인증번호 받기" />
            </div>
            <input type="text" class="certi" placeholder="인증번호를 입력해주세요." />
            <div class="password">비밀번호</div>
            <input type="text" class="password-input" placeholder="비밀번호를 입력해주세요." />
            <div class="last">
                영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상 입력해 주세요.
            </div>
            <button class="submit">회원가입하기</button>
            <button class="cancel">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        `
  }
}
