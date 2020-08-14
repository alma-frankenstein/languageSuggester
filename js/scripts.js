const lol = "LOLCODE is for kittens";
const clojure = "clojure is for weirdos";
const python = "python is a good choice"

function langChooser(total){
  let lang;

  if (total <= 10){
    lang = lol;
  } else if (total >= 14){
    lang = clojure; 
  } else {
    lang = python;
  }
  return lang;
}


$(document).ready(function(){
  $("form#survey").submit(function(event) {
    const kittenVal = parseInt($("input:radio[name=kitten]:checked").val());
    const jobVal = parseInt($("input:radio[name=job]:checked").val());
    const total = kittenVal + jobVal;

    let language = langChooser(total);

    $("#langAnswer").text(language);
    $("#suggestedLanguage").show();

    event.preventDefault();
  });
});