const openclose = document.querySelector ('.title')
const menu = document.querySelector ('.moreDetail')
console.log (openclose, menu)

menu.style.display = 'none'

openclose.addEventListener ('click', ()=>{
    menu.style.display = 'block'
})

// menu.style.display = 'none'
// let delivery_menu_open_status = false // 현재 상태 변수 (false==숨김)
// delivery_menu.addEventListener('click',function(){
//     if(delivery_menu_open_status == false){
//         console.log(delivery_menu_open_status) //open
//         delivery_menu.style = 'border-bottom-left-radius:0; border-bottom-right-radius:0;'
//         open.style.transform = 'scaleY(-1)';
//         menu.style.display ='flex'
//         delivery_menu_open_status = !delivery_menu_open_status
//     }else{
//         console.log(delivery_menu_open_status) //close
//         delivery_menu.style = 'border-bottom-left-radius:5px; border-bottom-right-radius:5px;'
//         open.style.transform = 'scaleY(1)';
//         menu.style.display ='none'
//         delivery_menu_open_status = !delivery_menu_open_status
//     }
// })