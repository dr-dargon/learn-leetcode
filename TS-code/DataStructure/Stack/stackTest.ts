import { StackDataStruct } from './ds';

let stackTestDS = new StackDataStruct()
let data = [1, 3, 5, 8, 11, 2, 3, 7, 9]
data.forEach(ele => stackTestDS.push(ele))

stackTestDS.pop()
stackTestDS.show()