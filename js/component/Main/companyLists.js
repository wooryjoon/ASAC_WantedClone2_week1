import companyCard from "../etc/companyCard.js"
import Component from "../../core/Component.js"
import companyCardHover from "./../etc/companyCardHover.js"
export default class companyLists extends Component {
  constructor() {
    super()
  }
  render() {
    const img = [
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F24827%2Fzdkfwcwuakq9ns1j__400_400.jpg&w=400&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F403%2Fh738rioez3oruu1r__400_400.jpg&w=400&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F10384%2Fpesfp40ss1bs9fxc__400_400.jpg&w=400&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F79%2Fno3ey0e5mjbismfq__400_400.jpg&w=400&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F8040%2F5wemaaq53ybzu6dt__400_400.jpg&w=400&q=75",
    ]
    const logo = [
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.b30f4f76.png&w=100&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.0e34a18c.png&w=100&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.744b1b2a.jpg&w=100&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.cc473dbf.jpg&w=100&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.6120bdd5.jpg&w=100&q=75",
    ]
    const name = [
      "다큐브(daquv)",
      "자비스앤빌런즈(삼쩜삼)",
      "이마고웍스",
      "원티드랩",
      "트리플콤마(골드스푼)",
    ]
    const text = [5, 13, 14, 7, 8]
    this.el.classList.add("companyLists-container")
    this.el.innerHTML = /*html*/ `
    <div class="companyLists_title">적극 채용 중인 회사</div>
    <div class="companyLists_content"></div>
    `
    const $content = this.el.querySelector(".companyLists_content")

    for (let i = 0; i < 5; i++) {
      $content.append(
        new companyCard("div", img[i], logo[i], name[i], text[i]).el
          .firstElementChild
      )
    }
  }

  // ***************************************functions*************************************************
  static hover() {
    companyCardHover()
  }
}
