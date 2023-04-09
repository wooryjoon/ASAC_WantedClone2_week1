import Component from "./../../core/Component.js"

export default class companyCard {
  constructor(tagName, img, logo, name, text) {
    this.tagName = tagName
    this.img = img
    this.logo = logo
    this.name = name
    this.text = text
    this.el = document.createElement(tagName) // 파라미터로 넣은 tagName에 맞는 태그 생성
    this.render() // html을 채워넣는 렌더 함수 실행
  }
  render() {
    console.log(this.img)
    // innerHTML 내부에 컴포넌트로 삽입될 친구들은
    this.el.innerHTML = /*html*/ `
        <a href="/" class="companyCard">
            <div class="companyCard_imgContainer">
                <img src="${this.img}" alt="" />
            </div>
            <div class="companyCard_textContainer">
                <div>
                <div style="white-space:nowrap;">${this.name}</div>
                <div>${this.text}개 포지션</div>
                </div>
                
            </div>
            <img src="${this.logo}" alt="" class="companyCard_logo" />
        </a>
        `
  }
}
