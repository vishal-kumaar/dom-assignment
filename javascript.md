# Dom Manipulation Assignment

1. Webiste Name: [Dev To](https://dev.to/)

### Topics

    - Query Selctory, Inner HTML

### Sample Image

![Sample One](./images/Pic1.png)

### Tasks

        Target the Top description div and change the DEV Community to <Your_Name> and description to your passion

### Output

![Output](./images/Pic2.png)

### Sample Code
```javascript
document.querySelector(".crayons-subtitle-2").innerHTML = "Vishal Kumar";
document.querySelector(".color-base-70").innerHTML = "I love to write code and I am passionate about web development.";
```

2. Website Name: [Apple](https://support.apple.com/en-in)

### Task

![Store](./images/Picture_3.png)

### Fetch all the product name and store in an array

### Output

['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']

### Sample Code
```javascript
let arr = [];
const products = document.getElementsByClassName("as-imagegrid-item-title");

for (let product of products){
    arr.push(product.firstChild.textContent);
}

console.log(arr);
```

3. Webiste Name: [Youtube Support](https://support.google.com/youtube/)

### Topics

    - Get Element By Id, Create Element, Create Text Node, Append Child

### Sample Image

![Sample One](./images/Pic4.png)

### Tasks

     Add another FAQ 'My New FAQ' to the list

### Output

![Output](./images/Pic5.png)

### Sample Code
```javascript
document.querySelector(".accordion-homepage").innerHTML += `<section class="parent"><h3>My New FAQ</h3></section>`;
```

4. Webiste Name: [OnePlus](https://www.oneplus.in/support)

### Topics

     Query Selector, InnerText

### Sample Image

![Sample One](./images/Pic6.png)

### Tasks

      Change the contact number

### Output

![Output](./images/Pic7.png)

### Sample Code
```javascript
let element = document.querySelector(".one-tel-number");
element.innerText = "+91 6366266689";
```

5. Webiste Name: [Samsung](https://www.samsung.com/in/offer/online/samsung-fest/)

### Topics

       getElementById, createElement, InnerText, append, setAttribute

### Sample Image

![Sample One](./images/Pic8.png)

### Tasks

     Target the main div of card and change the Button text to Check out

### Output

![Output](./images/Pic9.png)

### Sample Code
```javascript
let oldBtn = document.querySelector('.feature-column-carousel__feature .feature-column-carousel__content .feature-column-carousel__button a');
oldBtn.style.display = 'none';
let newBtn = document.createElement('button');
newBtn.setAttribute('class','cta cta--contained cta--black');
newBtn.innerText = 'Check out';

document.querySelector('.feature-column-carousel__feature .feature-column-carousel__content .feature-column-carousel__button').append(newBtn);
```

6. Webiste Name: [Adidas](https://www.adidas.co.in/)

### Topics

    -   Query Selector, Event listeners, Changing Styles

### Sample Image

![Sample One](./images/Pic10.png)

### Tasks

     Target the search box and on hover change thebackground color to red.

### Output

![Output](./images/Pic11.png)

### Sample Code
```javascript
const searchBox = document.querySelector(".searchinput___19uW0");
searchBox.addEventListener('mouseover', ()=>{
    searchBox.style.backgroundColor = "red";
})
```

7. Webiste Name: [MDN Web Docs](https://developer.mozilla.org/en-US/)

### Topics

       Form, Value, Submit

### Sample Image

![Sample One](./images/Pic12.png)

### Tasks

     To Search a topic in the MDN Search bar.
     First add a text to search in the search bar and then hit the submit search button to search the docs using DOM

### Output

![Output](./images/Pic13.png)

### Sample Code
```javascript
const searchBox = document.querySelector(".searchinput___19uW0");
searchBox.addEventListener('mouseover', ()=>{
    searchBox.style.backgroundColor = "red";
})
```

8. Webiste Name: [Google](https://www.google.com/)

### Topics

       Remove Elements

### Sample Image

![Sample One](./images/Pic14.png)

### Tasks

     Remove alternate languages from the home page languages listed

### Output

![Output](./images/Pic15.png)

### Sample Code
```javascript
const SIvCob = document.getElementById("SIvCob");
for (let child of SIvCob.children){
    SIvCob.removeChild(child);
}
```

9. Webiste Name: [Code Wars](https://www.codewars.com/)

### Topics

       Change Font Family, Color of Text.

### Sample Image

![Sample One](./images/Pic16.png)

### Tasks

    Change the font family of the text to monospace and text color to the logo’s background color.

### Output

![Output](./images/Pic17.png)

### Sample Code
```javascript
let heading = document.querySelector('.text-color-white')
heading.style.fontFamily = 'monospace'
heading.style.color = '#b1361e'
```

10. Webiste Name: [Freecodecamp](https://www.freecodecamp.org/)

### Topics

       querySelector, mouseover, click eventListener,  callback function, style,

### Sample Image

![Sample One](./images/Pic18.png)

### Tasks

    Target the button and change background colour on mouseover

### Output

![Output](./images/Pic19.png)

### Sample Code
```javascript
let button = document.querySelectorAll(".login-btn-text")[1];
button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "red";
})
```

11. Webiste Name: [realme](https://www.realme.com/in/)

### Topics

       querySelector,style,background-image

### Sample Image

![Sample One](./images/Pic20.png)

### Tasks

    change the realme logo to ineuron logo

### Output

![Output](./images/Pic21.png)

### Sample Code
```javascript
let logo = document.querySelector('.logo span')
logo.style.backgroundImage= "url('https://ineuron.ai/./images/ineuron-logo.png')"
```

12. Webiste Name: [Github](https://github.com/)

### Topics

       querySelector,style,background-Color

### Sample Image

![Sample One](./images/Pic22.png)

### Tasks

     change the background colour of the button to blue.

### Output

![Output](./images/Pic23.png)

### Sample Code
```javascript
document.querySelector(".btn.btn-sm.btn-primary.btn.mb-2").style.backgroundColor = "blue";
```

13. Webiste Name: [Hackerrank](https://www.hackerrank.com/)

### Topics

       querySelector,innerHtml

### Sample Image

![Sample One](./images/Pic24.png)

### Tasks

Target the top description and change “Matching developers with great companies” to ‘JSBOOTCAMP“.

### Output

![Output](./images/Pic25.png)

### Sample Code
```javascript
let desc = document.querySelector('.fl-module .fl-module-content .fl-heading')
desc.innerHTML = 'JSBOOTCAMP'
```

14. Webiste Name: [Asus](https://www.asus.com/in/)

### Topics

      querySelector,style,font-size

### Sample Image

![Sample One](./images/Pic26.png)

### Tasks

       change the fontsize of “Hot Deals” to 80px

### Output

![Output](./images/Pic27.png)

### Sample Code
```javascript
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "80px";
```

15. Webiste Name: [Dell](https://www.dell.com/en-in/shop/deals/laptop-deals?gacd=10415953-9016-5761040-285981356-0&dgc=ST&gclid=Cj0KCQjwguGYBhDRARIsAHgRm4-XUDMhhVNyHXb3s1gY4ZBzORr_d9Se-buhJwy7asyUe7YdqEA11eEaAt6UEALw_wcB&gclsrc=aw.ds&nclid=BxjBlpBQsX6pjSHh-L8YYSU77EpfXRkG1AGMB5Wbeu386ykspfrPDnfx_DdFau20)

### Topics

      querySelector,style.textAlign

### Sample Image

![Sample One](./images/Pic28.png)

### Tasks

       Convert the text “G15 Gaming Laptop” from left to right

### Output

![Output](./images/Pic29.png)

### Sample Code
```javascript
let title = document.querySelector('#ps-wrapper :nth-child(5) .ps-title');
title.style.textAlign = 'right';
```

16. Webiste Name: [Vercel](https://vercel.com/)

### Topics

     querySelector,innerHTMl

### Sample Image

![Sample One](./images/Pic30.png)

### Tasks

      change the heading “Start with the developer” to “Start with Scratch”

### Output

![Output](./images/Pic31.png)

### Sample Code
```javascript
document.querySelector('.section-title_title__VEDfK').innerHTML = 'Start with Scratch'
```

17. Webiste Name: [Sony](https://www.sony.co.in/)

### Topics

    querySelector,innerHTMl

### Sample Image

![Sample One](./images/Pic33.png)

### Tasks

     change the button text To current Date.

### Output

![Output](./images/Pic32.png)

### Sample Code
```javascript
let now = new Date() ;
document.querySelector('.btn-container').innerHTML = now;
```

18. Webiste Name: [Philips](https://www.philips.co.in/)

### Topics

     querySelector,style,backgroundcolor

### Sample Image

![Sample One](./images/Pic34.png)

### Tasks

    change the background colour blue to orange

### Output

![Output](./images/Pic35.png)

### Sample Code
```javascript
document.querySelector(".p-f03-footer-container").style.background = "orange";
```

19. Webiste Name: [Canon](https://in.canon/)

### Topics

          querySelector,src

### Sample Image

![Sample One](./images/Pic36.png)

### Tasks

    extract the canon logo

### Output

![Output](./images/Pic37.png)

### Sample Code
```javascript
const logoSrc = document.querySelector(".logo").src;
console.log(logoSrc);
```

20. Webiste Name: [Oppo](https://www.oppo.com/in/)

### Topics

          querySelector,style,color

### Sample Image

![Sample One](./images/Pic38.png)

### Tasks

      Change the description colour black to orange

### Output

![Output](./images/Pic39.png)

### Sample Code
```javascript
document.querySelector(".desc").style.color = "orange";
```