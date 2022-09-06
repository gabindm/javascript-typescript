function mymap(a, f) {
    const result =[]
    for (item = 0; item < a.length; item++) {
        result.push(f(a[item]))
    }
    return result
}

console.log(mymap([1,2,3], x => x+1))
console.log(mymap([1,2,3], (x) => {return x+1}))
console.log(mymap([1,2,3], function maisum(x) {return x+1}))
