function handleMinus() {
    var input = document.getElementById("amount");
    var value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
    }
}
function handlePlus() {
    var input = document.getElementById("amount");
    var value = parseInt(input.value);
    input.value = value + 1;
}
window.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("amount");
    input.value = "1";
});