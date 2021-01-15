$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const q1 = parseInt($("input[name='q1']:checked").val(), 10);
    const q2 = parseInt($("input[name='q2']:checked").val(), 10);
    const q3 = parseInt($("input[name='q3']:checked").val(), 10);
    const q4 = parseInt($("input[name='q4']:checked").val(), 10);
    const q5 = parseInt($("input[name='q5']:checked").val(), 10);
    const q6 = parseInt($("input[name='q6']:checked").val(), 10);
    const q7 = parseInt($("input[name='q7']:checked").val(), 10);

    const result = (q1 + q2 + q3 + q4 + q5 + q6 + q7);

    if (result <= 12) {
      $("#answer1, #form1, #back").toggle();
    } else if (result > 12 && result < 19) {
      $("#answer2, #form1, #back").toggle();
    } else if (result >= 19 && result < 24) {
      $("#answer3, #form1, #back").toggle();
    } else if (result >= 24) {
      $("#answer4, #form1, #back").toggle();
    }
  });
  $("#back").click(function() {
    $("#form1, #back").toggle();
    $("#answer1, #answer2, #answer3, answer4").hide();
    $("input['type=radio']").prop('checked', false)
  })
});