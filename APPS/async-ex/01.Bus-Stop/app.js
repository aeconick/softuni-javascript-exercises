async function getInfo() {
    const stopNameElement = document.getElementById('stopName');

    //read input value
    const budIdElement = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${budIdElement}`;

    try {
        //clearing all content in 'buses' ul upon clicking the button
        document.getElementById('buses').replaceChildren();
        //make request to server
        const res = await fetch(url);
        //check the status
        if (res.status != 200) {
            throw new Error('Stop ID not found.');
        }
        //parse response data
        const data = await res.json();
        //manipulate the dom tree
        stopNameElement.textContent = data.name;
        Object.entries(data.buses).forEach(bus => {
            const busArrivalElement = document.createElement('li');
            busArrivalElement.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
            document.getElementById('buses').appendChild(busArrivalElement);
        })
    } catch (error) {
        stopNameElement.textContent = 'Error';
    }
}