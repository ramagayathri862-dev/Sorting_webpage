// ================= BUBBLE SORT =================

function bubbleSort(arr){

    let a = [...arr];

    for(let i=0; i<a.length; i++){

        for(let j=0; j<a.length-i-1; j++){

            if(a[j] > a[j+1]){

                [a[j], a[j+1]] =
                [a[j+1], a[j]];
            }
        }
    }

    return a;
}

// ================= MERGE SORT =================

function mergeSort(arr){

    if(arr.length <= 1){

        return arr;
    }

    let mid = Math.floor(arr.length/2);

    let left =
        mergeSort(arr.slice(0,mid));

    let right =
        mergeSort(arr.slice(mid));

    let result = [];

    let i=0;
    let j=0;

    while(i<left.length &&
          j<right.length){

        if(left[i] < right[j]){

            result.push(left[i++]);

        }else{

            result.push(right[j++]);
        }
    }

    return result
        .concat(left.slice(i))
        .concat(right.slice(j));
}

// ================= SELECTION SORT =================

function selectionSort(arr){

    let a = [...arr];

    for(let i=0; i<a.length; i++){

        let min = i;

        for(let j=i+1; j<a.length; j++){

            if(a[j] < a[min]){

                min = j;
            }
        }

        [a[i], a[min]] =
        [a[min], a[i]];
    }

    return a;
}

// ================= INSERTION SORT =================

function insertionSort(arr){

    let a = [...arr];

    for(let i=1; i<a.length; i++){

        let key = a[i];

        let j = i - 1;

        while(j >= 0 &&
              a[j] > key){

            a[j+1] = a[j];

            j--;
        }

        a[j+1] = key;
    }

    return a;
}

// ================= QUICK SORT =================

function quickSort(arr){

    if(arr.length <= 1){

        return arr;
    }

    let pivot =
        arr[arr.length - 1];

    let left = [];

    let right = [];

    for(let i=0;
        i<arr.length-1;
        i++){

        if(arr[i] < pivot){

            left.push(arr[i]);

        }else{

            right.push(arr[i]);
        }
    }

    return [

        ...quickSort(left),

        pivot,

        ...quickSort(right)
    ];
}

// ================= COMPARE =================

function compare(){

    let input =
        document.getElementById(
            "numbers"
        ).value;

    let numbers = input
        .split(",")
        .map(x =>
            parseInt(x.trim())
        )
        .filter(x =>
            !isNaN(x)
        );

    if(numbers.length === 0){

        alert(
            "Please enter valid numbers"
        );

        return;
    }

    // Bubble Sort

    let start = performance.now();

    let bubble =
        bubbleSort([...numbers]);

    let bubbleTime =
        (performance.now() - start)
        .toFixed(4);

    // Merge Sort

    start = performance.now();

    let merge =
        mergeSort([...numbers]);

    let mergeTime =
        (performance.now() - start)
        .toFixed(4);

    // Selection Sort

    start = performance.now();

    let selection =
        selectionSort([...numbers]);

    let selectionTime =
        (performance.now() - start)
        .toFixed(4);

    // Insertion Sort

    start = performance.now();

    let insertion =
        insertionSort([...numbers]);

    let insertionTime =
        (performance.now() - start)
        .toFixed(4);

    // Quick Sort

    start = performance.now();

    let quick =
        quickSort([...numbers]);

    let quickTime =
        (performance.now() - start)
        .toFixed(4);

    // ================= DISPLAY =================

    document.getElementById(
        "bubbleResult"
    ).innerHTML =
        "Result: " + bubble;

    document.getElementById(
        "bubbleTime"
    ).innerHTML =
        "Time: " + bubbleTime + " ms";

    document.getElementById(
        "mergeResult"
    ).innerHTML =
        "Result: " + merge;

    document.getElementById(
        "mergeTime"
    ).innerHTML =
        "Time: " + mergeTime + " ms";

    document.getElementById(
        "selectionResult"
    ).innerHTML =
        "Result: " + selection;

    document.getElementById(
        "selectionTime"
    ).innerHTML =
        "Time: " + selectionTime + " ms";

    document.getElementById(
        "insertionResult"
    ).innerHTML =
        "Result: " + insertion;

    document.getElementById(
        "insertionTime"
    ).innerHTML =
        "Time: " + insertionTime + " ms";

    document.getElementById(
        "quickResult"
    ).innerHTML =
        "Result: " + quick;

    document.getElementById(
        "quickTime"
    ).innerHTML =
        "Time: " + quickTime + " ms";

    // ================= WINNER =================

    let times = {

        "Bubble Sort":
            parseFloat(bubbleTime),

        "Merge Sort":
            parseFloat(mergeTime),

        "Selection Sort":
            parseFloat(selectionTime),

        "Insertion Sort":
            parseFloat(insertionTime),

        "Quick Sort":
            parseFloat(quickTime)
    };

    let fastest =
        Object.keys(times)
        .reduce((a,b)=>

            times[a] <
            times[b]
            ? a : b
        );

    document.getElementById(
        "winner"
    ).innerHTML =

        "🚀 " +
        fastest +
        " is Faster";

    // SHOW RESULT

    document.getElementById(
        "formBox"
    ).style.display = "none";

    document.getElementById(
        "resultBox"
    ).style.display = "block";
}

// ================= RESET =================

function reset(){

    document.getElementById(
        "formBox"
    ).style.display = "block";

    document.getElementById(
        "resultBox"
    ).style.display = "none";

    document.getElementById(
        "numbers"
    ).value = "";
}