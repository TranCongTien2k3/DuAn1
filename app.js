const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link"),
      name1=document.getElementById('name'),
      password=doc.getElementById('password'),
      form=document.getElementById('form'),
      errorElement=document.getElementById('error')
      ;

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
    form.addEventListener('submit',(e)=>{
        let message=[]
        if(name1.value===''||name1.value==null){
            message.push('Name is required')
        }
        if(password.value.length<=6){
            message.push('Password must be longer than 6 characters')
        }
        if(password.value.length>=20){
            message.push('Password must be less than 20 characters')
        }
        if(password.value==='password'){
            message.push('Password cannot be password')
        }
        if(message.length>0){
            e.preventDefault()
            errorElement.innerText=message.join(', ')
        }
    })
