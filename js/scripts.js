function langChooser(total){
  let lang;

  if (total <= 10){
    lang = "LOLCODE";
  } else if (total >= 14){
    lang = "Clojure"; 
  } else {
    lang = "Python";
  }
  return lang;
}


$(document).ready(function(){
  $("form#survey").submit(function(event) {
    const kittenVal = parseInt($("input:radio[name=kitten]:checked").val());
    const jobVal = parseInt($("input:radio[name=job]:checked").val());
    const total = kittenVal + jobVal;

    let language = langChooser(total);

    $("#suggestedLanguage").show();

    event.preventDefault();
  });
});