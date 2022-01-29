function changeName(id) {
    document.querySelector(id).innerText="Michael Scott";
}

function beGone(e) {
    document.querySelector(e).remove();
}

function goDown (id) {
    document.querySelector(id).innerText--;
}
function goUp (id) {
    document.querySelector(id).innerText++;
}