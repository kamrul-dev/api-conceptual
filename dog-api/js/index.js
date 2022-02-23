// load dog api
const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data));
}

// display dog data
const displayDog = (dogList) => {
    console.log(dogList)
}