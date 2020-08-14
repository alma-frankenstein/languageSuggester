$(document).ready(function(){
  $("form#survey").submit(function(event) {
    const kittenVal = parseInt($("input:radio[name=kitten]:checked").val());
    const jobVal = parseInt($("input:radio[name=job]:checked").val());

    event.preventDefault();
  });
});