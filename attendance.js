

    let studentName =document.getElementById("studentName")



    let firstName = JSON.parse(localStorage.getItem("fname"))
    let lastName = JSON.parse(localStorage.getItem("lname"));
    

    studentName.innerHTML =`${firstName} ${lastName}`.toUpperCase();



 let firstNameAttendence = document.getElementById("firstNameAttendence")
 let lastNameAttendence = document.getElementById("lastNameAttendence")
 
 firstNameAttendence.innerHTML =`<label for="last-name"> first Name</label><input type="text" id="firstNameAttendence" class="form-control" placeholder="${firstName}" disabled>`
 lastNameAttendence.innerHTML = `<label for="last-name"> first Name</label><input type="text" id="lastNameAttendence" class="form-control" placeholder="${lastName}" disabled>`
 
 
 
 let arr1 = [];
 let arr2 = [];
 let arr3 = [];
 
 function submit(){
    let present1 = document.getElementById("present1")
    let date = document.getElementById("date")
    let rollNumber =document.getElementById("rollNumber")

    if(present1.value=== "Select" || date.value === "" || rollNumber.value === "" ){
        Swal.fire({
            icon: 'warning',
            title: 'Empty Field!',
            text: 'Please fill all the fields.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        });
    } else {

        
        
        
        
        arr1.push(present1.value);
        arr2.push(rollNumber.value);
        arr3.push(date.value);
        
        localStorage.setItem("Prasent", JSON.stringify(arr1));
        localStorage.setItem("RollNumber", JSON.stringify(arr2));
        localStorage.setItem("Date", JSON.stringify(arr3));
        
    }

}





let save1 = localStorage.getItem("Prasent");
let save2 = localStorage.getItem("RollNumber");
let save3 = localStorage.getItem("Date");



if (save1 && save2 && save3) {
    arr1 = JSON.parse(save1);
    arr2 = JSON.parse(save2);
    arr3 = JSON.parse(save3);
} else {
    console.log("No saved data found.");
} 


function viewAttendance() {
    window.location.href = "Records.html"
}



 