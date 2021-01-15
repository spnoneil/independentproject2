$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    const q1 = parseInt($("input[name='q1']:checked")).val();
    alert("value is" + q1);
  })
})