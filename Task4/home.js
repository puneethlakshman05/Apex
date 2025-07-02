


const handleSubmit = (e)=>{

    e.preventDefault();
    console.log(e.target.value)
const userName=document.getElementById("name").value;
const userEmail=document.getElementById("email").value;
const userMessage = document.getElementById("message").value;
console.log(userName);
console.log(userEmail);
console.log(userMessage);

const error=document.getElementById("err");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

if(!userName || !userEmail || !userMessage){
 error.innerHTML = `<p style="color:red;">Please enter all input fields!!</p>`;
    return;
}
else if (!emailRegex.test(userEmail)){
 error.innerHTML = `<p style="color:red;"> Enter the correct format of email address!!</p>`;

}
else{
  error.innerHTML = `<p style="color:green;">Form submitted successfully!</p>`;
  alert("Form submitted successfully!!")
}
document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("message").value="";
}
const mybtn=document.getElementById("btn");
mybtn.addEventListener("click",handleSubmit);

