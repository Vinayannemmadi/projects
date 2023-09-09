const passd=document.getElementById("password");
const messg=document.getElementById("message");
const streng=document.getElementById("strength");
const btnvalue=document.querySelector("button");


passd.addEventListener("input",function(){
    const pass=passd.value;
    const passlen=pass.length;
    let strengthval='';
    if(passlen === 0)
    {
        strengthval='';
    }
    else if(passlen <6){
        strengthval='Weak'
    }
    else if(passlen<10)
    {
        strengthval='Medium'
    }
    else{
        strengthval='Hard'
    }

    streng.textContent=strengthval;
    message.style.display="block"
});

btnvalue.addEventListener("click",function(){
    const passtype=passd.getAttribute("type");
    if(passtype === 'password'){
        passd.setAttribute("type","text")
    }
    else{
        passd.setAttribute("type","password")
    }
});


