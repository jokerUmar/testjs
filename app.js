let form = document.querySelector(".form")
let input = document.querySelectorAll("input")
let btn = document.querySelector(".button")

let inputNameValue = "",
    inputLastNameValue = ""

    let objPerson = {}

btn.addEventListener("click", function (e) {

    e.preventDefault()

    if (input[0].value.trim().length != 0 && input[1].value.trim().length != 0) {
        inputNameValue = input[0].value
        inputLastNameValue = input[1].value

        objPerson.name = inputNameValue
        objPerson.lastName = inputLastNameValue

        window.localStorage.setItem("objPerson" , JSON.stringify(objPerson))
        window.location.replace("./main.html")

    } else {
        input[0].value = ""
        input[1].value = ""

        alert("iltimos ism familyangizni to'liq kiriting")
    }


})