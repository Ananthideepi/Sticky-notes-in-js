const container=document.getElementById("container");
const button=document.getElementsByClassName("button")[0];

// ..................data get in local storage............................................
function storeddata(){
     return JSON.parse(localStorage.getItem("sticky"));
}
// ...................... for each function uused to id , content seperate.................................
storeddata().forEach(element => {
        // ...........sticky()used in this line ...............................
   const display=sticky(element.id,element.content);
//    .....data or display in container before add button...........
   container.insertBefore(display,button);
});
// .......create sticky............................
function sticky(id, content){
        const textarea=document.createElement("textarea");
        textarea.classList.add("sticky");
        textarea.value=content;
        textarea.placeholder="Enter your notes";
        textarea.addEventListener("change",()=>{
                updatenote(id, textarea.value);
        });
        textarea.addEventListener("dblclick",()=>{
                const check=confirm("delete the element");
                if(check){
                deletenote(id, textarea);
                }  
        })
     
        return textarea;

}
// ........................new sticky............................
 function newsticky(){
  
 const notes=storeddata();
 const object={
        id:Math.floor(Math.random()*10000),
        content:" "
       } 
//        console.log(object.id)
       const display=sticky(object.id,object.content);
//        console.log(display)
       //    .....data or display in container before add button...........
        container.insertBefore(display,button);
        // console.log(newone)
        notes.push(object);
        console.log(notes)
         setitem(notes);
 } 
//  button.addEventListener("cilck",() =>newsticky());
//  ...............................local storage get item...................

function setitem(notes){
        localStorage.setItem("sticky",JSON.stringify(notes));
}
// ..................update data..............................
  function updatenote(id,content){
        const notes=storeddata();
    notes.filter((item)=>{
        if(item.id===id){
          item.content=content;
        }
       });
         setitem(notes);
  }
// ......................delete data................................  
function deletenote(id,element){
      var notes=storeddata();
 notes=notes.filter((item)=>{
        if(item.id !=id){ 
         return item;
        }
       });
       console.log(notes)
       setitem(notes);
    container.removeChild(element)   
  }