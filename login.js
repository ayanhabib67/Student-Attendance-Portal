



function submit(){
let emails = JSON.parse(localStorage.getItem("emailUser"));
let passwords = JSON.parse(localStorage.getItem("passwordUser"));

let userEmail =document.getElementById("userEmail").value
let userPassword =document.getElementById("userPassword").value
let login =document.getElementById("login")


for (var i = 0; i < emails.length; i++) {
 for(var j = 0 ; j < passwords.length ;j++){

     
     if (userEmail === emails[i] && userPassword ===passwords[j]) {
         window.location.href = "attendance.html"
          
        //  alert("Login successful!");
        Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'You have successfully logged in to the app.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        });
        
        //  login.innerHTML=`<a href="< attendance.html">Log in</a>`
     }else{
        // console.log("by");
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Wrong email or password.',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Try Again'
        });
        
        
     }
 }   
    
}


}
