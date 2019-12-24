window.addEventListener('load', () => {
  let deleteProduct = document.querySelector('#del_product');
  let cartProduct = document.querySelector('.cart_product');

  deleteProduct.addEventListener('click', function () {
    cartProduct.setAttribute('style', 'transform: rotateX(90deg);transition: all .5s;');
    setTimeout((function () {
      cartProduct.parentNode.removeChild(cartProduct);
    }), 1100);
  });
});