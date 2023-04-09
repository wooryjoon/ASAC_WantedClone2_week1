import Component from "../../core/Component.js"

export default class jobCard {
  constructor(tagName, img, position, name, response, location, pay) {
    this.tagName = tagName
    this.img = img
    this.position = position
    this.name = name
    this.response = response
    this.location = location
    this.pay = pay
    this.el = document.createElement(tagName) // 파라미터로 넣은 tagName에 맞는 태그 생성
    this.render() // html을 채워넣는 렌더 함수 실행
  }
  render() {
    this.el.innerHTML = /*html*/ `
        <a href="/" class="jobCard">
            <img src="${this.img}" alt="" class="jobCard_img" />
            <div class="jobCard_content">
                <div>${this.position}</div>
                <div>${this.name}</div>
                <div>
                    <span>
                    ${this.response}
                </span>
            </div>
                <div>${this.location}</div>
                <div>채용보상금 ${this.pay}원</div>
            </div>
        </a>
        `
  }
}
