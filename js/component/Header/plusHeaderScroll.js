export default function plusHeaderScroll() {
  const $header = document.querySelector(".header")
  const $plusHeader = document.querySelector(".plusHeader")
  const $addHeader = document.querySelector("#headerScroll")
  const $hideHeader = document.querySelector("#plusHeader1")
  const $ghostDiv = document.querySelector(".plusHeader_ghost3")
  const headerHeight = $header.offsetHeight + $plusHeader.offsetHeight

  window.addEventListener("scroll", showHeader)

  // **********************Functions********************
  function showHeader() {
    let windowTop = window.scrollY

    if (windowTop >= headerHeight - 10) {
      $addHeader.classList.add("drop")
      $hideHeader.classList.add("drop")
      $ghostDiv.classList.add("drop")
    } else {
      $addHeader.classList.remove("drop")
      $hideHeader.classList.remove("drop")
      $ghostDiv.classList.remove("drop")
    }
  }
}
