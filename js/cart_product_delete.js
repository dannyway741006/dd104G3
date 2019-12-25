window.addEventListener('load', () => {
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