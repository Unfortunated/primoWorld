"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection1, collection2, collection3) {
    const result = [];
    let i = 0;
    let j = 0;
    let k = collection3.length - 1;
    while (i < collection1.length || j < collection2.length || k >= 0) {
        // let col1 = 0;
        // let col2 = 0;
        // let col3 = 0;
        // if (i < collection1.length) {
        //   const col1 = collection1[i];
        // } else {
        //   const col1 = Number.POSITIVE_INFINITY;
        // }
        // if (j < collection2.length) {
        //   const col2 = collection2[j];
        // } else {
        //   const col2 = Number.POSITIVE_INFINITY;
        // }
        // if (k > 0) {
        //   const col3 = collection3[k];
        // } else {
        //   const col3 = Number.POSITIVE_INFINITY;
        // }
        let col1 = i < collection1.length ? collection1[i] : Number.POSITIVE_INFINITY;
        let col2 = j < collection2.length ? collection2[j] : Number.POSITIVE_INFINITY;
        let col3 = k >= 0 ? collection3[k] : Number.POSITIVE_INFINITY;
        if (col1 <= col2 && col1 <= col3) {
            result.push(col1);
            i++;
        }
        else if (col2 <= col1 && col2 <= col3) {
            result.push(col2);
            j++;
        }
        else {
            result.push(col3);
            k--;
        }
    }
    return result;
}
