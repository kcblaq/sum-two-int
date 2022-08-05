let arr = [2,4,7,10]
let target = 9
let serial = 0;
let current = arr[serial]
let final = []
const SumTwoInt = (arr, target) => {
    for (let index = 0; index < arr.length; index++) {
       for (const i of arr) {
        if(i + arr[index] === target){
            console.log(i, arr[index])
            final.push(i, arr[index])
        }
       }
    }
    let res = new Set(final)
    return [...res]

}
console.log(SumTwoInt([2,8,5,4,11], 19))
