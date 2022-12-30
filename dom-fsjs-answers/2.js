let arr = [];
const products = document.getElementsByClassName("as-imagegrid-item-title");

for (let product of products){
    arr.push(product.firstChild.textContent);
}

console.log(arr);