/////////////////////////////////////////////////////////////////////////
let currentDate = $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
let hourEl = $(".hour");
const saveButtonEl = $(".saveBtn");
let currentHour = moment().format("HH");


////////////////////////////////////////////////////////////////////////
function stylingTimes () {
  $("#currentDay").append(currentDate);

  hourEl.each( function() {
    let selectionHour = parseInt($(this).attr(".data-time"));
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


///////////////////////////////////////////////////////////////////////
saveButtonEl.on("click", function () {
    var timeSave = $(this).parent().attr(".data-time");
    var descriptionSave = $(this).find(".description").val();
    localStorage.setItem(".savePlanner", JSON.stringify(timeSave, descriptionSave));
    // renderDescription ();
});


// function renderDescription() {
//   var saveDate = JSON.parse(localStorage.getItem("savePlanner"));
//   if (saveDate !== null) {
//     $(".description").textContent = descriptionSave;
//     $(".data-time").textContent = timeSave;
//   }
// }

stylingTimes ();
