"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
const collection_1 = [11, 33, 55, 77];
const collection_2 = [22, 44, 66, 88];
const collection_3 = [99, 77, 55, 33];
const result = (0, merge_1.merge)(collection_1, collection_2, collection_3);
console.log("Merged and Sorted Result:", result);
