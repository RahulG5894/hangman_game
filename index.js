const name = prompt("What's your name");
const greetings = `Welcome Player ${name}`;
document.getElementById('playername').innerHTML = greetings;
function startGame(){
    const dict = [
        "dream",
        "motivation",
        "procrastination",
        "hardWork",
        "passion",
        "success",
        "failure",
        "grind",
        "vision",
        "discipline"
    ];
    const word = dict[Math.floor(dict.length*Math.random())];
    const ansArr = [];
    for(let i=0; i<word.length; i++) {
        ansArr[i]="_";
    }
    var remainingLetters = word.length;
    while(remainingLetters>0) {
        alert(ansArr.join(" "));
        let guess = prompt("Guess a letter in lower case, or click Cancel to stop playing.");
        if(guess==null) {
            break;
        }
        else if(guess.length!==1) {
            alert("Please enter a single letter.");
        }
        else{
            for(let i=0; i<word.length; i++){
                if(word[i]===guess){
                    ansArr[i] = guess;
                    remainingLetters--;
                }
            }
        }
    }
    alert(ansArr.join(" "));
    alert("Good job! The answer was "+word);
}
