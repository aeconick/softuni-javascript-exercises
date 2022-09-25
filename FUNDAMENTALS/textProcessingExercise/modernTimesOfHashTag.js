function modernTimesOfHashTag(text) {
    let textArr = text.split(' ');

    for (const word of textArr) {
        if (word.startsWith('#') && word.length > 1) {
            let flag = true;
            let wordL = word.toLowerCase();
            for (let index = 1; index < wordL.length; index++) {
                if (wordL.charCodeAt(index) < 97 || wordL.charCodeAt(index) > 122) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                console.log(word.substring(1));
            }
        }
    }
}

modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #numb43er sign');