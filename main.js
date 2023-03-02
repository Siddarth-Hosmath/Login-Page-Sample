let Id = (id) =>{
   return  document.getElementById(id);
}

let classes = (classes) => document.getElementsByClassName(classes);

let username = Id("username"),
    email = Id("email"),
    password = Id("password"),
    form =Id("form"),
    errorMsg = classes("err"), //creates an array
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");




form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // if(username.value ===''){
    //     errorMsg[0].innerHTML = "Username Cannot be Blank";
    //     failureIcon[0].style.opacity = '1';
    //     successIcon[0].style.opacity = '0';
    // }else{
    //     errorMsg[0].innerHTML = "";
    //     successIcon[0].style.opacity = '1';
    //     failureIcon[0].style.opacity = '0';
    // }

    // if(email.value ===''){
    //     errorMsg[1].innerHTML = "Email Address Cannot be Blank"
    //     failureIcon[1].style.opacity = '1';
    //     successIcon[1].style.opacity = '0';
    // }else{
    //     errorMsg[1].innerHTML = "";
    //     successIcon[1].style.opacity = '1';
    //     failureIcon[1].style.opacity = '0';
    // }
    // if(password.value ===''){
    //     errorMsg[2].innerHTML = "Password cannot be Blank"
    //     failureIcon[2].style.opacity = '1';
    //     successIcon[2].style.opacity = '0';
    // }else{
    //     errorMsg[2].innerHTML = "";
    //     successIcon[2].style.opacity = '1';
    //     failureIcon[2].style.opacity = '0';
    // }
    engine(username , 0 , "User Cannot be Blank");
    engine(email,1,"Email Cannot be Blank");
    engine(password,2,"Password Cannot be Blank");

});

let engine = (id,serial,message) => {
    if(id.value.trim() === ""){
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = '1';
        successIcon[serial].style.opacity = '0';
    }else{
        errorMsg[serial].innerHTML = "";
        failureIcon[serial].style.opacity = '0';
        successIcon[serial].style.opacity = '1';
    }
}

