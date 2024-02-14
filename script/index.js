// 일회성 광고창 
document.addEventListener('DOMContentLoaded', function () {
    var popup = document.querySelector('.popUp');
    var closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});


// 로그인, 회원가입, 아이디/비번찾기, 비회원 배송조회, 약관동의 팝업창
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
    joinpopup_bg.style.display = 'flex'
    terms.style.display = 'none'
    signContainer.style.display = 'block'
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
const username = document.querySelector ('#username') // 이름으로 찾기
const phNumber = document.querySelector ('#phNumber') // 번호로 찾기
const selectBoxNum = document.querySelector ('#selectBoxNum') //체크박스 지워야함
const selectBoxMail = document.querySelector ('#selectBoxMail .mail')
console.log (searchIdd, searchPww, emailId, username, phNumber, selectBoxMail )

emailId.style.display = 'none'
username.style.display = 'none'
phNumber.style.display = 'none'
selectBoxNum.style.display = 'none'



