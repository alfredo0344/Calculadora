let operacion
let resultado = document.getElementById("pantalla")

document.getElementById("1").onclick = ()=> {
   resultado.innerText += ("1")
}
document.getElementById("2").onclick = ()=> {
    resultado.innerText += ("2")
 }
 document.getElementById("3").onclick = ()=> {
    resultado.innerText += ("3")
 }
 document.getElementById("4").onclick = ()=> {
    resultado.innerText += ("4")
 }
 document.getElementById("5").onclick = ()=> {
    resultado.innerText += ("5")
 }
 document.getElementById("6").onclick = ()=> {
    resultado.innerText += ("6")
 }
 document.getElementById("7").onclick = ()=> {
    resultado.innerText += ("7")
 }
 document.getElementById("8").onclick = ()=> {
    resultado.innerText += ("8")
 }
 document.getElementById("9").onclick = ()=> {
    resultado.innerText += ("9")
 }
 document.getElementById("0").onclick = ()=> {
    resultado.innerText += ("0")
 }
 document.getElementById("sum").onclick = ()=> {
    resultado.innerText += (" + ")
 }
 document.getElementById("res").onclick = ()=> {
    resultado.innerText += (" - ")
 }
 document.getElementById("mul").onclick = ()=> {
    resultado.innerText += (" * ")
 }
 document.getElementById("divi").onclick = ()=> {
    resultado.innerText += (" / ")
 }
 document.getElementById("clear").onclick = ()=> {
    resultado.innerText = (" ")
 }
 document.getElementById("resu").onclick = ()=> {
    resultado.innerText = eval(resultado.innerText)
 }
 

