import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { convertMs } from "/src/timeUtils";

const options = {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
onClose(selectedDates, dateStr, instance) {
   const selectedDate = selectedDates[0];

   if (!selectedDate) {
      return;
   }

   if (selectedDate <= new Date()) {
      alert("Please choose a date in the future");
      instance.clear();
      return;
   }

   const startButton = document.querySelector("[data-start]");
   startButton.disabled = false;
},
};

const picker = flatpickr("#datetime-picker", options);

const startButton = document.querySelector("[data-start]");
const datetimePicker = document.querySelector("#datetime-picker");
let countdownInterval;

startButton.addEventListener("click", () => {
const selectedDate = picker.selectedDates[0];

if (selectedDate) {
   startButton.disabled = true;
      datetimePicker.disabled = true;

   countdownInterval = setInterval(() => {
      const currentDate = new Date();
      const timeRemaining = selectedDate - currentDate;

      if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
         updateTimerUI({ days: 0, hours: 0, minutes: 0, seconds: 0 });
         datetimePicker.disabled = false;
      return;
      }

      const { days, hours, minutes, seconds } = convertMs(timeRemaining);
      updateTimerUI({ days, hours, minutes, seconds });
   }, 1000);
}
});

function updateTimerUI({ days, hours, minutes, seconds }) {
const daysSpan = document.querySelector("[data-days]");
const hoursSpan = document.querySelector("[data-hours]");
const minutesSpan = document.querySelector("[data-minutes]");
const secondsSpan = document.querySelector("[data-seconds]");

const formattedDays = days.toString().padStart(2, "0");
const formattedHours = hours.toString().padStart(2, "0");
const formattedMinutes = minutes.toString().padStart(2, "0");
const formattedSeconds = seconds.toString().padStart(2, "0");

daysSpan.textContent = formattedDays;
hoursSpan.textContent = formattedHours;
minutesSpan.textContent = formattedMinutes;
secondsSpan.textContent = formattedSeconds;
}