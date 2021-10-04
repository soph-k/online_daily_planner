//  _____      ______      __       ____       ____       _
// ||     \\   | _____|    //\\     | ___\\   / ____|    // \\
// ||      \\  ||__       //  \\    ||    || | |___    / /   \ \
// ||       || | __|     //____\\   ||___//   \ ____\ | |     | |
// ||      //  ||_____  //      \\  || \\     _____ || \ \   / /
// ||_____//   |______|//        \\ ||   \\  |_____ /    \\_//

// Author: Sophia Kiani
// Date: 09/16/2021
// Purpose: sophk_onlie_daily_calender

let currentDate = $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
let saveButtonEl = $("saveBtn");
let currentHour = moment().hours();


function stylingTimes () {
  currentDate
  $("#currentDay").append(currentDate);

  $(".hour").each(() => {
    let selectionHour = parseInt($(this).attr("data-hour"));
    if (selectionHour > currentHour) {
      $(this).addClass("future")
    }
    else if (selectionHour < currentHour) {
      $(this).addClass("present");
    }
    else {
      $(this).addClass("past");
    }
  })
}

saveButtonEl.on("click", function () {
    var timeSave = $(this).parent().attr("data-time");
    var descriptionSave = $(this).find(".description").val();
    localStorage.setItem(timeSave, descriptionSave);
});

stylingTimes ();



