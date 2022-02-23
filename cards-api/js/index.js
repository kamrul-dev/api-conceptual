// load card api https://deckofcardsapi.com/api/deck/new/draw/?count=2

// step 1: add button event handler
// step 2: get input value
// error handling for string value
// error handling for empty input field
const main = document.getElementById('main');


const searchButton = () => {
    const input = document.getElementById('input-value');
    const error = document.getElementById('error');
    const inputValue = parseInt(input.value);
    //isNan check number or string/others. if string / others then enter this block
    if (isNaN(inputValue) || inputValue == '') {
        // alert('please enter number')
        error.innerText = "*pleae enter a number !";
        input.value = '';
        main.innerHTML = '';
    }
    else if (inputValue <= 0) {
        error.innerText = "Please enter a positive number !";
        input.value = '';
        main.innerHTML = '';
    }
    else {
        main.innerHTML = '';
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => cardDisplay(data.cards));

        input.value = '';
        error.innerHTML = '';
    }

}

// display card 
const cardDisplay = (cards) => {
    // cards = cards.cards 
    for (const card of cards) {
        console.log(card.image)
        const div = document.createElement('div');
        div.classList.add("col-lg-4");
        div.classList.add("mb-5");
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${card.suit}</h5>
          <p class="card-text">${card.code}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        `;
        main.appendChild(div);
    }
}