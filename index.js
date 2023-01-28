var arr=document.querySelectorAll(".drum");

//creating key-value pair for each sound
var audio_dict ={w:'sounds/crash.mp3',
                a:'sounds/kick-bass.mp3',s:'sounds/snare.mp3'
                ,d:'sounds/tom-1.mp3',j:'sounds/tom-2.mp3',k:'sounds/tom-3.mp3'
                ,l:'sounds/tom-4.mp3'};


function makeSound(event){
   
    var audio = new Audio(event);
    audio.play();
}
for(var i=0;i<arr.length;i++){
    arr[i].addEventListener("click",function(){
       makeSound(audio_dict[this.innerHTML]);
       makeAnimation(this.innerHTML);
    });
}

/* adding js code to detect which key is pressed */    
document.addEventListener("keydown",function(e){
    var key_pressed = e.code[e.code.length-1].toLowerCase(); // getting the key pressed using e.code and then converting into lowercase
    var key_arr = Object.keys(audio_dict); //getting the keys array from our previous dictionary
    //checking if key pressed is present in key array
    if(key_arr.includes(key_pressed)){
        makeSound(audio_dict[key_pressed]);
        makeAnimation(key_pressed);
    }
    
});

function makeAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200);
}

  