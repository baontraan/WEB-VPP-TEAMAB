// Lấy biến trên URL
const url = new URL(window.location.href);
const id = url.searchParams.get("id");

// Log ra object sản phẩm đúng id đó
//  Tim san pham trong mang dung voi id tren URLs
const detailProduct = product.find((element) => element.id == id);

// Show dữ liệu ra Dom
const detailTop = document.getElementById("detailTop");
const detailBot = document.getElementById("detailBot");
const changeName = document.getElementById("changeName");
detailTop.innerHTML = ` <div class="detail-left col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div class="pic">
            <img
              src="${detailProduct.src}"
              alt=""
            />
          </div>
        </div>
        <div class="detail-right mt-4 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <h4>${detailProduct.name}</h4>
          <span class="star d-block py-1">
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
          </span>
          <div class="price fs-4 mt-2">${detailProduct.price}<span class="dong">đ</span></div>
          <div class="status mt-2">Trạng thái: <span>${detailProduct.status}</span></div>
          <div class="choose-number d-flex py-3 gap-4">
            <p class="number">Số lượng:</p>
            <div class="quality">
              <span><i class="fa-solid fa-minus" aria-hidden="true"></i></span>
              <input type="text" value="1" aria-label="quantity" disabled />
              <span><i class="fa-solid fa-plus" aria-hidden="true"></i></span>
            </div>
          </div>
          <div class="add-cart d-flex gap-3">
            <a
              class="btns"
              href="javascript:;"
              onclick="addToCart()"
              ><i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng</a
            >
            <a class="btns" href="javascipt:;"
              ><i class="fa-solid fa-cart-plus"></i> Mua ngay</a
            >
          </div>
        </div>
        `;
detailBot.innerHTML = `<div class="col-xl-12">
          <div class="desc">
            <h4 class="description">Mô tả</h4>
            <p>
              ${detailProduct.describe}
            </p>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="character">
            <h4 class="charac d-flex justify-content-between">
              Đặc điểm nổi bật <i class="fa-solid fa-plus"></i>
            </h4>
            <ul class="list-charac">
              <li>${detailProduct.charac1}</li>
              <li>${detailProduct.charac2}</li>
              <li>${detailProduct.charac3}</li>
              <li>
                ${detailProduct.charac4}
              </li>
            </ul>
          </div>
        </div>`;

changeName.innerHTML = `<div class="category-top d-flex my-3" id="changeName">
        <p><a class="pagePrev" href="index.html">Trang Chủ</a></p>
        <span class="mx-2"><i class="fa-solid fa-chevron-right"></i></span>
        <p>
          <a class="pageSimp" href="javascript: ;"
            >${detailProduct.name}</a
          >
        </p>
      </div>`;

// function Add To Cart
function addToCart() {
  // Gán số lượng cho 1 sản phẩm khi thêm vào
  detailProduct.quantity = 1;
  // Tìm sản phẩm đó có trong giỏ hàng chưa
  const findIndexProduct = arrCart.findIndex((item) => item.id == id);
  // Nếu có thì tăng số lượng chứ không thêm vào
  if (findIndexProduct >= 0) {
    arrCart[findIndexProduct].quantity++;
  } else {
    arrCart.push(detailProduct);
    countCart();
  }
  localStorage.setItem("List_Cart", JSON.stringify(arrCart));
}
