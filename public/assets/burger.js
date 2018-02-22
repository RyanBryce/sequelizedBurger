console.log("yo");

$("#addBurger").on("click", function (event) {
  event.preventDefault();
  $.ajax({
    url: "/api/burgers",
    method: "POST",
    data: {
      burger_name: $("#name").val().trim()
    }
  }).then(function (response) {
    console.log(response)
    window.location.reload()
  })
})