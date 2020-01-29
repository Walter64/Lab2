import{TodoInterface} from './interface';

class Todo implements TodoInterface {

    myTaskArray:Array<string> = [];

    addTask(task: string):number{
        this.myTaskArray.push(task);
        console.log("Item " + task + " has been added to the array");
        return this.myTaskArray.length;
    }

    listAllItems():void{        
       console.log("List of items in the array is ::");
       this.myTaskArray.forEach(function(item){
       console.log(item);
        });
    }

    deleteTask(task:string):number{
        let index:number;    
        index = this.myTaskArray.indexOf(task);
        if(index > -1){
            this.myTaskArray.splice(index, 1);
            console.log("Item " + task + " has been deleted from the array");
        }
        else{
            console.log("Item "+ task + " is not in the array");
        }    
        return this.myTaskArray.length;    
    }
}

let todo1 = new Todo();
todo1.addTask("part A");
todo1.listAllItems();
todo1.deleteTask("part 2");