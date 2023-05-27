const setOfWords = [ 
    "Words are good because it is what we use everyday.",
    "Typing at a good speed can save your time.",
    "Fidget spinners are so popular.",
    "Now that you have a feeling for the keyboard and typing easy words, you will move on to next level."
]

const msg = document.getElementById('msg');

const typedWords = document.getElementById('mywords');

const btn = document.getElementById('btn');

let startTime, endTime;

const playGame =() =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime  = date.getTime();
    btn.innerText = "Done"; 
}

const endPlay =()=>{
    let date = new Date();
    endTime  = date.getTime();
    let totalTime =((endTime-startTime)/1000);
    
    let totalStr = typedWords.value;
    let wordCount = WordCounter(totalStr);

    let speed = Math.round((wordCount/ totalTime) * 60);

    let finalMsg = " You typed total at " +speed+" words per minutes  with  accuracy.";

    finalMsg += compareWords(msg.innerText,totalStr);
    msg.innerText = finalMsg;

}

const compareWords=(str1,str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");

    let cnt =0; 

    words1.forEach(function(item,index){
    if(item == words2[index]){
        cnt++;
    }
})
    let errorWords = (words1.length - cnt);
    accuracy = (cnt/(words1.length))*100
    return (accuracy+ "%. " + cnt +" correct out of " + words1.length +" words and the total number of error are "+errorWords+ ".");
}

const WordCounter= (str) =>{

    let response = str.split(" ").length;
    return response
}



btn.addEventListener('click',function(){
    if(this.innerText=='Start'){
        mywords.value="";
        typedWords.disabled = false;
        playGame();
    }
    else if(this.innerText=="Done"){
        btn.innerText = "Start";
        typedWords.disabled = true;
        endPlay();

    }

})