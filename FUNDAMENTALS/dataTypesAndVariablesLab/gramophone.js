function gramophone(band, album, song) {
    //The plate makes a full rotation every 2.5 seconds.

    //The song duration in seconds is calculate by the given formula: 
    //(albumName.length * bandName.length) * song-name.length / 2
    let fullRotation = 2.5;
    let count = 0;
    let songDuration = (Number(album.length) * Number(band.length)) * Number(song.length) / 2;
    while (fullRotation <= songDuration) {
        count++;
        songDuration -= fullRotation;
    }
    if (fullRotation == songDuration) {
        console.log(`The plate was rotated ${count} times.`);
    } else {
        console.log(`The plate was rotated ${count + 1} times.`);
    }

}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');