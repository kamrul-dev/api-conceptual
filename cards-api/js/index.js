// load card api https://deckofcardsapi.com/api/deck/new/draw/?count=2

// step 1: add button event handler
// step 2: get input value
// error handling for string value
// error handling for empty input field

const searchButton = () => {
    const input = document.getElementById('input-value');
    const error = document.getElementById('error');
    const inputValue = input.value;
    //isNan check number or string/others. if string / others then enter this block
    if (isNaN(inputValue) || inputValue == '') {
        // alert('please enter number')
        error.innerText = "*pleae enter a number !";
        input.value = '';
    }
    else if(inputValue <=0){
        error.innerText = "Please enter a positive number !";
        input.value = '';   
    }
    else{
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
        .then(res => res.json())
        .then(data => cardDisplay(data));

        input.value = ''; 
    }
    
}

const cardDisplay = (cards) =>{
    console.log(cards)
}