console.log("AR Electricals Website Loaded");

document.addEventListener("DOMContentLoaded", function(){

let members = document.querySelectorAll(".team-member");

if(members.length === 0){
return;
}

let index = 0;

/* ensure first member is visible */

members[index].classList.add("active");

/* team slider */

setInterval(function(){

members[index].classList.remove("active");

index++;

if(index >= members.length){
index = 0;
}

members[index].classList.add("active");

},3000);

});
