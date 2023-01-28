var arr=document.querySelectorAll(".drum");

//creating key-value pair for each sound
var audio_dict ={w:'sounds/crash.mp3',
                a:'sounds/kick-bass.mp3',s:'sounds/snare.mp3'
                ,d:'sounds/tom-1.mp3',j:'sounds/tom-2.mp3',k:'sounds/tom-3.mp3'
                ,l:'sounds/tom-4.mp3'};

for(var i=0;i<arr.length;i++){
    arr[i].addEventListener("click",function(){
       
       var audio = new Audio(audio_dict[(this.innerHTML)]);
       audio.play();
    });
}

/* adding js code to detect which key is pressed */    
document.addEventListener("keydown",function(e){
    var key_pressed = e.code[e.code.length-1].toLowerCase(); // getting the key pressed using e.code and then converting into lowercase
    var key_arr = Object.keys(audio_dict); //getting the keys array from our previous dictionary
    //checking if key pressed is present in key array
    if(key_arr.includes(key_pressed)){
        //then only playing sound
        var audio = new Audio(audio_dict[key_pressed]);
        audio.play();
    }
    
});

  