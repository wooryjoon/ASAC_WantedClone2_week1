import Component from "../../core/Component.js"

export default class rightChevron extends Component {
  constructor() {
    super("div")

  }
  render() {
    this.el.innerHTML = /*html*/ `
      <div class="chevron">  <i class="fa-solid fa-chevron-right"></i></div>

  `
  }
}
