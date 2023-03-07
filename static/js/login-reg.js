if (window.location.pathname == "/register") {
  const weak = document.querySelector("#weak");
  const medium = document.querySelector("#medium");
  const strong = document.querySelector("#strong");
  const input = document.querySelector("#password-reg");
  const text = document.querySelector("#indicator-text");
  let regExpWeak = /[a-z]/;
  let regExpMedium = /\d+/;
  let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

  input.addEventListener("keyup", (e) => {
    e.preventDefault();
    trigger();
  });

  function trigger() {
    let no = 0;
    if (input.value != "") {
      weak.style.display = "block";
      text.innerHTML = "Svagt lösenord";

      if (
        input.value.length <= 3 &&
        (input.value.match(regExpWeak) ||
          input.value.match(regExpMedium) ||
          input.value.match(regExpStrong))
      )
        no = 1;
      if (
        input.value.length >= 6 &&
        ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) ||
          (input.value.match(regExpMedium) && input.value.match(regExpStrong)) ||
          (input.value.match(regExpWeak) && input.value.match(regExpStrong)))
      )
        no = 2;
      if (
        input.value.length >= 6 &&
        input.value.match(regExpWeak) &&
        input.value.match(regExpMedium) &&
        input.value.match(regExpStrong)
      )
        no = 3;
      if (no == 1) {
        weak.style.display = "block";
        text.innerHTML = "Svagt lösenord";
      }
      if (no == 2) {
        medium.style.display = "block";
        text.innerHTML = "Medelstarkt lösenord";
      } else {
        medium.style.display = "none";
        text.innerHTML = "Svagt lösenord";
      }
      if (no == 3) {
        weak.style.display = "block";
        medium.style.display = "block";
        strong.style.display = "block";
        text.innerHTML = "Starkt lösenord!";
      } else {
        strong.style.display = "none";
      }
    } else {
      weak.style.display = "none";
      medium.style.display = "none";
      strong.style.display = "none";
      text.innerHTML = "";
    }
  }

  function addData() {
    let firstname = document.querySelector("#firstname").value;
    let username = document.querySelector("#username-reg").value;
    let pass = document.querySelector("#password-reg").value;
    let confirmPass = document.querySelector("#cpassword-reg").value;
    let registerBox = document.querySelector("#register-box");
    let registerText = document.querySelector("#register-text");
    let pswError = document.querySelector("#psw-error");
    sessionStorage.setItem("userName", username);
    sessionStorage.setItem("userPass", pass);
    sessionStorage.setItem("firstName", firstname);
  }

  const signup = document.querySelector("#signup");

  signup.addEventListener("click", () => {
    addData();
  });
}

if (window.location.pathname == "/login") {
  function checkData() {
    let enterUsername = document.querySelector("#username").value;
    let enterPass = document.querySelector("#password").value;
    let welcomeBox = document.querySelector("#logged-in-box");
    let welcomeText = document.querySelector("#logged-in-text");
    let welcomeText2 = document.querySelector("#logged-in-text2");
    let welcomeText3 = document.querySelector("#logged-in-text3");
    let menuText = document.querySelector(".active");
    let errorMsg = document.querySelector("#error");
    let getUsername = sessionStorage.getItem("userName");
    let getPass = sessionStorage.getItem("userPass");
    let getFirstName = sessionStorage.getItem("firstName");

    if (enterUsername == getUsername && enterPass == getPass) {
      welcomeBox.innerHTML = "";
      welcomeText.innerHTML = `Välkommen ${getFirstName}`;
      welcomeText2.innerHTML = "Du är nu inloggad!";
      welcomeText3.innerHTML = "Du har 0 poäng på ditt bonussaldo";
      welcomeBox.append(welcomeText, welcomeText2);
      menuText.innerHTML = "Min sida";
    } else {
      errorMsg.innerHTML = "Fel användarnamn eller lösenord";
    }
  }

  const login = document.querySelector("#logInBtn");

  login.addEventListener("click", () => {
    checkData();
  });
}
