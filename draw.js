const squares = document.querySelectorAll(".square");

const screen = document.querySelector("table");

const input1 = document.getElementById("input-color1");
const input2 = document.getElementById("input-color2");
const input3 = document.getElementById("input-color3");
const input4 = document.getElementById("input-color4");
const inputColors = document.querySelector(".inputWrap");
let color = "#000";


screen.addEventListener('dragstart', e => e.preventDefault())


let onClick = false;

screen.addEventListener('mousedown', () => {
    onClick = true;
})

screen.addEventListener('mouseup', () => {
    onClick = false;
})

function selectColor1(){
  console.log(1)
  color = input1.value;
  return color;
}

function selectColor2(){
  console.log(2)
  color = input2.value;
  return color;
}

function selectColor3(){
  console.log(3)
  color = input3.value;
  return color;
}

function selectColor4(){
  console.log(4)
  color = input4.value;
  return color;
}

squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    if(onClick) {
      square.style.backgroundColor = color;
    }
  });

  square.addEventListener('click', () => {
    square.style.backgroundColor = color;
  });
})


function limpar() {
  squares.forEach(square => {
    square.style.backgroundColor = "#FFF";
  })
}


// Borracha

window.addEventListener("keydown", function (event) {

    if(event.code == "ControlLeft" ){
        squares.forEach(square => {
            square.addEventListener("mouseover", () => {
                if(onClick){
                    square.style.backgroundColor = "white";
                }
            })
        })
    }
})


window.addEventListener("keyup", function (event) {

    if(event.code == "ControlLeft" ){
        squares.forEach(square => {
            square.addEventListener("mouseover", () => {
                if(onClick){
                    square.style.backgroundColor = color;
                }
            })
        })
    }
})