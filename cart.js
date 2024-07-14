const listCart = document.querySelector(".list-cart");
const total = document.querySelector(".total span");
let sumPrice = 0;
arrCart.forEach((element, index) => {
  sumPrice += parseFloat(element.price) * element.quantity;
  listCart.innerHTML += `<div class="cart-item" data-index= "${index}">
          <div class="item-img">
            <img
              src="${element.src}"
              alt=""
            />
          </div>
          <div class="item-content">
            <div class="content-top">
              <div class="info">
                <h3 class="nameTitle">
                  ${element.name}
                </h3>
              </div>
              <div class="delete">
                <a href="javascript:;" onclick="changeCart(event,'delete')" ><i class="fa-solid fa-trash-can"></i></a>
              </div>
            </div>
            <div class="content-bot">
              <div class="contentLeft">
                <span>Quantity: </span>
                <div class="quantity">
                  <span type="minus" onclick="changeCart(event,'minus')"
                    ><i class="fa fa-minus" aria-hidden="true"></i
                  ></span>
                  <input
                    type="text"
                    name="quantity"
                    value="${element.quantity}"
                    disabled="disabled"
                  />
                  <span type="plus" onclick="changeCart(event,'plus')"
                    ><i class="fa fa-plus" aria-hidden="true"></i
                  ></span>
                </div>
              </div>
              <div style =" font-size: 18px" class="price me-2">
              ${parseFloat(element.price) * element.quantity} 
                
              </div>
              <div class="pricecore" style="display: none" >${parseFloat(
                element.price
              )}</div>
            </div>
          </div>
        </div>`;
});
total.innerHTML = sumPrice;
function changeCart(event, type) {
  const cartItem = event.target.closest(".cart-item");
  let quantity = cartItem.querySelector(".quantity input");
  const index = cartItem.getAttribute("data-index");
  const price = cartItem.querySelector(".price");
  const priceCore = cartItem.querySelector(".pricecore");
  const sTotal = document.querySelector(".s_total");
  if (type == "plus") {
    quantity.value++;
    arrCart[index].quantity = quantity.value;
  } else if (type == "minus") {
    if (quantity.value > 1) {
      quantity.value--;
      arrCart[index].quantity = quantity.value;
    }
  } else {
    cartItem.style.display = "none";
    arrCart.splice(index, 1);
    countCart();
    countShopping();
    // localStorage.setItem("Lisy_Cart", JSON.stringify(arrCart));
  }
  price.innerHTML = priceCore.innerHTML * quantity.value;
  // arrCart[index].quantity = quantity.value;
  let sumPrice = 0;
  arrCart.forEach((element) => {
    sumPrice += parseFloat(element.price) * element.quantity;
  });
  total.innerHTML = sumPrice;
  localStorage.setItem("List_Cart", JSON.stringify(arrCart));
}
