let todo = [];
let request = prompt("Please Enter Your Request 😄");
while(true){
    if(request == "quit"){
        console.log("quitting App 😢");
        break;
    }
    if(request == "list"){
        console.log("-------------**--------------");
    //    for(let i =0;i<todo.length;i++){
    //     console.log(i,todo[i]);
    //    }
    for(tasks of todo){
        console.log(tasks);
    }
        console.log("-------------**--------------");
    }else if(request == "add"){
    let task =  prompt("Enter task which you added in list");
        todo.push(task);
        console.log("task added");
    }else if(request == "delete"){
        let idx = prompt("please Enter the task index");
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("😢😢");
    } 
    request = prompt("Please Enter your request 😕");
}


