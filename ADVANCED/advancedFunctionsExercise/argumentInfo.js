function solve() {
    let obj = {};
    for(let arg of arguments){
        console.log(`${typeof(arg)}: ${arg}`);
        if(! obj[typeof(arg)]){
            obj[typeof(arg)] = 1;
        } else {
            obj[typeof(arg)]++;
        }
    }
 
    Object.keys(obj).sort((a, b) => obj[b] - obj[a]).forEach(k => console.log(`${k} = ${obj[k]}`))
}

solve('cat', 'plant', 42, [1, 2], function () { console.log('Hello world!'); });