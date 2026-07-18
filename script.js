// ===== Eight Months With You =====

// Loading Screen
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");
        document.getElementById("giftPage").classList.remove("hidden");
    }, 2500);
};

// Helper
function showPage(current, next){
    document.getElementById(current).classList.add("hidden");
    document.getElementById(next).classList.remove("hidden");
}

// Gift
document.querySelector(".gift").onclick = () =>{
    showPage("giftPage","welcomePage");
}

// Begin
const music=document.getElementById("music");

document.getElementById("begin").onclick=()=>{
    music.play();
    showPage("welcomePage","envelopePage");
}

// Envelope
document.getElementById("envelope").onclick=()=>{
    showPage("envelopePage","letterPage");
    typeWriter();
}

// ---------------- Letter ----------------

const letter = `

PASTE YOUR LETTER HERE ❤️

`;

let i=0;

function typeWriter(){

    const text=document.getElementById("letter");

    text.innerHTML="";

    function typing(){

        if(i<letter.length){

            text.innerHTML+=letter.charAt(i);

            i++;

            setTimeout(typing,35);

        }

    }

    typing();

}

// Continue

document.getElementById("galleryBtn").onclick=()=>{

    showPage("letterPage","galleryPage");

}

// ---------------- Gallery ----------------

let current=1;

const total=15;

const photo=document.getElementById("photo");

document.getElementById("next").onclick=()=>{

current++;

if(current>total) current=1;

photo.src="images/"+current+".jpg";

}

document.getElementById("prev").onclick=()=>{

current--;

if(current<1) current=total;

photo.src="images/"+current+".jpg";

}

document.getElementById("counterBtn").onclick=()=>{

showPage("galleryPage","counterPage");

startCounter();

}

// ---------------- Counter ----------------

// IMPORTANT:
// Replace with the date you started dating.

const startDate=new Date("2025-11-18");

function startCounter(){

setInterval(()=>{

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor(diff/(1000*60*60));

const minutes=Math.floor(diff/(1000*60));

document.getElementById("counter").innerHTML=`

❤️ 8 Months<br><br>

${days} Days<br>

${hours} Hours<br>

${minutes} Minutes

`;

},1000);

}

// Continue

document.getElementById("reasonBtn").onclick=()=>{

showPage("counterPage","reasonPage");

}

// ---------------- Reasons ----------------

const reasons=[

"Your smile 😊",

"Your laugh 😂",

"Your kindness ❤️",

"The way you care for me",

"Our memories together",

"The little things you do",

"You always make me feel loved",

"Simply because you're you."

];

let reasonIndex=0;

document.getElementById("nextReason").onclick=()=>{

document.getElementById("reasonCard").innerHTML=reasons[reasonIndex];

reasonIndex++;

if(reasonIndex>=reasons.length){

reasonIndex=0;

}

}

document.getElementById("loveBtn").onclick=()=>{

showPage("reasonPage","lovePage");

}

// ---------------- Love Question ----------------

const no=document.getElementById("no");

no.addEventListener("mouseover",()=>{

const x=Math.random()*250;

const y=Math.random()*180;

no.style.left=x+"px";

no.style.top=y+"px";

});

document.getElementById("yes").onclick=()=>{

launchConfetti();

showPage("lovePage","endingPage");

}

// ---------------- Confetti ----------------

function launchConfetti(){

for(let i=0;i<150;i++){

let confetti=document.createElement("div");

confetti.innerHTML="🎉";

confetti.style.position="fixed";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.fontSize=(Math.random()*20+18)+"px";

confetti.style.transition="4s linear";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.top="100vh";

},10);
