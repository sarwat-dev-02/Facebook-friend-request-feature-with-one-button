let btn = document.querySelector("button");
let staTus = document.querySelector("h5");
let hit = 0;

btn.addEventListener("click", function (){
if(hit == 0){
staTus.innerHTML = "Friend";
staTus.style.color = "green";
btn.innerHTML = "Unfriend";
hit = 1;}
else{
staTus.innerHTML = "Stranger";
staTus.style.color = "red";
btn.innerHTML = "Add Friend";
hit = 0;
}
});
