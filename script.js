// Bubble Sort
function bubbleSort(arr){
    let a = [...arr];
    let n = a.length;

    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(a[j] > a[j+1]){
                [a[j], a[j+1]] = [a[j+1], a[j]];
            }
        }
    }
    return a;
}

// Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));

    let result = [];
    let i=0, j=0;

    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Compare
function compare(){
    let input = document.getElementById("numbers").value;

    let numbers = input.split(",").map(x => parseInt(x.trim()));

    let arr1 = [...numbers];
    let arr2 = [...numbers];

    let start = performance.now();
    let bubble = bubbleSort(arr1);
    let bubbleTime = (performance.now() - start).toFixed(4);

    start = performance.now();
    let merge = mergeSort(arr2);
    let mergeTime = (performance.now() - start).toFixed(4);

    document.getElementById("bubbleResult").innerHTML = "Result: " + bubble;
    document.getElementById("bubbleTime").innerHTML = "Time: " + bubbleTime + " ms";

    document.getElementById("mergeResult").innerHTML = "Result: " + merge;
    document.getElementById("mergeTime").innerHTML = "Time: " + mergeTime + " ms";

    document.getElementById("winner").innerHTML =
        bubbleTime < mergeTime
        ? "🚀 Bubble Sort is Faster"
        : "🚀 Merge Sort is Faster";

    document.getElementById("formBox").style.display = "none";
    document.getElementById("resultBox").style.display = "block";
}

// Reset
function reset(){
    document.getElementById("formBox").style.display = "block";
    document.getElementById("resultBox").style.display = "none";
}