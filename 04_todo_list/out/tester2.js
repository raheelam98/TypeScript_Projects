var myArray = [
    {
        id: 1,
        car: "Ford"
    },
    {
        id: 2,
        car: "Honda"
    }
];
var objToOverwrite = {
    id: 1,
    car: "Bentley" // to overwrite car: "Ford"
};
var objToPush = {
    id: 3,
    car: "Toyota"
};
function pushToArray(arr, obj) {
    var existingIds = arr.map((obj) => obj.id);
    if (!existingIds.includes(obj.id)) {
        arr.push(obj);
    }
    else {
        arr.forEach((element, index) => {
            if (element.id === obj.id) {
                arr[index] = obj;
            }
            ;
        });
    }
    ;
}
;
pushToArray(myArray, objToPush);
console.log(myArray);
export {};
