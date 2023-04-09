import Component from "../../core/Component.js"

export default class banner1 extends Component {
  constructor() {
    super()
  }
  render() {
    this.el.innerHTML = /*html*/ `
    <button class="banner1">
        <div>
          <strong>내 유형과 가장 어울리는 회사는?</strong>
          <br />
          <small>유형테스트 하러가기</small>
        </div>
      </button>
    `
  }
}
