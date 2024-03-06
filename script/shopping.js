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