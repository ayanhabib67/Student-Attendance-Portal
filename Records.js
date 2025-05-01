
    


let save1 = JSON.parse(localStorage.getItem("Prasent"));    
let save2 = JSON.parse(localStorage.getItem("RollNumber"));  
let save4 = JSON.parse(localStorage.getItem("Date"));   
let firstName = JSON.parse(localStorage.getItem("fname"))
let lastName = JSON.parse(localStorage.getItem("lname"));     

let div = document.getElementById("attendanceDisplay");

for (var i = 0; i < save1.length; i++) {
    
    attendanceDisplay.innerHTML += `
                        <div class="attendance-card ">
                            <span class="status-badge"></span>
                            <div class="record-row">
                                <div class="record-label">Student Name</div>
                                <div class="record-value"><i class="fas fa-user"></i> ${firstName} ${lastName}</div>
                            </div>
                            <div class="record-row">
                                <div class="record-label">Status</div>
                                <div class="record-value"><i class="fas fa-${save1[i] === 'present' ? 'check-circle' : save1[i] === 'absent' ? 'times-circle' : 'clock'}"></i> ${save1[i]}</div>
                            </div>
                            <div class="record-row">
                                <div class="record-label">Roll Number</div>
                                <div class="record-value"><i class="fas fa-id-card"></i> ${save2[i]}</div>
                            </div>
                            <div class="record-row">
                                <div class="record-label">Date</div>
                                <div class="record-value"><i class="fas fa-calendar-day"></i> ${save4[i]}</div>
                            </div>
                        </div>
                    `;
}








