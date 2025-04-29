let fname =[]
let lname =[]
let emailUser =[]
let passwordUser =[]

function submit(){
    let firstName= document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    
    if(firstName.value=== "" || lastName.value === "" || email.value === "" || password.value ===""){

Swal.fire({
    icon: 'warning',
    title: 'Empty Field!',
    text: 'Please fill all the fields.',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
});

firstName.value =""
lastName.value =""
email.value =""
password.value=""
} else{
        
        
        
        fname.push(firstName.value)
        lname.push(lastName.value)
        emailUser.push(email.value)
        passwordUser.push(password.value)
        
        
        
        
        
        
        localStorage.setItem("fname", JSON.stringify(fname));
        localStorage.setItem("lname", JSON.stringify(lname));
        localStorage.setItem("emailUser", JSON.stringify(emailUser));
        localStorage.setItem("passwordUser", JSON.stringify(passwordUser));

        Swal.fire({
            icon: 'success',
            title: 'Account Created!',
            text: 'Your account has been created, please log in.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        });
        
        firstName.value =""
lastName.value =""
email.value =""
password.value=""
    }
    
}
    
    
    let save1 = localStorage.getItem("fname");
    let save2 = localStorage.getItem("lname");
    let save4 = localStorage.getItem("passwordUser");
    let save3 = localStorage.getItem("emailUser");
    
    
    if (save1 && save2 && save3 && save4) {
        fname = JSON.parse(save1);
        lname = JSON.parse(save2);
        emailUser = JSON.parse(save3);
        passwordUser = JSON.parse(save4);
    } else {
        console.log("No saved data found.");
    }
    
    
    
    
    
    
    
    
    
    