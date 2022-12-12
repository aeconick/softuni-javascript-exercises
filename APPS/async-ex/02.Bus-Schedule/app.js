function solve() {
    //get dom elements
    const info = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    //first request is always 'depot'
    let stop = {
        next: 'depot'
    };

    async function depart() {
        //disable depart button
        departBtn.disabled = true;

        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        try {
            //make request to server
            const res = await fetch(url);
            if (res.status != 200) {
                throw new Error();
            }
            //parse response data to 'stop' obj
            stop = await res.json();
        } catch (error) {
            alert('Error');
        }

        // //display name of next stop
        info.textContent = `Next stop ${stop.name}`;

        //enable arrive button
        arriveBtn.disabled = false;
    }

    function arrive() {
        //disable arrive button
        arriveBtn.disabled = true;

        //display name of current stop
        info.textContent = `Arriving at ${stop.name}`

        //enable depart button
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();