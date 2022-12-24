let=[

    {id:1,  name:"john",  age :"18", profession:"developer"},
    {id:2,  name:"jack",  age :"20", profession:"developer"},
    {id:3,  name:"Karen",  age :"19", profession:"admin"},

];
arr.map(function(item){
    item.age =  Number(item.age);
})

array.forEach((item) => {
    if(item.name ==="john"){
        item.age=19;
    }
    
})
let result= document.getElementById("result");
let dropdown= document.getElementById("dropdown");
let btn= document.getElementById("filterbtn");

function filterbyProfession(){
    let dropdownValue= dropdown.value
console.log(dropdownValue);
if(dropdownValue=== "Profession"){
    alert("Please select a Profession");
    return;

}
arr.forEach((Item)=>{
    if(item.profession === dropdownValue){
        let div=document.createElement("div");
        div.innerText = item.id+" Name" + item.name+"  Profession"+ item.profession+"  Age"+item.Age;
        result.append("div");
    }
})
}
btn.addEventListener("click", filterbyProfession)