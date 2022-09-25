function sortAnArrayBy2Criteria(arr) {

    //length in ascending order as primary criteria, 
    //and by alphabetical value in ascending order as second criteria

    let sortedArr = arr.sort(function (a, b) {
        return a.length - b.length || a.localeCompare(b);
    })
    console.log(sortedArr.join('\n'));

}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);