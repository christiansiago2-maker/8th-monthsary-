// ===== Password Screen =====

let attempts = 0;

const messages = [
    "( •̀⤙•́ )\n\nHmm...\nThat doesn't look right.\nMaybe it's a special number between us. ❤️",
    "(╥﹏╥)\n\nStill wrong...\nThink a little harder.",
    "(╯°□°）╯︵ ┻━┻\n\nSeriously!?\nAre you REALLY Andreiii?",
    "😤\n\nI'm about to tell Christian...",
    "😂\n\nOkay...\nOne last chance!"
];

document.getElementById("unlockBtn").onclick = function () {

    const pass = document.getElementById("password").value;
    const message = document.getElementById("message");

    if(pass === "2125"){
         alert("Correct password!");

        message.innerHTML = "🔓 Welcome, Andreiii ❤️";

        setTimeout(function(){

    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("giftPage").classList.remove("hidden");

},1500);

    }else{

        message.innerHTML = messages[Math.min(attempts,4)];

        attempts++;

        document.getElementById("password").value = "";

    }

};
// ===== Eight Months With You =====

// Loading Screen
window.onload = () => {
    document.getElementById("lockScreen").style.display = "flex";
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

Dear Andreiii,

Happy 8th Monthsary, my love. ❤️

It's hard to believe that it's already been eight months. Time has gone by so fast, yet every moment we've shared has become a memory I'll always treasure.

Thank you for staying with me through my good days and my difficult ones. Thank you for your patience, your understanding, your laughter, and for making even the simplest moments feel special. Being with you has brought so much happiness into my life.

I know we're not perfect. We've had misunderstandings, disagreements, and moments when things weren't easy. But through it all, I'm grateful that we're still here, still choosing each other, and still growing together. That means more to me than you could ever imagine.

I made this little website because I wanted to give you something that you could always come back to whenever you miss us, or whenever you need a reminder of how much you mean to me. It may not be the biggest gift, but every part of it was made with love.

Thank you for every smile you've given me, every memory we've created, and every day you've chosen to spend with me.

Here's to our eighth monthsary, and to many more months, adventures, and memories together.

I love you today, tomorrow, and every day after.

Happy 8th Monthsary, Andreiii.

Forever grateful,

Christian ❤️

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
