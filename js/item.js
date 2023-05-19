const item =document.querySelector('.item');
const buy = document.querySelector('.infr-sp');
console.log(buy,item)
function OnMouse() {
    buy.style.display = "block";
}
function OffMouse() {
    buy.style.display = "none";
}
item.addEventListener('mouseenter',OnMouse);
item.addEventListener('mouseleave',OffMouse);