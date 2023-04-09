export function plusHeaderModal1() {
  // 필요기능
  // 1. 버튼 클릭시 토글 false되고

  const $btn = document.querySelector(".plusHeader1_Btn1")
  const $modal = document.querySelector(".plusHeader_modal.one")
  const $modal_child = document.querySelectorAll(".plusHeader_modal.one ul li")
  let toggle = false

  $modal_child.forEach((e) => {
    e.addEventListener("mouseover", () => {
      e.style.backgroundColor = "#F8F8F8"
    })
    e.addEventListener("mouseout", () => {
      e.style.backgroundColor = "#FFFFFF"
    })
  })

  $btn.addEventListener("click", showModal)
  //   window.addEventListener("click", hideAll)

  // ********************Functions************************

  function showModal() {
    rotate()
    show()
    toggle = !toggle
  }
  function rotate() {
    if (!toggle) $btn.classList.add("rotate1")
    else $btn.classList.remove("rotate1")
  }
  function show() {
    if (!toggle) $modal.classList.add("show")
    else $modal.classList.remove("show")
  }
}

export function plusHeaderModal2() {
  const $btn = document.querySelector(".plusHeader1_Btn2")
  const $modal = document.querySelector(".plusHeader_modal.two")
  let toggle = false

  $btn.addEventListener("click", showModal)
  //   window.addEventListener("click", hideAll)

  // Functions

  function showModal() {
    console.log(123)
    rotate()
    show()
    toggle = !toggle
  }
  function rotate() {
    if (!toggle) $btn.classList.add("rotate1")
    else $btn.classList.remove("rotate1")
  }
  function show() {
    if (!toggle) $modal.classList.add("show")
    else $modal.classList.remove("show")
  }
}

export function plusHeaderModal3() {}
export function plusHeaderModal4() {}
export function plusHeaderModal5() {}
export function plusHeaderModal6() {}
