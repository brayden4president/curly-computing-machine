let left = document.querySelector('.left');
let right = document.querySelector('.right')
let choose = document.querySelector('.choose')

let text = document.querySelector('p')
let dark= document.querySelector('.dark');
dark.style.display="none";
let tunnel= document.querySelector('.tunnel');
tunnel.style.display="none";

let sword = document.querySelector('.sword');
sword.style.display="none";

let bright= document.querySelector('.bright');
bright.style.display="none";

let yoda= document.querySelector('.yoda');
yoda.style.display="none";

let alley= document.querySelector('.alley');
alley.style.display="none";

let scared=document.querySelector('.scared');
scared.style.display="none";

let sunset=document.querySelector('.sunset');
sunset.style.display="none";

// left left left left left left left left left left left

left.addEventListener('click', function(){
console.log("left button");
    choose.style.display = "none";
    left.style.display = "none";
    right.style.display = "none";
    tunnel.style.display = "block";
    bright.style.display="none";
    sword.style.display="none";
    dark.style.display="block";
   
    text.innerHTML = "Double click to see what awaits you in the dark tunnel, or hover over the dark cloud too turn around and go home."
});



// double click left
tunnel.addEventListener('dblclick', function (){
    sword.style.display="block";
   
    tunnel.style.display="none";
    bright.style.display="none";
    dark.style.display="none";

    text.innerHTML="You meet a sword bearer and he is about to kill you";
   
   
   


});


// dark choice 1
dark.addEventListener('mouseenter', function(){
bright.style.display="block";
tunnel.style.display="none";

text.innerHTML = "You turn around, instead of going in the dark tunnel";

});


// right right right right right right right right  
right.addEventListener('click', function(){
    console.log("right button");
       choose.style.display="none";
        left.style.display = "none";
        right.style.display = "none";
        tunnel.style.display = "none";
    bright.style.display="none";
    sword.style.display="none";
    dark.style.display="none";
    yoda.style.display="none";
    alley.style.display="block";
    scared.style.display="block";

    text.innerHTML="If you double click, you meet Yoda. Hover over the emoji to turn around instead.";

});

// double click right
alley.addEventListener('dblclick', function (){
    yoda.style.display="block";
    alley.style.display="none";
    tunnel.style.display="none";
    bright.style.display="none";
    dark.style.display="none";
    scared.style.display="none";
    text.innerHTML="You meet yoda, and he says he will train you.";

});

// scared choice 1
scared.addEventListener('mouseenter', function(){
    scared.style.display="block";
    yoda.style.display="none";
    alley.style.display="none";
    sunset.style.display="block";
    text.innerHTML = "You turn around, instead of training with Yoda because you are scared.";

});




