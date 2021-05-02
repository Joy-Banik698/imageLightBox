let images=document.querySelectorAll('.img')
let icon=document.querySelector('i')
let popup=document.querySelector('.popup')
let popupDrop=document.querySelector('.popupDrop')
let popupImg=document.querySelector('.popup img')

images.forEach((image)=>{
    
    image.addEventListener('click',(e)=>{
        popup.classList.add('activePopup')
        popupDrop.classList.add('active')

        popupImg.setAttribute('src', e.target.src)
    })
})

icon.addEventListener('click', (e) => {
    popup.classList.remove('activePopup')
    popupDrop.classList.remove('active')
})
