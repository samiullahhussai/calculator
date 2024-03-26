let input = document.getElementById("input")
let query = document.querySelectorAll("button")
let btnarray = Array.from(query)
let string = '';

btnarray.forEach((btn) => 
    btn.addEventListener('click', (clicked) => {
    
        if (clicked.target.innerHTML == "DEL") {
            
            string =string.substring(0,string.length-1) 
            input.value = string
        }
        else if (clicked.target.innerHTML=="AC") {
            string = ''
            input.value = string
        }
        else if (clicked.target.innerHTML == "=") {
           string =eval(string) 
           input.value = string
        }
        else {
            string += clicked.target.innerHTML;
            input.value = string;
        }
    })
    
)