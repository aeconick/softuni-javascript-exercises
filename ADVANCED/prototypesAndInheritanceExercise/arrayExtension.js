(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        let resultArr = [];
        let length = this.length;
        for (let i = n; i < length; i++) {
            resultArr.push(this[i]);
        }
        return resultArr;
    };
    Array.prototype.take = function (n) {
        let resultArr = [];
        for (let i = 0; i < n; i++) {
            resultArr.push(this[i]);
        }
        return resultArr;
    };
    Array.prototype.sum = function () {
        let a = this.reduce((a, b) => a + b, 0);
        return a;
    };
    Array.prototype.average = function () {
        let a = this.reduce((a, b) => a + b, 0);
        let average = a / this.length;
        return average;
    };
})()
