$("#mode").addEventListener("change", (e) => {
  let mode = localStorage.setItem("mode", e.target.value);
  darkMode()
});

function darkMode(){
  let mode = localStorage.getItem("mode")
  $("header").style.backgroundColor = mode
  if($("header").style.backgroundColor === mode){
    $("header").style.color = "white"
  }
  $("footer").style.backgroundColor = mode
}

(
  function(){
    let mode = localStorage.getItem("mode");
    $("header").style.backgroundColor = mode
    $("footer").style.backgroundColor = mode

  } ()
)
