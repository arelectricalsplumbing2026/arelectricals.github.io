console.log("AR Electricals Website Loaded");

let members = document.querySelectorAll(".team-member");

let index = 0;

setInterval(function(){

members[index].classList.remove("active");

index++;

if(index >= members.length){
index = 0;
}

members[index].classList.add("active");

},3000);
