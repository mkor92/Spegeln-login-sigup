if (window.location.pathname == "/register") {
  const weak = document.querySelector("#weak");
  const medium = document.querySelector("#medium");
  const strong = document.querySelector("#strong");
  const pass = document.querySelector("#password-reg");
  const confirmPass = document.querySelector("#cpassword-reg");
  const name = document.querySelector("#name");
  const email = document.querySelector("#email-reg");
  const username = document.querySelector("#username-reg");
  const pswError = document.querySelector("#psw-error");
  const emailError = document.querySelector("#email-error");
  let registerBox = document.querySelector("#register-box");
  const emptyInput = document.querySelector("#emptyInput");
  const text = document.querySelector("#indicator-text");
  const regExpWeak = /[a-z]/;
  const regExpMedium = /\d+/;
  const regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

  pass.addEventListener("input", () => {
    trigger();
  });

  function validateEmail() {
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(format)) {
      return true;
    } else {
      return false;
    }
  }
  email.addEventListener("input", () => {
    setTimeout(() => {
      if (validateEmail() != true && email.value.length > 4) {
        emailError.innerHTML = "E-postadressen ej giltig";
      } else {
        emailError.innerHTML = "";
      }
    }, 4000);
  });

  confirmPass.addEventListener("input", () => {
    if (confirmPass.value.length != 0) {
      if (pass.value == confirmPass.value) {
        pswError.innerHTML = "Lösenorden matchar";
        pswError.style.color = "green";
      } else {
        pswError.innerHTML = "Lösenorden matchar inte";
        pswError.style.color = "red";
      }
    } else {
      pswError.innerHTML = "Lösenordet kan inte vara tomt";
      pswError.style.color = "red";
    }
  });

  function trigger() {
    let no = 0;
    if (pass.value != "") {
      weak.style.display = "block";
      text.innerHTML = "Svagt lösenord";

      if (
        pass.value.length <= 3 &&
        (pass.value.match(regExpWeak) ||
          pass.value.match(regExpMedium) ||
          pass.value.match(regExpStrong))
      )
        no = 1;
      if (
        pass.value.length >= 6 &&
        ((pass.value.match(regExpWeak) && pass.value.match(regExpMedium)) ||
          (pass.value.match(regExpMedium) && pass.value.match(regExpStrong)) ||
          (pass.value.match(regExpWeak) && pass.value.match(regExpStrong)))
      )
        no = 2;
      if (
        pass.value.length >= 6 &&
        pass.value.match(regExpWeak) &&
        pass.value.match(regExpMedium) &&
        pass.value.match(regExpStrong)
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
    sessionStorage.setItem("userName", username.value);
    sessionStorage.setItem("userPass", pass.value);
    sessionStorage.setItem("name", name.value);
  }

  const signup = document.querySelectorAll("#signup");

  signup.forEach((click) => {
    click.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirmPass.value == pass.value) {
        if (name.value.length >= 4 && username.value.length > 1 && email.value.length > 4) {
          addData();
          registerBox.innerHTML = `<h2 class="text-3xl block text-center font-semibold" id="register-text"></i>Du är nu registrerad!</h2><div class="mt-5 flex justify-center items-center  "><h3 class=" text-center  w-96 bg-white  p-2 rounded-md shadow-lg">Tillbaka till inloggning? <a href="/login" class="underline decoration-double decoration-login-btn font-semibold hover:text-login-btn ">Klicka här</a></h3></div>`;
          registerBox.firstChild.style.color = "#00CCA4";
        } else {
          emptyInput.innerHTML = "Du måste fylla i alla fält korrekt";
        }
      }
    });
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
    let getName = sessionStorage.getItem("name");

    if (enterUsername == getUsername && enterPass == getPass) {
      welcomeBox.innerHTML = "";
      welcomeText.innerHTML = `Välkommen <br> ${getName}`;
      welcomeText2.innerHTML = "Du är nu inloggad!<br><br>Du har 0 poäng på ditt bonussaldo";
      welcomeText3.innerHTML = "Du har 0 poäng på ditt bonussaldo";
      welcomeBox.append(welcomeText, welcomeText2);
      menuText.innerHTML = "Min sida";
    } else if (enterUsername.length != 0 && enterPass.length != 0) {
      errorMsg.innerHTML = "Fel användarnamn eller lösenord";
    } else if (enterUsername.length == 0 && enterPass.length == 0) {
      errorMsg.innerHTML = "Du måste fylla i båda fälten";
    } else if (enterUsername.length != 0 && enterPass.length == 0) {
      errorMsg.innerHTML = "Vänligen fyll i ditt lösenord";
    } else if (enterUsername.length == 0 && enterPass.length != 0) {
      errorMsg.innerHTML = "Vänligen fyll i ditt användarnamn";
    }
  }

  const login = document.querySelector("#logInBtn");

  login.addEventListener("click", (e) => {
    e.preventDefault();
    checkData();
  });
}
