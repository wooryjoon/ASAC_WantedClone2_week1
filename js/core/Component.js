export default class Component {
  constructor(tagName = "div") {
    this.tagName = tagName
    this.el = document.createElement(tagName) // 파라미터로 넣은 tagName에 맞는 태그 생성
    this.render() // html을 채워넣는 렌더 함수 실행
  }
}
