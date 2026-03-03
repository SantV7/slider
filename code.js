let imgChange = document.getElementById('slider-area')
imgChange.style.backgroundImage = 'url(./assets/img/cartoonOne.jpg)'

const prevImg = () => {
    imgChange.style.backgroundImage = 'url(./assets/img/cartoonOne.jpg)'
}

const nextImg = () => {
    imgChange.style.backgroundImage = 'url(./assets/img/cartoonTwo.jpg)'
}

