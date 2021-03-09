'use strict';

let stdArray=[];
let stdHeaderArray=['ID','Name','Email','Mobile','Age','Tuition'];
let totalTuition=0;
let table=document.getElementById('table1');
let form=document.getElementById('form');
let total= document.getElementById('total');

function student(stdEmail,stdMobile,stdTuition){
    this.stdEmail=stdEmail;
    this.stdMobile=stdMobile;
    this.stdTuition=stdTuition;
    this.name="";
    this.age=0;
    this.ID=1;
    stdArray.push(this);

}
function calcTotalTuition(){
    for(let i =0 ; i<stdArray.length;i++){
    
    totalTuition =stdArray[i].stdTuition ;
      
    }
    return totalTuition;

}
student.prototype.generateStdID=function(){
 for(let i =1; i<stdArray.length;i++){
   this.ID;

 }

}

student.prototype.generateRandomAge=function(){
    this.age= Math.floor(Math.random() * (24 - 18) ) + 18;

}

student.prototype.generateNameFromEmail=function(){
  let email=  this.stdEmail;
  this.name=email.substring(0, email.indexOf("@"))
}

function creatTableHeader(){
    let tableRow= document.createElement('tr');
    table1.appendChild(tableRow);
    for(let i =0 ;i <stdHeaderArray.length;i++){
        let tableHeader=document.createElement('th');
        tableRow.appendChild(tableHeader);
        tableHeader.textContent=stdHeaderArray[i];
    }
    
}

creatTableHeader();
getStd();


function render(){
    for(let i=0;i<stdArray.length;i++){
        let rowEl=document.createElement('tr');
        table1.appendChild(rowEl);

        let idEl= document.createElement('td');
        rowEl.appendChild(idEl);
        idEl.textContent=stdArray[i].ID;

        let nameEl= document.createElement('td');
        rowEl.appendChild(nameEl);
        nameEl.textContent=stdArray[i].name;

        let emailEl= document.createElement('td');
        rowEl.appendChild(emailEl);
        emailEl.textContent=stdArray[i].stdEmail;

        
        let mobilEl= document.createElement('td');
        rowEl.appendChild(mobilEl);
        mobilEl.textContent=stdArray[i].stdMobile;

        let ageEl=document.createElement('td');
        rowEl.appendChild(ageEl);
        ageEl.textContent=stdArray[i].age;

        let tuitionEl=document.createElement('td');
        rowEl.appendChild(tuitionEl);
        tuitionEl.textContent=stdArray[i].stdTuition;


    }

}

form.addEventListener('submit',addNewStd)

function addNewStd(event){
    event.preventDefault();
    table1.textContent='';
    creatTableHeader();

    let email= event.target.stdMail.value;
    let mobile=event.target.stdMobile.value;
    let tuition=event.target.stdTuition.value;

    let addStd= new student(email,mobile,tuition);
    // addStd.generateStdID();
    addStd.generateNameFromEmail();
    addStd.generateRandomAge();
    
    render();
   saveStd();
   calcTotalTuition();
   total.textContent='Total :'+totalTuition;


}
calcTotalTuition();
   total.textContent='Total :'+totalTuition;

function saveStd(){
    localStorage.setItem('std',JSON.stringify(stdArray));
}

function getStd(){
    let get = localStorage.getItem('std');
    if(get){
        totalTuition=0;
        stdArray=JSON.parse(localStorage.getItem('std'));

    }
    render();
}
