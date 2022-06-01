"use strict";
exports.__esModule = true;
var ds_1 = require("./ds");
var a = new ds_1.LinkListDataStruct();
a.append(7);
a.append(17);
a.append(14);
a.append(5);
a.append(2);
a.append(1);
a.show();
// a.insert(3, 8)
// console.log(a.removeAt(3))
a.remove(20);
console.log("========");
a.show();
console.log(a.indexOf(17));
console.log(a.indexOf(20));
