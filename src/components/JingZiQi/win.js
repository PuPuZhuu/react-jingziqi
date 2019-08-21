let allwin = [];

function getCount(x, y) {
    let countTemp = 0, ym = y - 4, xm = x - 4;

    for (let i = 0; i < x; i++) {
        allwin[i] = [];
        for (let j = 0; j < y; j++) {
            allwin[i][j] = [];
        }
    }

    for (i = 0; i < y; i++) {
        for (j = 0; j < xm; j++) {
            for (let k = 0; k < 5; k++) {
                allwin[j + k][i][countTemp] = true;
            }
            countTemp++;
        }
    }

    //纵线
    for (i = 0; i < x; i++) {
        for (j = 0; j < ym; j++) {
            for (k = 0; k < 5; k++) {
                allwin[i][j + k][countTemp] = true;
            }
            countTemp++;
        }
    }
    //正斜线
    for (i = 0; i < xm; i++) {
        for (j = 0; j < ym; j++) {
            for (k = 0; k < 5; k++) {
                allwin[i + k][j + k][countTemp] = true;
            }
            countTemp++;
        }
    }
    //反斜线
    for (i = 0; i < xm; i++) {
        for (j = 0; j < ym; j++) {
            for (k = 0; k < 5; k++) {
                allwin[i + k][j + k][countTemp] = true;
            }
            countTemp++;
        }
    }
    return countTemp;
}

var count = getCount(5, 5);
console.log(count);
console.log(allwin);