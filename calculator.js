let Input = document.querySelector("input")
let btn = document.getElementsByTagName("button")


let show = (num) => {
    Input.value += num//to concate the number
}
let showoperator = (operator) => {
    Input.value += operator//to concate the number

}
let Back1=()=>{
    Input.value=Input.value.slice(0,-1)
    
   
}
let equal = () => {
    Input.value = eval(Input.value)
    //! eval() is a method to convert the string opeation to the Arithmetic Operation

}
let clearscreen = () => {
    Input.value = " "
}