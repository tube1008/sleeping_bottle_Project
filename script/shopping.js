// sohpping area

const detailInfo = document.querySelector('.detailInfo')
const purchaseReview = document.querySelector('.purchaseReview')
const qa = document.querySelector('.qa')
const detailImage = document.querySelector ('.detailImage')
const review = document.querySelector ('.review')
const question = document.querySelector ('.question')

console.log(detailInfo, purchaseReview, qa, detailImage, review ,question)

detailInfo.addEventListener('click', (e)=>{
    detailImage.style.display = 'flex'
    review.style.display = 'none'
    question.style.display = 'none'
    e.preventDefault()
})

purchaseReview.addEventListener('click',(e)=>{
    detailImage.style.display = 'none'
    review.style.display = 'flex'
    question.style.display = 'none'
    e.preventDefault()
})

qa.addEventListener('click',(e)=>{
    detailImage.style.display = 'none'
    review.style.display = 'none'
    question.style.display = 'flex'
    e.preventDefault()
})

// 장바구니 가기, 로그인

const cart = document.querySelector ('.cart')
const selectShop = document.querySelector ('.selectShop')
const buyNow = document.querySelector ('.buyNow')
const like = document.querySelector ('.like')
const good = document.querySelector ('.good')
const pay = document.querySelector ('.pay')
const loginpopup_bg = document.querySelector ('.loginPop')
const login_access =document.querySelector ('.login')
const searchBox = document.querySelector ('.searchBox')
console.log (cart, buyNow, pay, like, good, selectShop, loginpopup_bg, login_access)

selectShop.style.display = 'none'
loginpopup_bg.style.display = 'none'
login_access.style.display = 'none'

cart.addEventListener('click',(e)=>{
    selectShop.style.display = 'flex'
    e.preventDefault
})

buyNow.addEventListener('click',(e)=>{
    loginpopup_bg.style.display = 'flex'
    login_access.style.display = 'block'
    searchBox.style.display = 'none'
    e.preventDefault()
})

like.addEventListener('click',(e)=>{
    loginpopup_bg.style.display = 'flex'
    login_access.style.display = 'block'
    searchBox.style.display = 'none'
    e.preventDefault()
})

pay.addEventListener('click', (e)=>{
    loginpopup_bg.style.display = 'flex'
    login_access.style.display = 'block'
    searchBox.style.display = 'none'
    e.preventDefault()
})

good.addEventListener('click', (e)=>{
    loginpopup_bg.style.display = 'flex'
    login_access.style.display = 'block'
    searchBox.style.display = 'none'
    e.preventDefault()
})

// 썸네일
const shopImg = document.querySelector ('.shopImg')
const bigThumbnail = shopImg.querySelector ('.bigThumbnail img')
const smallThumbnail = shopImg.querySelectorAll ('.smallThumbnail img')
console.log (bigThumbnail, smallThumbnail, shopImg)


smallThumbnail[0].addEventListener('mouseover', function(){
    bigThumbnail.src = "./images/shop/item01_0_detail.jpg"
})
smallThumbnail[1].addEventListener('mouseover', function(){
    bigThumbnail.src = "./images/shop/item01_1_detail.jpg"
})
smallThumbnail[2].addEventListener('mouseover', function(){
    bigThumbnail.src = "./images/shop/item01_2_detail.jpg"
})

// // 컬러 마우스오버

// const white = document.querySelector ('.white')
// const brown = document.querySelector ('.brown')
// console.log(white, brown)

// white.addEventListener('mouseover',()=>{
    
// })