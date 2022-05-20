                          // Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El pera­metro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El Ã¡rea del cuadrado es: " + areaCuadrado + "cmË†2");
console.groupEnd();

                          // Codigo del triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triÃ¡ngulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triÃ¡ngulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El peri­metro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();



                            // Codigo del circulo
console.group("Circulos");
// Radio
// const radioCirculo = 4;
// console.log("El radio del cÃ­rculo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// area
function areaCirculo(radio) {
  return (radio * radio) * PI;
}
console.groupEnd();


// Aqui­ interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  console.log(input);
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}














