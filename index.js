const button = document.getElementById("langChange");
    var listener = Store.GlobalListener;
    var count = 1;
    function changeLang() {
      let lang = "en";
      if (button.value == "en") {
        button.value = "fr";
        lang = "fr";
        button.innerHTML = "Lang = FR";
      } else {
        button.value = "en";
        lang = "en";
        button.innerHTML = "Lang = EN";
      }
      listener.dispatch({
        type: "UPDATE_LANG",
        payload: lang
      });
    }
    function getUser() {
      if (count >= 10) {
        count = 1;
      } else {
        count = count + 1;
      }
      listener.dispatch({
        type: "GET_USER",
        payload: count
      });
    }