

//coding for the add participants button
let participants = 1;

const add_button = document.getElementById("add");

add_button.addEventListener("click", function() {
    participants++;
    const newParticipant = participantTemplate(participants)
    document.getElementById("inserted_HTML_container").insertAdjacentHTML("beforeend", newParticipant);
});

function participantTemplate(count) {
    return `<section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname" type="text" name="fname" value="" required="">
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity" type="text" name="activity">
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee" type="number" name="fee">
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date" type="date" name="date">
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected="" value="" disabled=""></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>`;
}


//Coding for the submit button
const submit_button = document.getElementById("submitButton");

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    // Sum up the values, making sure to convert each value to a number
    const total = feeElements.reduce((accumulator, currentValue) => {
        const fee = parseFloat(currentValue.value) || 0; // Use parseFloat to ensure it's a number
        return accumulator + fee;
    }, 0);
    return total;}

submit_button.addEventListener("click", function(event) {
    event.preventDefault();
    const adultName = document.getElementById("adult_name").value;
    const totalCost = totalFees();
    document.getElementById("myForm").style.display = "none";
    document.getElementById("summary").textContent = (`Thank you ${adultName}\n for registering. You have registered ${participants}\n participants and owe $${totalCost} in fees.`);
});


