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

let members = document.querySelectorAll(".team-member");
let index = 0;

// show first
members[0].classList.add("active");

setInterval(() => {
members[index].classList.remove("active");

index = (index + 1) % members.length;

members[index].classList.add("active");

}, 3000);

});
</script>
