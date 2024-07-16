const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    valinput();

})
function valinput()
{
    const usernameval=username.value.trim();
    const emailval=email.value.trim();
    const passval=password.value.trim();
    const cpassval=cpassword.value.trim();
    if(usernameval=='')
    {
        setError(username,'username is required');
    }
    else 
    {
        setSuccess(username);
    }
    if(emailval=='')
    {
            setError(email,'Email is required');
    }
     else if(!validateEmail(emailval))
    {
        setError(email,'Please Enter a valid Email');
    }
    else 
    {
        setSuccess(email);
    }
    if(passval=='')
    {
        setError(password,'Password is required');
    }
    else if(passval.length<8)
    {
        setError(password,'Password must be 8 Characters');
    }
    else 
    {
        setSuccess(password);
    }
    if(cpassval=='')
    {
        setError(cpassword,'Confirm Password is required');
    }
    else if(cpassval!=passval)
    {
        setError(cpassword,'Password does not match');
    }
    else 
    {
        setSuccess(cpassword);
    }
}
function setError(element,message)
{
    const innerGroup=element.parentElement;
    const errorElement=innerGroup.querySelector('.err');
    errorElement.innerText=message;
    innerGroup.classList.add('err');
    innerGroup.classList.remove('success');
}
function setSuccess(element)
{
    const innerGroup=element.parentElement;
    const errorElement=innerGroup.querySelector('.err');
    errorElement.innerText='';
    innerGroup.classList.add('success');
    innerGroup.classList.remove('err');
}
const validateEmail= (email) =>{
    return String(email)
    .toLowerCase()
    .match(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    );
}