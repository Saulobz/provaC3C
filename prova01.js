const n1 = document.querySelector("#lado1");
const n2 = document.querySelector("#lado2");
const n3 = document.querySelector("#lado3");
const res = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");

btn.onclick = () => {   
        res.value = triangulo(n1.value, n2.value, n3.value)        
    }
    const triangulo = (vn1, vn2, vn3) => { 
        vn1 = Number.parseFloat(vn1);
        vn2 = Number.parseFloat(vn2);
        vn3 = Number.parseFloat(vn3);

        if (vn1 > vn2 + vn3 || vn2 > vn3 + vn1 || vn3 > vn1 + vn2) {        
            return("triangulo impossivel");
        } else if (vn1 == vn2 && vn2 == vn3) {
            return("equilatero");          
        } else if (vn1 != vn2 && vn2 != vn3 && vn1 != vn3) {
            return("escaleno");        
        } else {
            return("izoceles");      
        } 
    } 
 
