function pascalCaseSplitter(input) {

    const result = input.split(/(?=[A-Z])/);

    console.log(result.join(', '));

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');