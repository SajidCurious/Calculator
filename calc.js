let string = "";
let buttons = document.querySelectorAll('#btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.getElementById('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = '';
            document.getElementById('input').value = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.getElementById('input').value = string;
        }
    });
});