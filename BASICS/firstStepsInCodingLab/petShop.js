function petShop(input) {
    let numDogFood = input[0];
    let numCatFood = input[1];
    let priceDogFood = Number(numDogFood) * 2.5;
    let priceCatFood = Number(numCatFood) * 4.0;
    let result = priceCatFood + priceDogFood;

    console.log(result);
}

petShop();