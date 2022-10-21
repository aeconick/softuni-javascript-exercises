(function solve() {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return `${this}`;
        }
        return str + this;
    };
    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return `${this}`;
        }
        return this + str;
    };
    String.prototype.isEmpty = function () {
        if (this.length == 0) {
            return true;
        }
        return false;
    };
    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }
        if (n < 4) {
            return '.'.repeat(n);
        }
        let wordsArr = this.split(' ');
        while ((wordsArr.join(' ') + '...').length > n) {
            if (wordsArr.length > 1) {
                wordsArr.pop();
            } else {
                wordsArr[0] = wordsArr[0].slice(0, n - 3)
            }
        }
        return wordsArr.join(' ').trim() + '...';
    };
    String.format = function (str, ...params) {
        params.forEach((w, i) => str = str.replace(`{${i}}`.toString(), w));
        return str;
    };
})()