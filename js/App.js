import header from "./component/Header/header.js"
import plusHeader from "./component/Header/plusHeader.js"
import bookMark from "./component/Main/bookMark.js"
import companyLists from "./component/Main/companyLists.js"
import jobCardList from "./component/Main/jobCardList.js"
import banner1 from "./component/etc/banner1.js"
import LoginModal from "./component/etc/LoginModal.js"
import loading from "./component/etc/loading.js"
const section = document.querySelector("section") // body태그 잡아주기
const main = document.querySelector("main")

section.prepend(new plusHeader().el)
section.prepend(new header().el)
main.append(
  new bookMark().el,
  new companyLists().el,
  new jobCardList().el,
  new banner1().el.firstElementChild,
  new jobCardList().el
)
section.append(new LoginModal().el)

/********************************부가 기능 Functions */
loading()
header.modal()
header.carousel()
header.scroll()
header.plusModal1() // 구현 완료
header.plusModal2() // 구현 완료
header.plusModal3() // 미구현
header.plusModal4() // 미구현
header.plusModal5() // 미구현
header.plusModal6() // 미구현
companyLists.hover()
