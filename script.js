const startDateInput = document.getElementById("start-date");
const startTimeInput = document.getElementById("start-time");
const endDateInput = document.getElementById("end-date");
const endTimeInput = document.getElementById("end-time");
const submitBtn = document.getElementById("submit");
const resultDisplay = document.getElementById("result");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const startDate = startDateInput.value;
  const startTime = startTimeInput.value;
  const endDate = endDateInput.value;
  const endTime = endTimeInput.value;

  const startTimestamp = new Date(`${startDate} ${startTime}`);
  const endTimestamp = new Date(`${endDate} ${endTime}`);
  const timeDifference = endTimestamp - startTimestamp;

  if (timeDifference < 0) {
    resultDisplay.innerHTML = "Time B should be <em>after</em> Time A";
  } else {
    resultDisplay.innerText = formatTime(timeDifference);
  }
});

function formatTime(milliseconds) {
  const time = milliseconds / 1000;
  const mins = Math.floor(time / 60) % 60;
  const hrs = Math.floor(time / 3600);

  return `${hrs} hrs, ${mins} minutes`;
}
