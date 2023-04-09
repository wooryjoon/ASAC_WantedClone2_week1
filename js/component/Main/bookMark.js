import Component from "../../core/Component.js"

export default class bookMark extends Component {
  constructor() {
    super()
  }
  render() {
    this.el.classList.add("bookMark")
    this.el.innerHTML = /*html*/ `
            <i class="fa-solid fa-bookmark"></i>
            <span>북마크 모아보기
                <i class="fa-solid fa-angle-right"></i>
            </span>
        `
  }
}
