let equal_pressed = 0;
//consulte todos os botões excluindo AC e DEL
let button_input = document.querySelectorAll(".input-button");
//consulte a entrada igual limpar e apagar
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
};
//acessar cada classe usando foreach
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if(equal_pressed == 1) {
            input.value = "";
            equal_pressed = 0;
        }
        //Valor de exibição de cada botão
        input.value += button_class.value;
    });
});
//Resolver a entrada do usuário quanto clicado no sinal de igual
equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = input.value;
    try{
      let solution = eval(inp_val);

        if(Number.isInteger(solution)){
            input.value = solution
        }
        else{
            input.value = solution.toFixed(2);
        }
    }
    catch(err) {
        alert("Invalid Input");
    }
});

clear.addEventListener("click", () => {
    input.value = "";
})

erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
})