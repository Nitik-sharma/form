const button=document.getElementById('btn');
const email=document.getElementById('exampleInputEmail1');
const valid=document.getElementById('valid');
const msg=document.getElementById('msg-error');



button.addEventListener('click',(e)=>{
    e.preventDefault();
    validation();
});


function validation(){
    const emailValue=email.value.trim();

    if(emailValue===''||emailValue===null){
        msg.innerHTML="valid email requried ";
        email.style.border='1px solid red';
       
    }else if(!isEmail(emailValue)){
        msg.innerHTML="valid email requried ";
        email.style.border='1px solid red';
    }else{
        window.open("http://127.0.0.1:5500/conform.html","_self");
    }
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// button.addEventListener('click',(e)=>{
//     e.preventDefault();

//     validation();
// });

// function validation(){
//     let emailValue=email.value.trim();
//     if(emailValue===''||emailValue==null){
//        msg.innerHTML='valid email requried';
//       email.style.color='red';
//       email.style.border='1px solid red';
     
      
      
//     }else if(!isEmail(emailValue)){
//         msg.innerHTML='valid email requried';
//         email.style.color='red';
//         email.style.border='1px solid red';
        
//     }else{
//         window.open("http://127.0.0.1:5500/conform.html","self");
        
//     }
// }

