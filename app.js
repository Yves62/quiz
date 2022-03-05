/******* VARIBALES *********/

let response = 0;

const arrayGoodResponse = ["b","c","a","c","b"];
let arrayResponseUser = [];
let arrayVerificationResponse = [];

const txtResponse = document.querySelector('#txt');

const submit = document.querySelector('form');


/******** RESPONSE *******/

function verifResponse(tabResponse){
    for(let j = 0; j < 5; j++){
        if(tabResponse[j] === arrayGoodResponse[j]){
            arrayVerificationResponse.push(true);
            goodResponse(`#question${j+1}`)
        } else {
            arrayVerificationResponse.push(false);
            badResponse(`#question${j+1}`)
        }
    }
    console.log(arrayVerificationResponse);
    console.log(response);
    verificationTotal();
    reset();
}


/***** FUNCTIONS  *******/

function goodResponse(el){
        response++;
        document.querySelector(el).style.backgroundColor = "#4BB543";
        document.querySelector(el).style.color = "white";
        const score = document.querySelector('#score').textContent = `${response} / 5`;
}
    
function badResponse(el){
        document.querySelector(el).style.backgroundColor = "#ff0e0e";
        document.querySelector(el).style.color = "white";
}
    
function animation(){
        document.querySelector('form').classList.add("animation");
        setTimeout(()=>{
            document.querySelector('form').classList.remove("animation");
        },1000)
}

function verificationTotal(){
    if(response  === 5){
        txtResponse.innerHTML = "&#9989 Bravo, vous avez toutes les bonnes réponses &#9989";
    } else if ( response >= 3 && response < 5) {
        txtResponse.innerHTML = "&#128512 Vous pouvez mieux faire &#128512" ;
        animation();
    } else {
        txtResponse.innerHTML = "&#10060 C'est une catastrophe &#10060";
        animation();
    }
}

function reset(){
    arrayVerificationResponse = [];
    arrayResponseUser = [];
    response = 0;
}

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    for(let i = 1; i <= 5; i++){
        arrayResponseUser.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    console.log(arrayResponseUser);
    verifResponse(arrayResponseUser)
})

