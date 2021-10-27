/////////////////////////////// Global Selectors //////////////////////////////////////////
const currentDate = $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
const hourEl = $('.hour');
const rowHourEl = parseInt($('.row').data('hour'));
const rowHourElString = $('.row').attr('data-time');
const saveButtonEl = $(".saveBtn");
const currentHour = parseInt(moment().hours("HH"));
const descriptionEl = $('.container').find(('.description'));
const oldEvents = JSON.parse(localStorage.getItem("saved")) || [];


///////////////////////////////// Functions ////////////////////////////////////////////////
function stylingTimes() {
  $("#currentDay").append(currentDate);                        // Displays user current time and date.

  hourEl.each(function () {                                    // Loop for each hour element to add styling... 
    if (rowHourEl > currentHour) {                             // based on user's current time.
      $(this).addClass("future");
    }
    else if (rowHourEl < currentHour) {
      $(this).addClass("past");
    }
    else (rowHourEl == currentHour); {
      $(this).addClass("present");
    }
  });
}

// Saves items to local storage
function saveNotes() {
  const saveEvents = {
    time: rowHourElString,
    description: descriptionEl.val()
  }

  oldEvents.push(saveEvents);                                // Pushes in new event into old event
  localStorage.setItem('saved', JSON.stringify(oldEvents));  // Saves old and new events in a string

  if (localStorage.getItem("saved") !==null) {              
    displayReminders();
  }
}

// Retrives items from local storage and displays them
function displayReminders() {
  descriptionEl.text(
  oldEvents.map((saveEventsArray) => {                        // Map displays arrays from local storage
    return (saveEventsArray.description);
  }))
}

////////////////////////// Event Listeners ////////////////////////////////
saveButtonEl.click(saveNotes);


//////////////////////// Functions When Page Loaded //////////////////////
stylingTimes();
