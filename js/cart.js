window.addEventListener('load', () => {
  //***---購物車商品滑入特效---***///
  let cartProduct = document.querySelectorAll('.cart_product');
  for (let j = 0; j < cartProduct.length; j++) {
    window.setTimeout(() => {
      cartProduct[j].setAttribute('style', 'opacity:1;left:0%;transition:all .8s;')
    }, 200 * j);
  }
});

//***---欄位focus---***//
let cardNum1 = document.querySelectorAll('.cart_inputnum1');
for (let i = 0; i < cardNum1.length; i++) {
  cardNum1[i].addEventListener('input', (e) => {
    if (e.target.value.length == 4) {
      e.target.nextElementSibling.focus();
    } else if (e.target.value.length == 0) {
      e.target.previousElementSibling.focus();
    };
  });
};

//***---從storage取出資料到購物車---***//
let storage = sessionStorage;

//--先把myCartList取出來--//
let getMyCartList = storage.getItem(`myCartList`);
let cartProducts = getMyCartList.substr(0, getMyCartList.length - 1).split(',');
// console.log(cartProducts);

let total = 0;
for (let key in cartProducts) {
  //--跑迴圈將每一項點選的商品取出來--//
  let productInfo = storage.getItem(cartProducts[key]).split('|');
  //--將以選購商品金額加總--//
  total += (parseInt(productInfo[3]) * parseInt(productInfo[6]));
  // console.log(productInfo);

  //--將取出的資料寫進HTML結構中--//
  let addProduct = document.createElement('div');
  document.querySelector('.cart_list').appendChild(addProduct).innerHTML = `
    <div class="cart_product">
      <div class="cart_product_img">
        <img src="${productInfo[0]}" alt="">
      </div>
      <div class="cart_product_message">
        <p>${productInfo[1]}</p>
        <h3 class="cart_product_price">${productInfo[3]}</h3>
        <p>商品介紹 : ${productInfo[4]}</p>
        <p>商品介紹 : ${productInfo[5]}</p>
      </div>
      <div class="cart_product_qty">
        <button class="cart_cut_product"> - </button>
        <p class="cart_product_number">${productInfo[6]}</p>
        <button class="cart_add_product"> + </button>
      </div>
    </div>`;

}
//--秀出初始加總後的金額並寫進總計欄--//
document.querySelector('.cart_price_total').textContent = total;

//--加減商品數量--//
let cartProduct = document.querySelectorAll('.cart_product');
let cutProductBtn = document.querySelectorAll('.cart_cut_product');
let addProductBtn = document.querySelectorAll('.cart_add_product');
let productNumber = document.querySelectorAll('.cart_product_number');
for (let k = 0; k < cartProduct.length; k++) {
  let productValue = parseInt(productNumber[k].textContent);
  cutProductBtn[k].addEventListener('click', () => {
    if (productValue == 1) {
      confirm('確定刪除商品嗎？');
      cartProduct[k].parentNode.removeChild(cartProduct[k]);
    } else {
      productValue--;
      productNumber[k].textContent = productValue;
    }
  });
  addProductBtn[k].addEventListener('click', () => {
    productValue++;
    productNumber[k].textContent = productValue;
  });
}

//--計算調整後的購物車總金額--//
for (let i = 0; i < cartProduct.length; i++) {
  cutProductBtn[i].addEventListener('click', () => {
    let cartNewTotal = document.querySelector('.cart_price_total');
    let cartProductN = document.querySelectorAll('.cart_product');
    let newProductPrice = document.querySelectorAll('.cart_product_price');
    let newProductNumber = document.querySelectorAll('.cart_product_number');
    let newTotal = 0;
    for (let n = 0; n < cartProductN.length; n++) {
      newTotal += (parseInt(newProductPrice[n].textContent) * parseInt(newProductNumber[n].textContent));
    }
    cartNewTotal.textContent = newTotal;
  });
  addProductBtn[i].addEventListener('click', () => {
    let cartNewTotal = document.querySelector('.cart_price_total');
    let cartProductN = document.querySelectorAll('.cart_product');
    let newProductPrice = document.querySelectorAll('.cart_product_price');
    let newProductNumber = document.querySelectorAll('.cart_product_number');
    let newTotal = 0;
    for (let n = 0; n < cartProductN.length; n++) {
      newTotal += (parseInt(newProductPrice[n].textContent) * parseInt(newProductNumber[n].textContent));
    }
    cartNewTotal.textContent = newTotal;
  });
}




// //---開關購物車
// let clickCart = document.querySelector('#cart');
// let showCart = document.querySelector('#cart_page');
// let cartBg = document.querySelector('.cart_bg');
// let closeCart = document.querySelector('#close_cart');
// showCart.addEventListener('click', (e) => { //---阻止bubble事件---//
//   e ? e.stopPropagation() : event.cancelBubble = true;
// });
// clickCart.addEventListener('click', () => cartBg.classList.add('show')); //---打開購物車---//
// cartBg.addEventListener('click', () => cartBg.classList.remove('show')); //---點擊空白處關閉購物車---//
// closeCart.addEventListener('click', () => cartBg.classList.remove('show')); //---點X關閉購物車---//
// window.onkeydown = (e) => {
//   if (e.keyCode == 27) {
//     cartBg.classList.remove('show')
//   }
// }; //---按esc關閉購物車---//


// //---刪除product---//
// let deleteProduct = document.querySelector('#del_product');
// let cartProduct = document.querySelector('.cart_product');

// deleteProduct.addEventListener('click', function () {
//   cartProduct.setAttribute('style', 'transform: rotateX(90deg);transition: all .5s;');
//   setTimeout((function () {
//     cartProduct.parentNode.removeChild(cartProduct);
//   }), 1100);
// });

// //---動態修改商品數量---//
// let addProductNum = document.querySelector('#addProductNum');
// let cutProductNum = document.querySelector('#cutProductNum');
// let productNum = document.querySelector('#productNum');
// let numProduct = parseInt(document.querySelector('#productNum').value);

// addProductNum.addEventListener('click', () => {
//   numProduct += 1;
//   productNum.setAttribute("value", numProduct);
// });
// cutProductNum.addEventListener('click', () => {
//   if (numProduct != 0) {
//     numProduct -= 1;
//     productNum.setAttribute("value", numProduct);
//   }
// });