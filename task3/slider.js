function menuclick1() {
    //   console.log(1);
    document.getElementById("item1").classList.add("description-item--active");
    document.getElementById("item2").classList.remove("description-item--active");
    document.getElementById("item3").classList.remove("description-item--active");
  
    document
      .getElementById("menu1")
      .classList.add("closed-project__menu-item__active");
    document
      .getElementById("menu2")
      .classList.remove("closed-project__menu-item__active");
    document
      .getElementById("menu3")
      .classList.remove("closed-project__menu-item__active");
  }
  function menuclick2() {
    //   console.log(2);
    document.getElementById("item2").classList.add("description-item--active");
    document.getElementById("item1").classList.remove("description-item--active");
    document.getElementById("item3").classList.remove("description-item--active");
  
    document
      .getElementById("menu2")
      .classList.add("closed-project__menu-item__active");
    document
      .getElementById("menu1")
      .classList.remove("closed-project__menu-item__active");
    document
      .getElementById("menu3")
      .classList.remove("closed-project__menu-item__active");
  }
  
  function menuclick3() {
    //   console.log(3);
    document.getElementById("item3").classList.add("description-item--active");
    document.getElementById("item2").classList.remove("description-item--active");
    document.getElementById("item1").classList.remove("description-item--active");
  
    document
    .getElementById("menu3")
    .classList.add("closed-project__menu-item__active");
  document
    .getElementById("menu2")
    .classList.remove("closed-project__menu-item__active");
  document
    .getElementById("menu1")
    .classList.remove("closed-project__menu-item__active");
  }
  