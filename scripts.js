// Hide the Alert Notification on click

const alert = document.querySelector(".alert");
const alert_close = document.querySelector(".alert-close");

console.log(alert);
console.log(alert_close);

alert_close.addEventListener("click", function() {
  alert.style.display = "none";
});
