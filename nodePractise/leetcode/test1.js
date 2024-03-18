// let interval = [[1, 4], [4, 5]]

// [[1, 3], [2, 6], [8, 10], [15, 18]]
let interval = [[1,4],[0,0], [2,5]]


var temp = [];
const intervals = interval.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < intervals.length; i = i + 1) {

    let currStart = intervals[i][0];
    let currEnd = intervals[i][1];

    let nextStart = (i < intervals.length - 1) ? intervals[i + 1][0] : null;
    let nextEnd = (i < intervals.length - 1) ? intervals[i + 1][1] : null;


    //   console.log('curr', currStart, currEnd)
    //   console.log('next ', nextStart, nextEnd)

    if (currEnd > (nextStart) || currEnd == nextStart) {
        temp.push([currStart, nextEnd || currEnd])
    }
    else {
        let a = temp&& temp.length 
        let b = temp[a-1]
        if(b&& b[1]< currEnd)
        temp.push([currStart, currEnd])
    }


}


console.log(temp)
