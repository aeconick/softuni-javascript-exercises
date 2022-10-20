function solve(input, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = +price;
            this.status = status;
        }
    }

    let outputArr = [];
    for (const line of input) {
        let [destination, price, status] = line.split('|');
        price = Number(price);
        let obj = new Ticket(destination, price, status);
        outputArr.push(obj);
    }

    let sortedArr = [];
    if (criteria == 'destination') {
        sortedArr = outputArr.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    } else if (criteria == 'price') {
        sortedArr = outputArr.sort((a, b) => a[criteria] - b[criteria]);
    } else if (criteria == 'status') {
        sortedArr = outputArr.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }

    return sortedArr;
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));