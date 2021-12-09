const select = document.querySelector(".header__category-select");
select.onclick = (e) => {
    console.log(e.target)
    document.querySelector(".header__category-select--list").classList.toggle("active");
    document.querySelector(".header__category-select--icon").classList.toggle("spin");
}
const selectText = document.querySelector(".header__category-select--text");
document.querySelectorAll(".header__category-select--option").forEach(ele => ele.onclick = () => {
    selectText.innerText = ele.innerText;
})
document.querySelector(".checkout__close").onclick = ()=> {
    document.querySelector(".checkout__cart").classList.toggle("cartActive");
}
document.querySelector(".header__cart").onclick = () => {
    document.querySelector(".checkout__cart").classList.toggle("cartActive");
}
const catalogue = ["bakery","fruit","meet","drink","kitchen","nutrition","baby","pharmacy"];
const select2 = document.querySelectorAll(".catalogue__select");
select2.forEach((ele,index) => ele.onclick = (e) => {
    console.log(index)
            document.querySelector(`.catalogue__select-list.catalogue--${catalogue[index]}`).classList.toggle("active");
            document.querySelector(`.catalogue__arrow.catalogue--${catalogue[index]}`).classList.toggle("spin");
});
window.onscroll = (e) =>{
    document.querySelectorAll(".catalogue__select-list").forEach(ele => ele.classList.remove("active"));
}

select2.forEach((ele,index) => ele.onblur = (e) => {
   
            document.querySelector(`.catalogue__select-list.catalogue--${catalogue[index]}`).classList.remove("active");
            document.querySelector(`.catalogue__arrow.catalogue--${catalogue[index]}`).classList.remove("spin");
});
const prevCmtBtn = document.querySelector (".comment__scroll--previous");
const nextCmtBtn = document.querySelector (".comment__scroll--next");
const cmtList = document.querySelector(".customer__display");

prevCmtBtn.addEventListener("click", (e)=>{
    // console.log(e.target)
    const width = cmtList.getBoundingClientRect().width;
    const height = cmtList.getBoundingClientRect().height;
    console.log( cmtList.offsetWidth);
    
    cmtList.scroll({
        behavior: "smooth",
        left : -100,
    })
})
nextCmtBtn.addEventListener("click", (e)=>{
    console.log(e.target)
})