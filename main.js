const cells = document.querySelectorAll(".cell")
const operators = document.querySelectorAll(".operator")
const result = document.querySelector(".result")
const reset = document.querySelector(".reset")
const message = document.getElementById("message")
var first, second, op, output

cells.forEach(cell => {
    cell.addEventListener("click", function (event) {
        !op ?
            first = parseInt(event.target.innerText) :
            second = parseInt(event.target.innerText)

        display(event.target.innerText)
    })
});

operators.forEach(operator => {
    operator.addEventListener("click", function (event) {
        op = event.target.innerText
        display(event.target.innerText)
    })
});

result.addEventListener("click", function (event) {
    switch (op) {
        case "+":
            output = first + second
            break;
        case "-":
            output = first - second
            break;
        case "*":
            output = first * second
            break;
        case "/":
            output = first / second
            break;
    }

    display(output)
})

reset.addEventListener("click", function (event) {
    first = undefined
    second = undefined
    op = undefined
    output = undefined
    message.innerText = ""
})

function display(msg) {
    message.innerText = msg
}