const n1 = document.querySelector("#parametro1");
const n2 = document.querySelector("#parametro2");
const n3 = document.querySelector("#parametro3");
const res = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");

btn.onclick = () => { 
        res.value = baskara(n1.value, n2.value, n3.value)        
    }

    const baskara = (vn1, vn2, vn3) => {
        vn1 = Number.parseFloat(vn1);
        vn2 = Number.parseFloat(vn2);
        vn3 = Number.parseFloat(vn3);
        var delta = (Math.pow(vn2, 2)) - ( 4 * vn1 ) *vn3;

        if (delta < 0) {
           return("delta negativo");
        } else {
        var x1 = ((-vn2) + (Math.sqrt(delta))) / (2*vn1);
        var x2 = ((-vn2) - (Math.sqrt(delta))) / (2*vn1);
        return x1 + ",    " + x2;
        }       
    }
    
