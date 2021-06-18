// When form is submitted.
$("#register").on("submit", function(e)
{
  // prevent form from submitting
  e.preventDefault();

  // Serialize form data.
  var details = $("#register").serialize();

  // use $.post() to send it.
  $.post('.register.php', details, function(data)
  {
    $("#register").html(data);
  });
});
