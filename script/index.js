// 일회성 광고창 
document.addEventListener('DOMContentLoaded', function () {
    var popup = document.querySelector('.popUp');
    var closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});


const body = document.querySelector('body, html')
const loginpopup_bg = document.querySelector ('.loginPop')//로그인 배경
const joinpopup_bg = document.querySelector ('.joinWrap')// 회원가입 배경
const login = document.querySelector ('#login')//로그인 버튼
const join = document.querySelector ('#join')// 조인 버튼
const login_access =document.querySelector ('.login')// 로그인 팝업창
const join_access = document.querySelector ('.joinPop')// 회원가입 팝업창
const joinGo = document.querySelector ('.joinGo')// 회원가입창으로 가기
const idPwfind = document.querySelector ('.idPwfind')//아이디,비밀번호 찾기
const searchBox = document.querySelector ('.searchBox')//아이디 비밀번호 팝업창
const bottom = document.querySelector ('.bottom')// 로그인 팝업창 밑 비회원 배송조회 부분
const nonShipping = document.querySelector ('.nonShipping') //비회원 배송조회 버튼
const nondelivery = document.querySelector ('.nondelivery') // 비회원 배송조회 팝업창
const nonlogin = document.querySelector ('.nonlogin') //비회원 배송조회에서 로그인하기
const terms = document.querySelector ('.terms') // 약관동의
const joinMembership = document.querySelector ('.joinMembership') // 약관동의로 넘어가기
const signupBtn = document.querySelector ('.signupBtn') // 가입하기로 들어가기 버튼
const signContainer =document.querySelector ('.signContainer') //가입하기 팝업창

console.log(login, loginpopup_bg, body, login_access, join, join_access, joinpopup_bg, joinGo, idPwfind, searchBox, bottom, nonShipping, nondelivery, nonlogin, terms, joinMembership, signupBtn, signContainer)

loginpopup_bg.style.display = 'none'
joinpopup_bg.style.display = 'none'
searchBox.style.display = 'none'
login_access.style.display = 'none'
join_access.style.display = 'none'

login.addEventListener('click',function(){
    loginpopup_bg.style.display = 'flex'
    login_access.style.display = 'block'
})

idPwfind.addEventListener('click', function(){
    searchBox.style.display = 'block'
    login_access.style.display = 'none'
    loginpopup_bg.style.display = 'flex'
    bottom.style.display = 'none'
    nonShipping.style.display = 'none'
})

nonShipping.addEventListener('click', function(){
    nondelivery.style.display = 'block'
    login_access.classList.add('hide')
    loginpopup_bg.style.display = 'flex'
})

nonlogin.addEventListener('click', function(){
    nondelivery.style.display = 'none'
    login_access.classList.remove('hide')
    loginpopup_bg.style.display = 'flex'
})

loginpopup_bg.addEventListener('click', function() {
    login_access.style.display = 'block'
    body.style.overflow = 'auto'
})

joinGo.addEventListener('click', function(){
    joinpopup_bg.style.display = 'flex'
    join_access.style.display = 'block'
    loginpopup_bg.style.display = 'none'
    login_access.style.display = 'block'
})

join.addEventListener('click', function(){
    joinpopup_bg.style.display = 'flex'
    join_access.style.display = 'block'
})

joinMembership.addEventListener('click', function(){
    joinpopup_bg.style.display = 'flex'
    terms.style.display = 'block'
    join_access.style.display = 'none'
})

signupBtn.addEventListener('click',function(){
    joinpopup_bg.style.display = 'flex'
    terms.style.display = 'none'
    signContainer.style.display = 'block'
})


// let slide = new Swiper('.swiper-container',{
//     direction: 'horizontal',
//     loop:'true',
//     slidesPerView:3,
//     spaceBetween:10,
//     autoplay:{delay:5000,}
// })