const containerE=document.querySelector(".container");


const careers=["Youtuber","Freelancer","Teacher","Webdeveloper"];
let careersIndex=0;
let charIndex=0;


function updateText(){

    
    
    charIndex++;
    containerE.innerHTML=`<h1>I am a ${careers[careersIndex].slice(0,charIndex)}</h1>`;
    if(charIndex===careers[careersIndex].length){
        careersIndex++;
        charIndex=0;
    }if(careersIndex===careers.length){
        careersIndex=0;
        charIndex++;
    }
      setTimeout(updateText,400)
    

}

updateText()

