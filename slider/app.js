const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector(".sidebar")

const container=document.querySelector('.container')
const mainSlide = document.querySelector(".main-slide")
const slidesCount = mainSlide.querySelectorAll('div').length

let activSlideIndex = 0

sidebar.style.top = ` -${(slidesCount -1) * 100}vh `

upBtn.addEventListener('click', ()=>{
    changeSlide('up')
})

downBtn.addEventListener('click', ()=>{
    changeSlide('down')
})

function changeSlide(direction){
    if (direction === "up"){
        activSlideIndex++
        if (activSlideIndex === slidesCount){
            activSlideIndex= 0
        }
    }else if (direction === "down"){
        activSlideIndex--
        if (activSlideIndex <0){
            activSlideIndex = slidesCount -1
        }
    }

    const height = container.clientHeight
    
    mainSlide.style.transform = `translateY(-${activSlideIndex*height}px)`

    sidebar.style.transform = `translateY(${activSlideIndex*height}px)`
}


