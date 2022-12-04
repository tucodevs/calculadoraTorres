var zeraVisor = false 
var memory1 = ""
var memory2 = ""
var resultado = ""
var qualOperador = ""
var memoryAposResultado = false
var visorTemp = memory1 + qualOperador + memory2

function displaynum(n1) {
    Calculator.text1.value = Calculator.text1.value + n1; 
    
}

function operador(op){
    if(memory1 > 0 )
    {
        igual();
    Calculator.text1.value = ""
    qualOperador = op      
    }
        else{
        memory1 = Calculator.text1.value
        qualOperador = op
        Calculator.text1.value = ""
    }
}
function igual(result) {
        if(qualOperador == "+")
        {
            memory2 = Calculator.text1.value
            resultado = parseFloat(memory1) + parseFloat(memory2)
            Calculator.text1.value = resultado
            memory1 = resultado
            memory2 = 0
            memoryAposResultado = true
        }   
        else if(qualOperador == "-")
        {
            memory2 = Calculator.text1.value
            resultado = memory1 - memory2
            Calculator.text1.value = resultado
            memory1 = resultado
            memory2 = 0
            memoryAposResultado = true
        }
        else if(qualOperador == "/")
        {
            memory2 = Calculator.text1.value
            resultado = memory1 / memory2
            Calculator.text1.value = resultado
            memory1 = resultado
            memory2 = 0
            memoryAposResultado = true
        }
        else if(qualOperador == "*")
        {
            memory2 = Calculator.text1.value
            resultado = memory1 * memory2
            Calculator.text1.value = resultado
            memory1 = resultado
            memory2 = 0
            memoryAposResultado = true
        }
    }