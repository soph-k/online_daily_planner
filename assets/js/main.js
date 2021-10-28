/////////////////////////////// Global Selectors //////////////////////////////////////////
const currentDate = $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
const rowHourEl = $('.row').data('time');
const rowHourElString = $('.row').find('data-time');
const saveButtonEl = $(".saveBtn");
const currentHour = moment().hours("HH");
const descriptionEl = $('.container').find(('.description'));
const oldEvents = JSON.parse(localStorage.getItem("saved")) || [];


///////////////////////////////// Functions ////////////////////////////////////////////////
// Displays current date and adds styling
function stylingTimes() {
  $("#currentDay").append(currentDate);                       // Displays user current time and date.

  $('div').each(function () {                                // Loop for each hour element to add styling... 
    const rowTime = $(this).data('time');
    if (rowTime < currentHour) {                             // based on user's current time.
      $(this).addClass("future");
    }
    else if (rowTime > currentHour) {
      $(this).addClass("past");
    }
    else (rowTime == currentHour); {
      $(this).addClass("present");
    }
  });
  displayReminders();

}

// Saves items to local storage
function saveNotes() {
  $('textarea').each(() => {
    const newNotes = $(this).val();
    oldEvents.push(newNotes);                                     // Pushes in new event into old event
  });                      
  localStorage.setItem("saved", JSON.stringify(oldEvents));  // Saves old and new events in a string
  displayReminders();
}

// Retrives items from local storage and displays them
function displayReminders() {
  $('textarea').each((saved) => {
    $(this).text(saved.oldEvents)
  })
}


////////////////////////// Event Listeners ////////////////////////////////
saveButtonEl.click(saveNotes);


//////////////////////// Functions When Page Loaded //////////////////////
stylingTimes();
displayReminders();
