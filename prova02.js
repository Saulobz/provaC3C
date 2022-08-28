
const n1 = document.querySelector("#nota1");
const notaFinal = document.querySelector("#notaFinal");
const n3 = document.querySelector("#lado3");
const res = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");
let notaResult;

btn.onclick = () => {   
        res.value = aluno(n1.value);
        notaFinal.value = notaResult;      
    }

    const aluno = (vn1) => { 
        vn1 = Number.parseFloat(vn1);
        
        function nota(n1) {
            return Math.ceil(n1 / 5) * 5;
        }
        
        var arredonda = (nota(vn1));
        var diferenca = arredonda - vn1;
        var nota1;

        if (vn1 < 0 || vn1 > 100) {
            return ("nota inválida");

        } else if (diferenca < 3 && vn1 >= 38) {
            nota1 = arredonda;

        } else {
            nota1 = vn1;
        }

        notaResult = nota1;

        if (nota1 < 40) {
            return("reprovado");  

        } else {
            return("aprovado");  
        }
    }
    
