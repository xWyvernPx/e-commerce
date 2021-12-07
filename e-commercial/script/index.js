const select = document.querySelector(".header__category-select");
select.onclick = () => {
    console.log("haha")
    document.querySelector(".header__category-select--list").classList.toggle("active");
    document.querySelector(".header__category-select--icon").classList.toggle("spin");
}
const selectText = document.querySelector(".header__category-select--text");
document.querySelectorAll(".header__category-select--option").forEach(ele => ele.onclick = () => {
    selectText.innerText = ele.innerText;
})