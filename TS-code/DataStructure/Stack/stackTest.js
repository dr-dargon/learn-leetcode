"use strict";
exports.__esModule = true;
var ds_1 = require("./ds");
var stackTestDS = new ds_1.StackDataStruct();
var data = [1, 3, 5, 8, 11, 2, 3, 7, 9];
data.forEach(function (ele) { return stackTestDS.push(ele); });
stackTestDS.pop();
stackTestDS.show();
