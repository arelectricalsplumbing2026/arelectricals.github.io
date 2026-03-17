console.log("AR Electricals Website Loaded");

document.addEventListener("DOMContentLoaded", function(){

let members = document.querySelectorAll(".team-member");

if(members.length === 0){
return;
}

let index = 0;

/* ensure first member is visible */

members[index].classList.add("active");

<script>
document.addEventListener("DOMContentLoaded", function(){

const slider = document.querySelector(".team-slider");
const members = document.querySelectorAll(".team-member");

let index = 0;
const visible = 3;

function slideTeam(){
index++;

if(index > members.length - visible){
index = 0;
}

slider.style.transform = `translateX(-${index * (100/visible)}%)`;
}

setInterval(slideTeam, 3000);

});
</script>
