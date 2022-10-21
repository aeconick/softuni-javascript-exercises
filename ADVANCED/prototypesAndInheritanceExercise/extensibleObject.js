function extensibleObject() {
    return {
        extend(temp) {
            for (key in temp) {
                if (typeof temp[key] === 'function') {
                    Object.getPrototypeOf(this)[key] = temp[key];
                } else {
                    this[key] = temp[key];
                }
            }
        }
    }
}
const myObj = extensibleObject();
const temp = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(temp); 