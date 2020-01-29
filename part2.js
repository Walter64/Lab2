var myTaskArray = [];
function addTask(task) {
    myTaskArray.push(task);
    console.log("Item " + task + " has been added to the array");
    return myTaskArray.length;
}
addTask("Complete Part A");
var itemsInArray = addTask("Complete Part B");
console.log("Number of Items in Array " + itemsInArray);
// part C
function listAllTasks() {
    /*
    for(let i=0; i<myTaskArray.length; i++){
        console
    }
    */
    console.log("List of items in the array is ::");
    myTaskArray.forEach(function (item) {
        console.log(item);
    });
}
addTask("Create function");
addTask("Second Task");
addTask("Third Task");
listAllTasks();
/* part D
Create a deleteTask function:
i. It receives a string as a parameter called task.
ii. It removes that string from the array.
iii. It prints in console a message indicating the deletion.
iv. It returns the number of elements in the array after the deletion
*/
function deleteTask(task) {
    var index;
    index = myTaskArray.indexOf(task);
    if (index > -1) {
        myTaskArray.splice(index, 1);
        console.log("Item " + task + " has been deleted from the array");
    }
    else {
        console.log("Item " + task + " is not in the array");
    }
    return myTaskArray.length;
}
listAllTasks();
var count = deleteTask("Third Task");
console.log("Number of Items in array is " + count);
console.log("After Delete " + myTaskArray.length);
