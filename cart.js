const listCart = document.querySelector(".list-cart");
const total = document.querySelector(".total span");
let sumPrice = 0;
arrCart.forEach((element, index) => {
  sumPrice += element.price * element.quantity;
  listCart.innerHTML += ` <div class="cart-item" data-index= ${index}>
                        <div class="item-img">
                          <img
                            src="${detailProduct.src}"
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
                              <a href="javascript:;"
                                ><i class="fa-solid fa-trash-can"></i
                              ></a>
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
                                <span type="plus" onclick="changeCart(event,'minus')"
                                  ><i class="fa fa-plus" aria-hidden="true"></i
                                ></span>
                              </div>
                            </div>
                            <div class="price text-center">
                            ${
                              element.price * element.quantity
                            }<span class="dong">đ</span>
                            </div>
                            <div class="pricecore" style="display: none">
                              31
                            </div>
                          </div>
                        </div>
                      </div>`;
});
total.innerHTML = sumPrice;
function changeCart(event, type) {
  const cardItem = event.target.closest(".cart-item");
  let quantity = cardItem.querySelector("input");
  const index = cardItem.getAttribute("data-index");
  const price = cardItem.querySelector(".price span");
  const priceCore = cardItem.querySelector(".pricecore");
  if (type == "plus") {
    quantity.value++;
  } else if (type == "minus") {
    if (quantity.value > 1) {
      quantity.value--;
    }
  }
  price.innerHTML = priceCore.innerHTML * quantity.value;
  arrCart[index].quantity = quantity.value;
}
