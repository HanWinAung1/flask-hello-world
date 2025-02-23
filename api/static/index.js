window.onload = () => {
  $("#opencam").click(() => {
    console.log("evoked openCam");
    $.ajax({
      url: "/opencam",
      type: "GET",
      error: function (data) {
        console.log("upload error", data);
      },
      success: function (data) {
        console.log(data);
      }
    });
  })
};



function openCam(e){
  console.log("evoked openCam");
  e.preventDefault();
  console.log("evoked openCam");
  console.log(e);
}