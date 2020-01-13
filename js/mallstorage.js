window.addEventListener('load', () => {
  //***---商品寫入storage---***//
  let storage = sessionStorage;
  if (storage['myCartList'] == null) {
    storage['myCartList'] = '';
  };
  //--建立加入購物車事件--//
  let mallAddProduct = document.querySelector('.mall_bBtn');
  mallAddProduct.addEventListener('click', () => {
    //--撈商品路徑--//
    let ProductImg = document.querySelector('.b_img').getAttribute('src');
    console.log(ProductImg);
    //--撈商品名稱--//
    let productTitle = document.querySelector('.product_title').textContent;
    console.log(productTitle);
    //--撈商品說明--//
    let productFeaturesText1 = document.querySelector('.product_features_text1').textContent;
    console.log(productFeaturesText1);
    let productFeaturesText2 = document.querySelector('.product_features_text2').textContent;
    console.log(productFeaturesText2);
    //--撈商品價格--//
    let priceSale = document.querySelector('.price_sale').textContent;
    console.log(priceSale);
    //--撈商品顏色--//
    let mallColorSelect = document.querySelector('#mall_color')
    let mallColorIndex = mallColorSelect.selectedIndex;
    let mallcolor = mallColorSelect.options[mallColorIndex].text;
    console.log(mallcolor);
    //--撈商品數量--//
    let mallaAmountSelect = document.querySelector('#mall_amount')
    let mallAmountIndex = mallaAmountSelect.selectedIndex;
    let mallAmount = mallaAmountSelect.options[mallAmountIndex].text;
    console.log(mallAmount);
    //--把商品名稱寫進myCartList列--//
    // storage.setItem('myCartList',`${productTitle},`);

    if (storage[`${productTitle}` + `${mallcolor}`]) {
      alert('您已選購過此商品');
    } else {
      storage['myCartList'] += `${productTitle}` + `${mallcolor},`;
    }

    //--檢查商品名稱有沒有在欄裡，有跳出訊息沒有就建立--//
    if (storage[`${productTitle}` + `${mallcolor}`] == null) {
      storage[`${productTitle}` + `${mallcolor}`] = '';
    };
    storage.setItem(`${productTitle}` + `${mallcolor}`, `${ProductImg}|${productTitle}|${mallcolor}|${priceSale}|${productFeaturesText1}|${productFeaturesText2}|${mallAmount}`);
  });
});