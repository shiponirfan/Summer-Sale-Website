// Product Name Collect & Total Price
let totalProductPrice = 0;

function productCardName(target) {
  const productName = target.childNodes[5].innerText;

  const itemsCreate = document.createElement("li");
  itemsCreate.style.fontSize = "24px";
  itemsCreate.style.fontWeight = "500";
  itemsCreate.style.listStyle = "disk";
  itemsCreate.innerText = productName;

  const productNameShow = document.getElementById("product-names");
  productNameShow.appendChild(itemsCreate);

  const getProductPrice = target.childNodes[7].innerText.split(" ")[0];
  const getProductPriceNumber = parseFloat(getProductPrice);

  totalProductPrice = totalProductPrice + getProductPriceNumber;

  const totalPrice = document.getElementById("totalPrice");
  totalPrice.innerText = totalProductPrice;

  const totalPriceFloat = parseFloat(totalPrice.innerText);
  const totalPriceNum = totalPriceFloat.toFixed(2);

  const disabled = document.getElementById("couponButton");

  if (totalPriceNum >= 200) {
    disabled.removeAttribute("disabled");
  }

  const purchaseDisabled = document.getElementById("purchaseBtn");

  if (totalPriceNum > 0) {
    purchaseDisabled.removeAttribute("disabled");
  }

  document
    .getElementById("couponButton")
    .addEventListener("click", function () {
      const getCouponCode = document.getElementById("couponCode");
      const couponCodeValue = getCouponCode.value;
      const totalCost = document.getElementById("totalCost");
      if (couponCodeValue === "SELL200") {
        const percntageValue = (totalPriceNum / 100) * 20;
        const percentageFixed = percntageValue.toFixed(2);

        const getDiscount = document.getElementById("discountPrice");
        getDiscount.innerText = percentageFixed;
        totalCost.innerText = totalPriceNum - percentageFixed;
      }
    });
}

document.getElementById("goHome").addEventListener("click", function () {
  const totalPrice = document.getElementById("totalPrice");
  totalPrice.innerText = "00";

  const discountPrice = document.getElementById("discountPrice");
  discountPrice.innerText = "00";

  const totalCost = document.getElementById("totalCost");
  totalCost.innerText = "00";

  const itemsCreate = document.getElementById("product-names");
  itemsCreate.innerText = "";

  const getCouponCode = document.getElementById("couponCode");
  getCouponCode.value = "";
});
