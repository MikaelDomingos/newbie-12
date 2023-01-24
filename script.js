function enviar (elemento) {
   elemento.style.display = "none"; 
document.getElementById("thankyou").style.display = "block";
document.getElementById("first").style.display = "none";
}

const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")
rates.forEach((rate) => {
   rate.addEventListener("click", () =>{
      rating.innerHTML = rate.innerHTML
   })
})