// YOUR CODE HERE

// Exercise 1
const btn1 = document.getElementById('btn1')
const p1 = document.querySelector('#output1 p')

btn1.addEventListener("click", (event) => {
    p1.style.color = "red";
})

// Exercise 2
const btn2 = document.getElementById('btn2')
const p2 = document.querySelector('#output2 p')
const span = document.createElement('span')
span.textContent = 'Hello world'

btn2.addEventListener("click", (event) => {
    p2.append(span)
})

// Exercise 3
const btn3 = document.getElementById('btn3')
const p3 = document.querySelector('#output3 p')

btn3.addEventListener("click", (event) => {
    p3.classList.remove("small-text")
})

// Exercise 4
const btn4 = document.getElementById('btn4')
const p4 = document.querySelectorAll('#output4 p')

btn4.addEventListener("click", () => {
    p4.forEach(paragraph => {
        paragraph.style.color = "red";
    });
})

// Exercise 5
const btn5 = document.getElementById('btn5')
const input = document.getElementById('message')

btn5.addEventListener("click", () => {
    console.log(input.value);
})
