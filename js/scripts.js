$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let q1 = parseInt($("input[name='q1']:checked").val());
    let q2 = parseInt($("input[name='q2']:checked").val());

    alert("value = " + q1 + q2);
  });
});