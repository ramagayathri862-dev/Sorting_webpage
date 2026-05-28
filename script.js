let allSteps = {};

// ================= RESTORE RESULT PAGE =================

window.onload = function(){

    let saved =
        sessionStorage.getItem(
            "savedResults"
        );

    if(saved){

        document.getElementById(
            "formBox"
        ).style.display = "none";

        document.getElementById(
            "resultBox"
        ).style.display = "block";

        document.getElementById(
            "resultBox"
        ).innerHTML = saved;
    }
};

// ================= BUBBLE SORT =================

function bubbleSort(arr){

    let a = [...arr];

    let steps = [];

    steps.push([...a]);

    for(let i=0; i<a.length; i++){

        for(let j=0; j<a.length-i-1; j++){

            if(a[j] > a[j+1]){

                [a[j], a[j+1]] =
                [a[j+1], a[j]];

                steps.push([...a]);
            }
        }
    }

    return {
        sorted:a,
        steps:steps
    };
}

// ================= MERGE SORT =================

function mergeSort(arr){

    let steps = [];

    function merge(a){

        if(a.length <= 1){

            return a;
        }

        let mid =
            Math.floor(a.length/2);

        let left =
            merge(a.slice(0,mid));

        let right =
            merge(a.slice(mid));

        let result = [];

        while(left.length &&
              right.length){

            if(left[0] < right[0]){

                result.push(left.shift());

            }else{

                result.push(right.shift());
            }
        }

        let merged =
            [...result,...left,...right];

        steps.push([...merged]);

        return merged;
    }

    return {
        sorted:merge(arr),
        steps:steps
    };
}

// ================= SELECTION SORT =================

function selectionSort(arr){

    let a = [...arr];

    let steps = [];

    steps.push([...a]);

    for(let i=0; i<a.length; i++){

        let min = i;

        for(let j=i+1; j<a.length; j++){

            if(a[j] < a[min]){

                min = j;
            }
        }

        [a[i], a[min]] =
        [a[min], a[i]];

        steps.push([...a]);
    }

    return {
        sorted:a,
        steps:steps
    };
}

// ================= INSERTION SORT =================

function insertionSort(arr){

    let a = [...arr];

    let steps = [];

    steps.push([...a]);

    for(let i=1; i<a.length; i++){

        let key = a[i];

        let j = i - 1;

        while(j >= 0 &&
              a[j] > key){

            a[j+1] = a[j];

            j--;
        }

        a[j+1] = key;

        steps.push([...a]);
    }

    return {
        sorted:a,
        steps:steps
    };
}

// ================= QUICK SORT =================

function quickSort(arr){

    let steps = [];

    function quick(a){

        if(a.length <= 1){

            return a;
        }

        let pivot =
            a[a.length-1];

        let left = [];

        let right = [];

        for(let i=0;
            i<a.length-1;
            i++){

            if(a[i] < pivot){

                left.push(a[i]);

            }else{

                right.push(a[i]);
            }
        }

        let result = [

            ...quick(left),

            pivot,

            ...quick(right)
        ];

        steps.push([...result]);

        return result;
    }

    return {
        sorted:quick(arr),
        steps:steps
    };
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

    // ================= BUBBLE =================

    let start = performance.now();

    let bubbleData =
        bubbleSort([...numbers]);

    let bubble =
        bubbleData.sorted;

    let bubbleTime =
        (performance.now() - start)
        .toFixed(4);

    allSteps["Bubble Sort"] =
        bubbleData.steps;

    // ================= MERGE =================

    start = performance.now();

    let mergeData =
        mergeSort([...numbers]);

    let merge =
        mergeData.sorted;

    let mergeTime =
        (performance.now() - start)
        .toFixed(4);

    allSteps["Merge Sort"] =
        mergeData.steps;

    // ================= SELECTION =================

    start = performance.now();

    let selectionData =
        selectionSort([...numbers]);

    let selection =
        selectionData.sorted;

    let selectionTime =
        (performance.now() - start)
        .toFixed(4);

    allSteps["Selection Sort"] =
        selectionData.steps;

    // ================= INSERTION =================

    start = performance.now();

    let insertionData =
        insertionSort([...numbers]);

    let insertion =
        insertionData.sorted;

    let insertionTime =
        (performance.now() - start)
        .toFixed(4);

    allSteps["Insertion Sort"] =
        insertionData.steps;

    // ================= QUICK =================

    start = performance.now();

    let quickData =
        quickSort([...numbers]);

    let quick =
        quickData.sorted;

    let quickTime =
        (performance.now() - start)
        .toFixed(4);

    allSteps["Quick Sort"] =
        quickData.steps;

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

    // ================= SAVE =================

    sessionStorage.setItem(
        "savedResults",
        document.getElementById(
            "resultBox"
        ).innerHTML
    );

    sessionStorage.setItem(
        "allSteps",
        JSON.stringify(allSteps)
    );

    // ================= SHOW RESULT =================

    document.getElementById(
        "formBox"
    ).style.display = "none";

    document.getElementById(
        "resultBox"
    ).style.display = "block";
}

// ================= SHOW DETAILS =================

function showDetails(sortName){

    let savedSteps =
        JSON.parse(
            sessionStorage.getItem(
                "allSteps"
            )
        );

    sessionStorage.setItem(
        "sortName",
        sortName
    );

    sessionStorage.setItem(
        "steps",
        JSON.stringify(
            savedSteps[sortName]
        )
    );

    window.location.href =
        "details.html";
}

// ================= RESET =================

function reset(){

    sessionStorage.clear();

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