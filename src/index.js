// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == null) {
        return [];
    }
    let count = matrix.length;
    let arr = [];
    for (let i = 0; i < count; i++) {
        if (i % 2 == 0) {
            matrix[i].sort((a, b) => {
                if (a < b) return -1;
                if (a == b) return 0;
                if (a > b) return 1;
            });
        } else {
            matrix[i].sort((a, b) => {
                if (a < b) return 1;
                if (a == b) return 0;
                if (a > b) return -1;
            });
        }
        for (let item of matrix[i]) arr.push(item);
    }
    return arr;
};
