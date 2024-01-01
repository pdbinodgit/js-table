const firstname=document.getElementById('first-name');
const lastname=document.getElementById('last-name');
const email=document.getElementById('username');
const password=document.getElementById('password');

// const message=document.getElementById('message');


const form=document.getElementById('form');



const handleSubmit=()=>{
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
    });
    let messageReutrn=[];
    messageReutrn.push(firstname.value);
    messageReutrn.push(lastname.value);
    messageReutrn.push(email.value);
    messageReutrn.push(password.value);
    console.log(messageReutrn);
    // message.innerText="Your information is "+messageReutrn;

    //this code for table 
    var tr=document.createElement('tr');
    var td1=tr.appendChild(document.createElement('td'));
    var td2=tr.appendChild(document.createElement('td'));
    var td3=tr.appendChild(document.createElement('td'));
    var td4=tr.appendChild(document.createElement('td'));
    td1.innerHTML=firstname.value;
    td2.innerHTML=lastname.value;
    td3.innerHTML=email.value;
    td4.innerHTML=password.value;
    console.log("(****"+td1);
    if(firstname.value==''||firstname.value==''||lastname.value==''||email.value==''||password.value==''){
        console.log("here.........")
        alert("All field are required.")
    }else{
    document.getElementById('tableInfo').appendChild(tr);
    
    

    firstname.value='';
    lastname.value='';
    email.value='';
    password.value='';
    }
}