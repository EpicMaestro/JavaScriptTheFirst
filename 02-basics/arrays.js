const marvel =["thor","hulk","ironman"]
const dc=["superman","flash","batman"]

marvel.push(dc)
console.log(marvel)

const marvel1 =["thor","hulk","ironman"]
marvel1.concat(dc)
console.log(marvel1)



const all_heros = marvel1.concat(dc)

const all_heros2= [...marvel1 , ...dc]

console.log(all_heros)
console.log(all_heros2)




const arr1 = [1,[2,3],[4,[5,6],7]]

const arr2 = arr1.flat(Infinity)

console.log(arr2)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({ name : "Hi"}))


let score1=100 , score2= 200 , score3= 1210

console.log(Array.of(score1 ,score2 , score3 ))