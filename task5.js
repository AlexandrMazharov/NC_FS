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

let f = document.forms[0];
let currentform = new CustomForm("", "", "", "", "");
// если есть сохраненная старая форма
if (localStorage.getItem("oldform")) {
  let oldform = JSON.parse(localStorage.getItem("oldform"));

  currentform.firstName = oldform["firstName"];
  currentform.lastName = oldform["lastName"];
  currentform.tel = oldform["tel"];
  currentform.email = oldform["email"];
  currentform.mess = oldform["mess"];
  completeForm();
}
// заполняем форму известными данными
function completeForm() {
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
// получить конкретное значение куки
function get_cookie(cookie_name) {
  var results = document.cookie.match(
    "(^|;) ?" + cookie_name + "=([^;]*)(;|$)"
  );
  if (results) return unescape(results[2]);
  else return null;
}
// обрботчик кнопки
function formsubmit() {
  let isSent = get_cookie("inSent");
  if (isSent) {
    alert(
      `<${currentform["firstName"]} ${currentform["lastName"]}>, ваше обращение обрабатывается!!`
    );
  }

  let fn = f.elements[0];
  let ln = f.elements[1];
  let tel = f.elements[2];
  let email = f.elements[3];
  let mes = f.elements[4];
  let userMessageFormValid = "";
  console.log(mes);
  let formValid = true;

  if (!/^\s*$/.test(fn.value)) {
    fn.classList.remove("invalid");
    fn.classList.add("valid");
  } else {
    userMessageFormValid += "First name";
    formValid = false;
    fn.classList.add("invalid");
  }

  if (!/^\s*$/.test(ln.value)) {
    ln.classList.remove("invalid");
    ln.classList.add("valid");
  } else {
    userMessageFormValid += ", Last name";
    formValid = false;
    ln.classList.add("invalid");
  }

  if (
    !/^\s*$/.test(tel.value) &&
    /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(tel.value)
  ) {
    tel.classList.remove("invalid");
    tel.classList.add("valid");
    userMessageFormValid += ", Telephone";
  } else {
    tel.classList.add("invalid");
    formValid = false;
  }
  if (
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
      email.value
    )
  ) {
    email.classList.remove("invalid");
    email.classList.add("valid");
    userMessageFormValid += ", Email";
  } else {
    formValid = false;
    email.classList.add("invalid");
  }

  if (!/^\s*$/.test(mes.value)) {
    mes.classList.remove("invalid");
    mes.classList.add("valid");
  } else {
    formValid = false;
    userMessageFormValid += ", Message";
    mes.classList.add("invalid");
  }

  if (!formValid) {
    console.log("не верное");
    // console.log(mes.value);
    // document.document.getElementById("formvalid").classList.add("forminvalid");

    // alert(
    //   `Поля ${userMessageFormValid} заполнены не верно, пожалуйста исправьте`
    // );
  } else {
    saveToLocal(fn, ln, tel, email, mes);

    alert(`${fn.value} ${ln.value}, спасибо за обращение!`);
    document.cookie = "inSent=true";
  }
}
