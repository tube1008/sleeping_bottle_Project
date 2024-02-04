const tab_li = document.querySelectorAll('.mainMenu nav .gnb li')
const tab_lnb = document.querySelectorAll('.lnb')
console.log(tab_li, tab_lnb)
const tab_lnb_hide = ()=>{for(let h of tab_lnb){h.style.display='none'}} // 숨기기는게 중복이므로 함수(변수)로 만들어서 사용한다.
// 1. 아래 탭들을 가린다.
tab_lnb_hide()
// 2. 첫번째 보여지는것을 다시 보이게 한다.
tab_lnb[3].style.display = 'block'
// 3. tab2를 누르면 tab_c2, tab3을 누르면 tab_c3이 보이게 한다.
tab_li.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        tab_lnb_hide() //모두 숨기고
        tab_lnb[i].style.display = 'block' //내가 누른 인덱스와 동일한 tab만 보이게 설정
    })
})