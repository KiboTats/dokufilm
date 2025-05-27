const callProfile = document.querySelector(".btn");
const callProfileButton = document.querySelector(".open-profile");
const showProfile = document.querySelector(".photo-profile-apple");
const openSublink = document.querySelector(".open__sub")
const closeSublink = document.querySelector(".menu__sub-ul")
const erenamtSubMenu = document.querySelector(".menu__sub")


showProfile.style.display = "none";

callProfile.addEventListener("click", () => {
  if (showProfile.style.display === "none") {
    showProfile.style.display = "block";
  }
  else {
    showProfile.style.display = "none";
  }
});

callProfileButton.addEventListener("click", () => {
  if (showProfile.style.display === "none") {
    showProfile.style.display = "block";
  }
  else {
    showProfile.style.display = "none";
  }
});

openSublink.addEventListener("click", () => {
  erenamtSubMenu.classList.toggle("menu__sub-box")
})

closeSublink.addEventListener("click", ()=>{
  erenamtSubMenu.classList.remove("menu__sub-box")
})







