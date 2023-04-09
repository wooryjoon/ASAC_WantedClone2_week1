import Component from "../../core/Component.js"
import jobCard from "../etc/jobCard.js"

export default class jobCardList extends Component {
  constructor() {
    super()
  }
  render() {
    const img = [
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F31860%2F3rr16ziwfg9ktwnv__400_400.jpg&w=400&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F32704%2Frknbyzzmy4bvtgzp__400_400.jpg&w=400&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F27272%2Fgcow7djgmm7th8nj__400_400.jpg&w=400&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F35835%2Fnrwshm23esfedu1q__400_400.jpg&w=400&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F131%2Fzlnythvhfobleo2g__400_400.jpg&w=400&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F41767%2Fzklngoqvm9zvfkp8__400_400.jpg&w=400&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F30931%2Fzysjkzeenphq8t7d__400_400.jpg&w=400&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F41851%2Fs0q8ndpvbfohfmv3__400_400.jpg&w=400&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F30060%2F2kv1lzaldpg8usv1__400_400.jpg&w=400&q=75",

      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F38211%2Fsbkyj0zrauorve8h__400_400.jpg&w=400&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F32890%2Fe4xhrb3ek9vqhqqk__400_400.jpg&w=400&q=75",
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F31860%2F3rr16ziwfg9ktwnv__400_400.jpg&w=400&q=75",
    ]
    const position = [
      "서버/응용소프트웨어 개발자",
      "인공지능 모델 개발자_서울",
      "인공지능 모델 개발자_대전",
      "Front-End 개발자",
      "Java(Back-End)개발자",
      "MFC/C++/C 개발자 - 대전",
      "라이다 시스템 개발자",
      "Site Engineer",
      "하드웨어 엔지니어",
      "[Product팀]프론트엔드 개발자",
      "응용 S/W 엔지니어",
      "임베디드 S/W 엔지니어",
    ]
    const name = [
      "에이아이리더",
      "에이아이리더",
      "에이아이리더",
      "제네시스네스트",
      "지란지교데이터",
      "하이보",
      "스켈터랩스",
      "밴디트",
      "인터콘시스템스",
      "삼성전자",
      "현대",
      "SK플래닛",
    ]
    const response = ["응답률 매우 높음"]
    const location = ["경기.한국"]
    const pay = ["1,000,000"]
    this.el.classList.add("jobCardList-container")
    this.el.innerHTML = /*html*/ `
        
        `
    for (let i = 0; i < 12; i++) {
      this.el.append(
        new jobCard(
          "div",
          img[i],
          position[i],
          name[i],
          response[0],
          location[0],
          pay[0]
        ).el.firstElementChild
      )
    }
  }
}
