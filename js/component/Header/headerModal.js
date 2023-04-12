export default function headerModal() {
  const $modalIcon = document.querySelector("#headerModal")
  const $modal = document.querySelector(".moreMenu")
  const $logo = document.querySelector(".logo")
  const $childModalIconNodes = document.querySelectorAll(".menu_child")
  const $childModalNodes = document.querySelectorAll(
    ".menu_child_detail_container"
  )
  // 로그인모달
  const $loginToggle = document.querySelector(".option_wrap1")
  const $loginModal = document.querySelector(".loginModal-background")
  const $xBtn = document.querySelector(".cancel")
  let isShow = false
  $xBtn.addEventListener("click", () => {
    $loginModal.classList.remove("show")
    isShow = false
  })
  $loginToggle.addEventListener("click", () => {
    if (isShow) {
      isShow = false
      $loginModal.classList.remove("show")
    } else {
      isShow = true
      $loginModal.classList.add("show")
    }
    console.log(1123)
  })
  /*세부 페이지 모달*/
  $childModalIconNodes.forEach((e, i) => {
    if (i === 0) return
    e.addEventListener("mouseover", () => {
      showModal($childModalNodes, i)
    })
  })
  $childModalIconNodes.forEach((e, i) => {
    if (i === 0) return
    e.addEventListener("mouseout", () => {
      hideModal($childModalNodes, i)
    })
  })
  $childModalNodes.forEach((e, i) => {
    if (i === 0) return
    e.addEventListener("mouseover", () => {
      showModal($childModalNodes, i)
    })
  })
  $childModalNodes.forEach((e, i) => {
    if (i === 0) return
    e.addEventListener("mouseout", () => {
      hideModal($childModalNodes, i)
    })
  })

  /*직업란 모달*/
  $modalIcon.addEventListener("mouseover", () => {
    showModal($modal, -1)
  })
  window.addEventListener("click", () => {
    hideModal($modal, -1)
    $childModalNodes.forEach((e, i) => {
      hideModal($childModalNodes, i)
    })
  })
  $modal.addEventListener("mouseover", () => {
    showModal($modal, -1)
  })
  $modal.addEventListener("mouseout", () => {
    hideModal($modal, -1)
  })

  /******************Functions**************************/
  function hideModal(e, i) {
    if (i <= -1) {
      e.style.visibility = "hidden"
      return
    }
    e[i].style.visibility = "hidden"
  }
  function showModal(e, i) {
    if (i <= -1) {
      e.style.visibility = "visible"
      return
    }
    e[i].style.visibility = "visible"
  }
}
