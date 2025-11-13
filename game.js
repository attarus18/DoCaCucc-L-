let animal=localStorage.getItem("chosenAnimal");
let breed=localStorage.getItem("chosenBreed");
let xp=parseInt(localStorage.getItem("xp")||0);
let level=parseInt(localStorage.getItem("level")||1);
const xpSpan=document.getElementById("xp");
const lvlSpan=document.getElementById("level");
const petImg=document.getElementById("petImg");
const title=document.getElementById("title");
const breedNames={labrador:"Labrador",husky:"Husky",poodle:"Barboncino",frenchbulldog:"Bulldog Francese",
european:"Europeo",siamese:"Siamese",mainecoon:"Maine Coon",british:"British Shorthair"};
const images={labrador:"https://i.imgur.com/eEVYtO1.jpeg",husky:"https://i.imgur.com/5Qw2zV2.jpeg",
poodle:"https://i.imgur.com/MBt0TA2.jpeg",frenchbulldog:"https://i.imgur.com/8LjM5s5.jpeg",
european:"https://i.imgur.com/OV2lVh5.jpeg",siamese:"https://i.imgur.com/IsZqBsJ.jpeg",
mainecoon:"https://i.imgur.com/Xr5dOn8.jpeg",british:"https://i.imgur.com/PCWxz0R.jpeg"};
petImg.src=images[breed];title.textContent=breedNames[breed];
xpSpan.textContent=xp;lvlSpan.textContent=level;
function addXP(a){xp+=a;if(xp>=level*100){level++;xp=0;}xpSpan.textContent=xp;lvlSpan.textContent=level;save();}
function giveFood(){addXP(10);}function playWithPet(){addXP(20);}function washPet(){addXP(15);}
function buyToy(){if(xp>=100)addXP(-100);}function buyFood(){if(xp>=150)addXP(-150);}
function save(){localStorage.setItem("xp",xp);localStorage.setItem("level",level);}