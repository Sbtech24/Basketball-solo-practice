let ScoreEl = document.getElementById('score-el') 
let Score = document.getElementById('score')


count = 0;
// from the start set count to 0 
function plusOne(){
    count+= 1
    ScoreEl.textContent = count 
    
}

function plusTwo(){
    count+= 2
    ScoreEl.textContent = count 
    
}

function plusThree(){
    count+= 3
    ScoreEl.textContent = count 
    
}

count2 = 0
// count2 for the guest score board
function addOne(){
    count2+= 1
    Score.textContent = count2 
    
}

function addTwo(){
    count2+= 2
    Score.textContent = count2 
    
}

function addThree(){
    count2+= 3
    Score.textContent=count2

}
// to reset both score boards and start again 

function reset(){
    count = 0 
    count2 = 0 
    Score.textContent = count2 
    ScoreEl.textContent = count
}