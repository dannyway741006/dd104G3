window.addEventListener('load', () => {
  //---開關購物車
  let clickCart = document.querySelector('#cart');
  let showCart = document.querySelector('#cart_page');
  let cartBg = document.querySelector('.cart_bg');
  let closeCart = document.querySelector('#close_cart');
  showCart.addEventListener('click', (e) => { //---阻止bubble事件---//
    e ? e.stopPropagation() : event.cancelBubble = true;
  });
  clickCart.addEventListener('click', () => cartBg.classList.add('show')); //---打開購物車---//
  cartBg.addEventListener('click', () => cartBg.classList.remove('show')); //---點擊空白處關閉購物車---//
  closeCart.addEventListener('click', () => cartBg.classList.remove('show')); //---點X關閉購物車---//
  window.onkeydown = (e) => {
    if (e.keyCode == 27) {
      cartBg.classList.remove('show')
    }
  }; //---按esc關閉購物車---//


  //---刪除product---//
  let deleteProduct = document.querySelector('#del_product');
  let cartProduct = document.querySelector('.cart_product');

  deleteProduct.addEventListener('click', function () {
    cartProduct.setAttribute('style', 'transform: rotateX(90deg);transition: all .5s;');
    setTimeout((function () {
      cartProduct.parentNode.removeChild(cartProduct);
    }), 1100);
  });

  //---動態修改商品數量---//
  let addProductNum = document.querySelector('#addProductNum');
  let cutProductNum = document.querySelector('#cutProductNum');
  let productNum = document.querySelector('#productNum');
  let numProduct = parseInt(document.querySelector('#productNum').value);

  addProductNum.addEventListener('click', () => {
    numProduct += 1;
    productNum.setAttribute("value", numProduct);
  });
  cutProductNum.addEventListener('click', () => {
    if (numProduct != 0) {
      numProduct -= 1;
      productNum.setAttribute("value", numProduct);
    }
  });
});