const n1 = document.querySelector("#numero1");
const notaFinal = document.querySelector("#notaFinal");
const n3 = document.querySelector("#lado3");
const res = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");

btn.onclick = () => {   
  res.value = numero1(n1.value);
 // notaFinal.value = notaResult; 
}
const numero1 = (vn1) => {
   vn1 = Number.parseFloat(vn1);

  let rest = []

  for( let i = 1; i <= vn1; i++){

       if(i % 5 == 0){
          rest.push("Luidy")
       }
       if(i % 9 == 0){
          rest.push("Moura")
       }
       if (i % 5 == 0 && i % 9 == 0){

          rest.push("numero1")
       }
       if (i % 5 != 0 || i % 9 != 0) {

          rest.push(i)
       }
  }
  return (rest)
}
