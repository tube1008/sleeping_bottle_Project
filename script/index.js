// 일회성 광고창 
document.addEventListener('DOMContentLoaded', function () {
    var popup = document.querySelector('.popUp');
    var closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});

// 팝업창
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
const term = document.querySelector ('.term') // footer 배경
const useTerms = document.querySelector ('.useTerms') // footer 이용약관 버튼
const utiliTitle = document.querySelector ('.utiliTitle') // footer 이용약관
const infoPolicy = document.querySelector ('.infoPolicy') // footer 개인정보처리방침 버튼
const policyTitle = document.querySelector ('.policyTitle') // footer 개인정보처리방침 
const frmId = document.querySelector ('#frmId')
const frmPw = document.querySelector ('#frmPw')
const loginSel = document.querySelector ('.loginSel')

console.log(login, loginpopup_bg, body, login_access, join, join_access, joinpopup_bg, joinGo, idPwfind, searchBox, bottom, nonShipping, nondelivery, nonlogin, terms, joinMembership, signupBtn, signContainer, useTerms, infoPolicy, term, utiliTitle, policyTitle )

loginpopup_bg.style.display = 'none'
joinpopup_bg.style.display = 'none'
searchBox.style.display = 'none'
login_access.style.display = 'none'
join_access.style.display = 'none'
term.style.display = 'none'


login.addEventListener('click',function(){
    loginpopup_bg.style.display = 'flex'
    login_access.style.display = 'block'
})

loginSel.addEventListener('click',()=>{
    if(frmPw.value == ''){
        alert('비밀번호를 입력하세요.')
    }
    if(frmId.value == ''){
        alert('아이디를 입력하세요.')
    }
})

idPwfind.addEventListener('click', function(){
    searchBox.style.display = 'block'
    login_access.classList.add('hide')
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
    joinpopup_bg.style.display = 'block'
    signContainer.style.display = 'block'
    terms.style.display = 'none'
})

// footer area

useTerms.addEventListener('click', function(){
    term.style.display = 'flex'
    utiliTitle.style.display = 'block'
})

infoPolicy.addEventListener('click', function(){
    term.style.display = 'flex'
    policyTitle.style.display = 'block'
})

const searchIdd = document.querySelector ('.searchIdd') // 아이디 찾기
const emailId = document.querySelector ('#emailId') // 이메일로 찾기
const searchPww = document.querySelector ('.searchPww') // 비밀번호 찾기
const username = document.querySelector ('#userName') // 이름으로 찾기
const phNumber = document.querySelector ('#phNumber') // 번호로 찾기
const selectBoxNum = document.querySelector ('#selectBoxNum') //체크박스 지워야함
const boxMail = document.querySelector ('.boxMail')
const boxNum = document.querySelector ('.boxNum')
const titleId = document.querySelector ('.titleId')
const titlePw = document.querySelector ('.titlePw')
const searchId = document.querySelector ('.searchId')
const searchPw = document.querySelector ('.searchPw')
const findIdPw = document.querySelector ('.findIdPw')
const findPwId = document.querySelector ('.findPwId')
const joinId = document.querySelector ('#joinId')

console.log (searchIdd, searchPww, emailId, username, phNumber, boxMail, boxNum, titleId, titlePw, searchPw )

emailId.style.display = 'block'
username.style.display = 'none'
phNumber.style.display = 'none'
selectBoxNum.style.display = 'none'

boxMail.addEventListener ('click', function(){
    emailId.style.display = 'block'
    username.style.display = 'none'
    phNumber.style.display = 'none'
})

boxNum.addEventListener ('click', function(){
    emailId.style.display = 'none'
    username.style.display = 'block'
    phNumber.style.display = 'block'
})

searchPww.addEventListener ('click', function(){
    searchId.style.display = 'none'
    searchPw.style.display = 'block'
    searchPww.style.backgraund = '#fff'
})

searchIdd.addEventListener ('click', function(){
    searchId.style.display = 'flex'
    searchPw.style.display = 'none'
})

findIdPw.addEventListener('click',()=>{
    if(emailId.value == ''){
        alert('입력하신 정보와 일치하는 계정이 없습니다. 다시 시도해주시거나 사이트 운영자에게 문의해주세요.')
    }
})

findPwId.addEventListener('click',()=>{
    if(joinId.value == ''){
        alert('입력하신 정보와 일치하는 계정이 없습니다. 다시 시도해주시거나 사이트 운영자에게 문의해주세요.')
    }
})

document.addEventListener('DOMContentLoaded', function () {
    var titleElements = document.querySelectorAll('.faqWrap .faqContainer .detail ul li .title');

    titleElements.forEach(function (titleElement) {
        titleElement.addEventListener('click', function () {
            var moreDetailElement = this.nextElementSibling;

            if (moreDetailElement.style.display === 'block') {
                moreDetailElement.style.display = 'none';
            } else {
                // Hide all other open details before opening the clicked one
                titleElements.forEach(function (otherTitleElement) {
                    var otherMoreDetailElement = otherTitleElement.nextElementSibling;
                    if (otherMoreDetailElement !== moreDetailElement) {
                        otherMoreDetailElement.style.display = 'none';
                    }
                });

                moreDetailElement.style.display = 'block';
            }
        });
    });
});


let swiperContainer01 = document.querySelector('#slide')
let swiper01 = new Swiper('#slide', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 1,
    // 슬라이드 사이의 간격
    spaceBetween: 0,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 1, 
    loop: true,
    autoplay:{delay:6000,},
    centeredSlides : true,
    navigation: {
        nextEl: ".swiper-button-next01",
        prevEl: ".swiper-button-prev01",
    },
    breakpoints: {
        // 윈도우 화면 너비가 800 이상일 때(min-width 기준)
        900: {
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
            centeredSlides : false,
        },
        // 화면 너비가 1200px 이상일 때
        1200: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        centeredSlides : false,
        }
    },
})

let swiperContainer02 = document.querySelector('#productContainer')
let swiper02 = new Swiper('#productContainer', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 5,
    // 슬라이드 사이의 간격
    spaceBetween: 50,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 1, 
    loop: true,
    autoplay:{delay:2000,},
    centeredSlides : true,
    navigation: {
        nextEl: ".swiper-button-next01",
        prevEl: ".swiper-button-prev01",
    },
    breakpoints: {
        // 윈도우 화면 너비가 800 이상일 때(min-width 기준)
        900: {
            slidesPerView: 5,
            spaceBetween: 50,
            slidesPerGroup: 1,
            centeredSlides : false,
        },
        // 화면 너비가 1200px 이상일 때
        1200: {
        slidesPerView: 5,
        spaceBetween: 50,
        slidesPerGroup: 1,
        centeredSlides : false,
        }
    },
})