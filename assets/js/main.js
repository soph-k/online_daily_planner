/////////////////////////////// Global Selectors //////////////////////////////////////////
const currentDate = $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
const currentHour = moment().format("HH");


///////////////////////////////// Functions ////////////////////////////////////////////////
// Displays current date and adds styling
function stylingTimes() {
  $("#currentDay").append(currentDate);                            // Displays user current time and date.

  $('div').each(function () {                                     // Loop for each hour element to add styling... 
    const rowTime = $(this).data('time');
    if (rowTime > currentHour) {                                  // based on user's current time.
      $(this).addClass("future");
    }
    else if (rowTime < currentHour) {
      $(this).addClass("past");
    }
    else (rowTime == currentHour); {
      $(this).addClass("present");
    }
  });
}

// Saves items to local storage
$(".saveBtn").on('click', function () {
  let oldEvents = [];
  $('textarea').each(function () {
    oldEvents.push($(this).val());                                  // Pushes in new event into old event
  });                      
  localStorage.setItem("saved", JSON.stringify(oldEvents));         // Saves old and new events in a string
})

// Retrives items from local storage and displays them
function displayReminders() {
  oldEvents = JSON.parse(localStorage.getItem('saved'));           // Obtains string value from local storage
  $('textarea').each(function (index) {
    $(this).text(oldEvents[index])
  })
}


//////////////////////// Functions When Page Loaded //////////////////////
stylingTimes();
displayReminders();
