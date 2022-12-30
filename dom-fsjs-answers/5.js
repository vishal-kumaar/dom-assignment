let oldBtn = document.querySelector('.feature-column-carousel__feature .feature-column-carousel__content .feature-column-carousel__button a');
oldBtn.style.display = 'none';
let newBtn = document.createElement('button');
newBtn.setAttribute('class','cta cta--contained cta--black');
newBtn.innerText = 'Check out';

document.querySelector('.feature-column-carousel__feature .feature-column-carousel__content .feature-column-carousel__button').append(newBtn);