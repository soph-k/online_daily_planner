/////////////////////////////////////////////////////////////////////////
let currentDate = $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
let hourEl = $(".hour");
const saveButtonEl = $(".saveBtn");
let currentHour = parseInt(moment().hours());
let timeSave = $(this).parent().attr("id");
let descriptionSave = $(this).find(".description").val();

////////////////////////////////////////////////////////////////////////
function stylingTimes () {
  $("#currentDay").append(currentDate);

  hourEl.each(function () {
    const selectionHour = parseInt($(this).attr("id"));
    $(this).removeClass("past", "present", "future");
    if (selectionHour > currentHour) {
      $(this).addClass("future")
    }
    else if (selectionHour < currentHour) {
      $(this).addClass("past");
    }
    else {
      $(this).addClass("present");
    }
  })
}



function savedDescription() {
  var saveDate = JSON.parse(localStorage.getItem("savePlanner", descriptionSave));
  if (saveDate !== null) {
    $(".description").text(descriptionSave);
    $(".data-time").text(timeSave);
  }
}



function saveNotes (event) {
  event.preventDefault ();
  const saveEvents = {
    time: timeSave,
    description: descriptionSave
  }
  localStorage.setItem("saveDescription", `[]`);
  const oldEvents = JSON.parse(localStorage.getItem("saveDescription", saveEvents)) || [];
  oldEvents.push(saveEvents);

  localStorage.setItem("highScoresDB", JSON.stringify(oldEvents));

  console.log(oldEvents)
  // if (oldEvents !=null) {
  //   $(".description").text(descriptionSave);
  //   $(".data-time").text(timeSave);
  // }

  
}

saveButtonEl.click(saveNotes);

