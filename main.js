    let personData = JSON.parse(window.localStorage.getItem("objPerson"))
    const accept_button = document.querySelector(".accept")
    const nameEdit = document.querySelector(".name-edit")
    const lastNameEdit = document.querySelector(".lastname-edit")
    let initial_question_number = 0
    const true_answers = ["b", "a", "c", "c", "a", "b"]
    let given_answers = []
    let current_answer = false
    let initial_result = 0
    const list = document.querySelector(".list")


    document.querySelector(".person-name").textContent = personData.name
    document.querySelector(".person-lastname").textContent = personData.name

    nameEdit.addEventListener("click", function (e) {
        let editName = prompt("ismingizni o'zgartirmoqchi bo'lsangiz kiriting")
        if (editName.trim().length == 0) {
            document.querySelector(".person-name").textContent = personData.name
        } else {
            document.querySelector(".person-name").textContent = editName
        }
    })

    lastNameEdit.addEventListener("click", function (e) {
        let editLastName = prompt(" familiyangizni o'zgartirmoqchi bo'lsangiz kiriting")
        if (editLastName.trim().length == 0) {
            document.querySelector(".person-lastname").textContent = personData.name
        } else {
            document.querySelector(".person-lastname").textContent = editLastName
        }
    })


    // actions --------------------------------------

    accept_button.addEventListener("click", () => {
        if (accept_button.textContent == "reload") {
            accept_button.textContent = "accept"
            renderElement(initial_question_number)
        } else {    
            if (current_answer !== false) {
                initial_question_number++;

                if (initial_question_number < 6) {
                    given_answers.push(current_answer)
                    current_answer = false
                    renderElement(initial_question_number)
                } else {
                    given_answers.push(current_answer)
                    end_test()
                }
            } else {
                alert("belgilanmadi")
            }
        }

    })


    const add_click = (items) => {

        items.forEach(element => {
            element.addEventListener("click", e => {
                removeClass(items)
                e.target.classList.add("active-point")
                let selected = e.target.getAttribute("data-variant")
                current_answer = selected
            })
        });
    }

    const removeClass = (value) => {
        value.forEach(e => {
            e.classList.remove("active-point")
        })
    }

    const end_test = () => {
        true_answers.forEach((e, index) => {
            if (e == given_answers[index]) {
                initial_result++
            }
        })
        list.innerHTML = `<h1 class="result">Result: ${initial_result}</h1> <h1 class ="result mistake"> Mistakes : ${testsArr.length - initial_result}</h1>`

        initial_question_number = 0
        given_answers = []
        current_answer = false
        initial_result = 0
        accept_button.textContent = "reload"
    }

    // -------------------------------------- actions 

    const renderElement = (value) => {
        const render = `
    <div class="main-delegation">
     <h1 class="number" >${initial_question_number + 1}) ${testsArr[value].question}</h1>
     <p class="variant" data-variant="a">${testsArr[value].A}</p>
     <p class="variant" data-variant="b">${testsArr[value].B}</p>
     <p class="variant" data-variant="c">${testsArr[value].C}</p>
     </div>
    `
        list.innerHTML = render
        add_click(document.querySelectorAll(".variant"))
    }
    renderElement(initial_question_number)