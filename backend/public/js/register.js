function mainFunction() {
    const fullName = document.querySelector("#fname");
    const email = document.querySelector("#email");

    if (fullName.value == "" || email.value == "") {
        alert("Kindly Fill All The Slots!");
        return false;
    } else {
        let formOne = document.querySelector(".form");
        let formTwo = document.querySelector(".formTwo");
        formOne.style.transform = "translateX(-10vh)";
        formOne.style.zIndex = "2";
        formOne.style.opacity = "0";
        formTwo.style.transform = "translateX(0vh)";
        formTwo.style.zIndex = "1000";
        formTwo.style.opacity = "1";
        return true;
    }
}