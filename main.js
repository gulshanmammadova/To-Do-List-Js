let btn=document.querySelector('button');
let btngo=document.querySelector('a');
let upIcon=document.querySelector('i.up');
let downIcon=document.querySelector('i.down');
let inputPart=document.querySelector('.card-add-input');
let listPart=document.querySelector('.card-list');
let x=document.querySelector('.x');
let input=document.querySelector('input');
let span=document.querySelector('span.validation-span');
let ol=document.querySelector('ol');
let ols=document.querySelector('ol li span');

let id=document.querySelector('ul');
let deletebtn=document.querySelectorAll('.list i');
let li=document.querySelectorAll('ol li span');


let tasks=[];
let html='';
let count=1;
// bosluq
const deleteElement=(id)=>{
   console.log('deleetebutton isleyir'+id)
   ol.innerHTML='';
   zzzz.filter((x)=>{
console.log(x)

return x.id!=id;
   })
}


const clearInputValue=()=>{
    input.value=''
}
const goListPart=()=>{
    inputPart.classList.remove('d-none');
    listPart.classList.add('d-none');   
}
const filterAZ=()=>{
    let filter=[];
    let myArray =[...ol.children]
    ol.innerHTML=''
    for(let j=0;j<myArray.length;j++){
        filter.push(myArray[j].innerHTML); 
       
      
    }filter.sort().reverse();
    for(let j=0;j<filter.length;j++){
      
        myArray[j]=filter[j];
       
       ol.innerHTML+=myArray[j];

        //  console.log(filter[j])
        //  console.log()
               
    }
   
}
const filterZA=()=>{
    li.forEach(li=>{
        console.log(li)

    })

}

// upIcon.addEventListener('click',filterAZ)
// downIcon.addEventListener('click',filterZA)



// downIcon.addEventListener('click',filterZtoA)

class Task {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    rename(name) {
        this.name = name;
    }
}
class TasksList {
    constructor() {
        this.tasks = [];
        this.currentId = 0;
    }
    addTask(name) {
        const task = new Task(this.currentId, name);
        this.tasks.push(task);
        this.currentId++;
    }
    removeTask(id) {
        delete this.tasks[id];

    }
    renameTask(id, name) {
        let task = this.tasks.find((task) => {
            return task.id === id;
        });
        if (task) {
            task.rename(name);
        }
    }
    getAllTasksString() {
        let string = this.tasks.map((item) => {
            return item.name;
        });
        let join = string.join(';');
        console.log(join);

    }
}

// class Application {
//     constructor() {
//         this.list = new TasksList();
//     }
//     init() {
//         while (true) {
//             let value = prompt('Emrleri daxil edin: \n create \n rename \n remove');
//             if (value == null) {
//                 break;
//             }
//             let value1 = value.split(' ');
//             switch (value1[0]) {
//                 case 'create':
//                     this.
//                     break;
//                 case 'rename':
//                     this.list.renameTask(+value1[1], value1[2]);
//                     break;
//                 case 'remove':
//                     this.list.removeTask(+value1[1]);
//                     this.list.getAllTasksString();
//                     return;
//                 default:
//                     break;
//             }
//         }
//         this.list.getAllTasksString();
//     }
// }
let list = new TasksList();
const inputListChanger=(e)=>{
    let value=input.value;

    e.preventDefault();
       if(input.value  && input.value.length>=3){
        list.addTask(value[1]);
    [...ol.children].forEach(x=>{
        x.addEventListener('click',deleteElement)
    })
console.log(list)

       }
    else{
        // span.style.display='block';
    // console.log(span.innerHTML)
    }
    
    inputPart.classList.add('d-none');
    listPart.classList.remove('d-none'); 
    }

btngo.addEventListener('click',goListPart)
x.addEventListener('click',clearInputValue)
btn.addEventListener('click',inputListChanger)
