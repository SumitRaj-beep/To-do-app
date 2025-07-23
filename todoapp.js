let todo=[];
let func=prompt("enter the function u want to perform"); //quit list add delete

while(true){
    if(func=="quit"){
        console.log("quitting app");
        break;
    }

    if(func=="list"){
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("listed");
    }

    else if(func=="add"){
        let task=prompt("enter what todo to add");
        todo.push(task);
        console.log("task added");
    }
    else if (func=="delete") {
      let idx=prompt("enter the index which u want to delete");
      todo.pop(idx);
      console.log("deleted");
    }
   
    else {
        console.log("invalid funtion request made");
    }

     func=prompt("enter the function u want to perform");
}