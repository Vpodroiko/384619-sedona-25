var search = document.querySelector(".search-button");
var popup = document.querySelector(".hotels-search");

var form = popup.querySelector("form");
var checkinDate = popup.querySelector("[name=checkin-date]");
var checkoutDate = popup.querySelector("[name=checkout-date]");
var adults = popup.querySelector("[name=adults-number]");
var children = popup.querySelector("[name=children-number]");


var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adults");
  storage = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}


  search.addEventListener("click", function (evt) {
    evt.preventDefault();
  popup.classList.toggle("modal-show");

  if (storage) {
   adults.value = storage;
   children.value = storage;
 }

});

form.addEventListener("submit", function (evt) {
  if (!checkinDate.value || !checkoutDate.value || !adults.value || !children.value) {
    evt.preventDefault();
    console.log("Please enter the dates and number of people");
    } else {
    if (isStorageSupport) {
    localStorage.setItem("adults-number", adults.value);
    localStorage.setItem("children-number", children.value);
  }
}
});
