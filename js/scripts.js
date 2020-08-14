$(document).ready(function(){
  $("form#survey").submit(function(event) {
    const kittenVal = parseInt($("input:radio[name=kitten]:checked").val());
    
    event.preventDefault();
  });
});