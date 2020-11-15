class CustomForm {
  firstName;
  lastName;
  tel;
  email;
  mess;

  constructor(fn, ln, tel, email, mess) {
    this.firstName = fn;
    this.lastName = ln;
    this.tel = tel;
    this.email = email;
    this.mess = mess;
  }
}
window.onload = function () {
  // let f = document.forms[0];
  console.log("1");
  const old = getOldForm();
  completeForm(old);
  formChange();
};
function getOldForm() {
  let currentform = new CustomForm("", "", "", "", "");

  if (localStorage.getItem("oldform")) {
    let oldform = JSON.parse(localStorage.getItem("oldform"));
    console.log("getOldFormOk");
    currentform.firstName = oldform["firstName"];
    currentform.lastName = oldform["lastName"];
    currentform.tel = oldform["tel"];
    currentform.email = oldform["email"];
    currentform.mess = oldform["mess"];

    return currentform;
  }
  return;
}

function formChange() {
  let f = document.forms[0];
  let fnLabel = document.getElementsByClassName("fistName-label");
  let lnLabel = document.getElementsByClassName("lastName-label");
  let telLabel = document.getElementsByClassName("tel-label");
  let emailLabel = document.getElementsByClassName("email-label");
  let messLabel = document.getElementsByClassName("mes-label");
  console.log(messLabel);
  let fn = f.elements[0];
  let ln = f.elements[1];
  let tel = f.elements[2];
  let email = f.elements[3];
  let mes = f.elements[4];

  let btn = document.getElementById("formsubmit");
  btn.disabled = false;
  let fnIsValid = false;
  let lnIsValid = false;
  let tellIsValid = false;
  let emailIsValid = false;
  let messIsValid = false;

  if (fn.value != "") if (checkFN(fn, fnLabel)) fnIsValid = true;
  if (ln.value != "") if (checkLn(ln, lnLabel)) lnIsValid = true;
  if (email.value != "") {
    if (checkEmail(email, emailLabel)) emailIsValid = true;
  }
  if (checkTel(tel, telLabel)) tellIsValid = true;
  if (mes.value != "") {
    if (checkMess(mes, messLabel)) messIsValid = true;
  }
  if (fnIsValid && lnIsValid && tellIsValid && emailIsValid && messIsValid) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

// заполняем форму известными данными
function completeForm(currentform) {
  let f = document.forms[0];

  f.elements[0].value = currentform.firstName;
  f.elements[1].value = currentform.lastName;
  f.elements[2].value = currentform.tel;
  f.elements[3].value = currentform.email;
  f.elements[4].value = currentform.mess;
}

// сохраняем в local storage
function saveToLocal(fn, ln, tel, email, mess) {
  let f = new CustomForm(
    fn.value,
    ln.value,
    tel.value,
    email.value,
    mess.value
  );
  localStorage.clear;
  localStorage.setItem("oldform", JSON.stringify(f));
}
function checkFN(fn, fnLabel) {
  if (!/^\s*$/.test(fn.value)) {
    fn.classList.remove("invalid");
    fn.classList.add("valid");
    fnLabel[0].classList.remove("labelInValid");
    return true;
  } else {
    // userMessageFormValid += "First name";
    formValid = false;
    fn.classList.add("invalid");
    fnLabel[0].classList.add("labelInValid");
    return false;
  }
}
function checkLn(ln, lnLabel) {
  if (!/^\s*$/.test(ln.value)) {
    ln.classList.remove("invalid");
    ln.classList.add("valid");
    lnLabel[0].classList.remove("labelInValid");
    return true;
  } else {
    // userMessageFormValid += ", Last name";
    formValid = false;
    ln.classList.add("invalid");
    lnLabel[0].classList.add("labelInValid");
    return false;
  }
}
function checkTel(tel, telLabel) {
  if (
    (!/^\s*$/.test(tel.value) &&
      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(tel.value)) ||
    tel.value == ""
  ) {
    tel.classList.remove("invalid");
    tel.classList.add("valid");
    telLabel[0].classList.remove("labelInValid");
    return true;
  } else {
    // userMessageFormValid += ", Telephone";
    tel.classList.add("invalid");
    telLabel[0].classList.add("labelInValid");
    return false;
  }
}
function checkEmail(email, emailLabel) {
  if (
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
      email.value
    )
  ) {
    email.classList.remove("invalid");
    email.classList.add("valid");
    // userMessageFormValid += ", Email";
    emailLabel[0].classList.remove("labelInValid");
    return true;
  } else {
    email.classList.add("invalid");
    emailLabel[0].classList.add("labelInValid");
    return false;
  }
}
function checkMess(mes, messLabel) {
  if (!/^\s*$/.test(mes.value)) {
    mes.classList.remove("invalid");
    mes.classList.add("valid");
    messLabel[0].classList.remove("labelInValid");
    return true;
  } else {
    // userMessageFormValid += ", Message";
    mes.classList.add("invalid");
    messLabel[0].classList.add("labelInValid");
    return false;
  }
}

// получить конкретное значение куки
function get_cookie(cookie_name) {
  var results = document.cookie.match(
    "(^|;) ?" + cookie_name + "=([^;]*)(;|$)"
  );
  if (results) return unescape(results[2]);
  else return null;
}
// обрботчик кнопки
function formClick() {
  let isSent = get_cookie("inSent");
  let currentform = getOldForm();
  if (isSent) {
    createCustomAlert(
      `${currentform["firstName"]} ${currentform["lastName"]}, ваше обращение обрабатывается!!`,
      "MESSAGE",
      "Ok"
    );
    // alert(
    //   `<${currentform["firstName"]} ${currentform["lastName"]}>, ваше обращение обрабатывается!!`
    // );
  } else {
    //let userMessageFormValid = ""; // строка с сообщением о невалидных полях

    let formValid = true;

    // formValid =
    //   checkFN(fn, fnLabel) &&
    //   checkLn(ln, lnLabel) &&
    //   checkEmail(email, emailLabel) &&
    //   checkTel(tel, telLabel) &&
    //   checkMess(mes, messLabel);

    console.log(formValid); // true если форма валидна
    if (!formValid) {
      // тут было сообщение о невалидных полях
      // document.document.getElementById("formvalid").classList.add("forminvalid");
      // alert(
      //   `Поля ${userMessageFormValid} заполнены не верно, пожалуйста исправьте`
      // );
    } else {
      let f = document.forms[0];
      let fn = f.elements[0];
      let ln = f.elements[1];
      let tel = f.elements[2];
      let email = f.elements[3];
      let mes = f.elements[4];

      saveToLocal(fn, ln, tel, email, mes);
      createCustomAlert(
        `${fn.value} ${ln.value}, спасибо за обращение!`,
        "MESSAGE",
        "Ok"
      );
      // alert(`${fn.value} ${ln.value}, спасибо за обращение!`);
      document.cookie = "inSent=true";
    }
  }
}

// CUSTOM ALERT
function createCustomAlert(txt, title, btn_text) {
  d = document;

  mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
  mObj.id = "modalContainer";
  mObj.style.height = d.documentElement.scrollHeight + "px";

  alertObj = mObj.appendChild(d.createElement("div"));
  alertObj.id = "alertBox";
  if (d.all && !window.opera)
    alertObj.style.top = document.documentElement.scrollTop + "px";
  alertObj.style.left =
    (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px";
  alertObj.style.visiblity = "visible";

  h1 = alertObj.appendChild(d.createElement("h1"));
  h1.appendChild(d.createTextNode(title));

  msg = alertObj.appendChild(d.createElement("p"));
  msg.innerHTML = txt;

  btn = alertObj.appendChild(d.createElement("a"));
  btn.id = "closeBtn";
  btn.appendChild(d.createTextNode(btn_text));
  btn.href = "#";
  btn.focus();
  btn.onclick = function () {
    removeCustomAlert();
    return false;
  };

  alertObj.style.display = "block";
}

function removeCustomAlert() {
  document
    .getElementsByTagName("body")[0]
    .removeChild(document.getElementById("modalContainer"));
}
