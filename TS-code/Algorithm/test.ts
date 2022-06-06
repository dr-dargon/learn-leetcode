import { Queue } from "./BM-42.Queue";

let a = new Queue()
a.push(1)
a.push(2)
a.push(3)
a.push(4)
a.push(5)
console.log(a.pop())
console.log(a.pop())
a.push(7)
a.push(6)
a.show()