// map

// const arr = [1, 2, 3, 4, 5]
// const alphabet = ['f', 'a', 'c', 'A', 'v', 'b']

// const mapped = arr.map(el => el + 30)
// console.log(mapped)

// let names = ["Amartey", "Abdul", "Moses", "Gil", "Vue"]

// let lenOfMember = names.map(member => member.length)
// console.log(lenOfMember)

// filter

// const filter = names.filter(el => el === "Gil" || el === "vue")
// console.log(filter)


// let users = [
//     {id:1, name:"Gil"},
//     {id:2, name:"Abdul"},
//     {id:3, name:"Rose"}
// ]

// const filter = users.filter(user => user.id==3)
// console.log(filter)

// sort()
// const des = arr.sort((a, s) => a > s ? -1 : 1)
// console.log(des)

// const asc = alphabet.sort((a, b) => a > b ? 1 : -1)
// console.log(asc)

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// every()
// const greater = arr.every(el => el > 5 && el < 7)
// console.log(greater)

// some()
// const greater = arr.some(num => num <= 0)
// console.log(greater)

// join()
// const firstName = ['O', 'W', 'U', 'S', 'U']
// console.log(firstName.join(''))

// reduce()
const results = arr.reduce((total, initialvalue) => total + initialvalue)
console.log(results)