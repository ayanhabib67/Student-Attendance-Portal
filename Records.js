
    


let save1 = JSON.parse(localStorage.getItem("Prasent"));    
let save2 = JSON.parse(localStorage.getItem("RollNumber"));  
let save4 = JSON.parse(localStorage.getItem("Date"));        

let div = document.getElementById("attendanceDisplay");

for (var i = 0; i < save1.length; i++) {
    div.innerHTML += `
        <div style="border: 1px solid #ccc; padding: 10px; margin: 10px;">
            <p><strong>Status:</strong> ${save1[i]}</p>
            <p><strong>Roll Number:</strong> ${save2[i]}</p>
            <p><strong>Date:</strong> ${save4[i]}</p>
        </div>
    `;
}





