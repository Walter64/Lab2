export interface TodoInterface {
    addTask(task: string):number;
    listAllItems(): void;
    deleteTask(task:string):number;
    myTaskArray: Array<string>;

}