export default function companyCardHover() {
  const $card = document.querySelectorAll(".companyCard")
  const $img = document.querySelectorAll(".companyCard_imgContainer img")
  const $name = document.querySelectorAll(
    ".companyCard_textContainer :first-child :first-child"
  )
  let toggle = true

  $card.forEach((e, i) => {
    e.addEventListener("mouseover", () => {
      if (toggle === true) {
        $img[i].classList.add("hover")
        $name[i].classList.add("hover")
        toggle = false
      } else {
        $img[i].classList.remove("hover")
        $name[i].classList.remove("hover")
        toggle = true
      }
    })
    e.addEventListener("mouseout", () => {
      if (toggle === true) {
        $img[i].classList.add("hover")
        $name[i].classList.add("hover")
        toggle = false
      } else {
        $img[i].classList.remove("hover")
        $name[i].classList.remove("hover")
        toggle = true
      }
    })
  })
}
