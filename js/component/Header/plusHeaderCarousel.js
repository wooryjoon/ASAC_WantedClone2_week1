export default function plusHeaderCarousel() {
  const $slideWrapper = document.querySelector(".plusHeader_carousel_container")
  const $slideContainer = document.querySelector(".plusHeader_carousel")
  const $slides = document.querySelectorAll(".plusHeader_carousel_child")
  const $prevBtn = document.querySelector(".plusHeader_prevBtn")
  const $nextBtn = document.querySelector(".plusHeader_nextBtn")

  const moveAmount = 200
  const colorSetting = ["#F7F8ED", "#F3F9FE", "#F3F2FB", "#F6F2F9"]

  $slides.forEach((e, i) => {
    e.style.backgroundColor = colorSetting[i % 4]
  })

  $slideContainer.style.left = "-100px" // 초기값
  $slideContainer.style.right = window.getComputedStyle($slideContainer).right
  $prevBtn.addEventListener("click", moveLeft)
  $nextBtn.addEventListener("click", moveRight)

  //*********************Functions******************************

  function moveLeft() {
    if ($nextBtn.style.visibility === "hidden")
      $nextBtn.style.visibility = "visible"
    let currLeft = parseInt($slideContainer.style.left.split("p")[0])
    let currRight = parseInt($slideContainer.style.right.split("p")[0])
    $slideContainer.style.left = currLeft + moveAmount + "px"
    $slideContainer.style.right = currRight - moveAmount + "px"
    console.log($slideContainer.style.left, "left")
    console.log($slideContainer.style.right, "right")
    isAtStart()
  }
  function moveRight() {
    if ($prevBtn.style.visibility === "hidden")
      $prevBtn.style.visibility = "visible"
    let currLeft = parseInt($slideContainer.style.left.split("p")[0])
    let currRight = parseInt($slideContainer.style.right.split("p")[0])
    $slideContainer.style.left = currLeft - moveAmount + "px"
    $slideContainer.style.right = currRight + moveAmount + "px"
    isAtEnd()
  }

  function isAtEnd() {
    let currRight = parseInt($slideContainer.style.right.split("p")[0])
    if (currRight >= 0) {
      $nextBtn.style.visibility = "hidden"
    }
  }
  function isAtStart() {
    let currleft = parseInt($slideContainer.style.left.split("p")[0])
    if (currleft >= 0) {
      $prevBtn.style.visibility = "hidden"
    }
  }
}
