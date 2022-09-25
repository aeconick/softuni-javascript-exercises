function songs(inputArr) {
    class song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let index = 1; index < inputArr.length; index++) {
        let current = inputArr[index].split('_');
        if (current.length != 1) {
            let currentSong = new song(current[0], current[1], current[2]);
            if (inputArr[inputArr.length - 1] == currentSong.typeList || inputArr[inputArr.length - 1]=='all') {
                console.log(currentSong.name);
            }
        }

    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);