let hoursInput = document.getElementById('hoursInput');
let minutesInput = document.getElementById('minutesInput');
let timeInSeconds  = document.getElementById('timeInSeconds');
let errorMsg = document.getElementById('errorMsg');
let convertBtn = document.getElementById('convertBtn');

function convertToSeconds(){
    let hours = hoursInput.value;
    let minutes = minutesInput.value;
    if(hours === ''){
        errorMsg.textContent = "Please Enter valid number of Hours";
        timeInSeconds.textContent = '';
    }
    else if (minutes === ''){
        errorMsg.textContent = "Please Enter valid number of Minutes";
        timeInSeconds.textContent = '';
    }else{
        errorMsg.textContent = '';
        hours = parseInt(hours);
        minutes = parseInt(minutes);
        timeInSeconds.textContent = hours*3600 + minutes*60 + " seconds";
        
    }
    
}

convertBtn.addEventListener("click", convertToSeconds);
