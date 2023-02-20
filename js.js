const adressbtn = document.querySelector('#adress-from')
const adressbclose = document.querySelector('#adress-close')
console.log (adressbclose)
adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-from').style.display = "flex"
})
adressbclose.addEventListener("click", function(){
    document.querySelector('.adress-from').style.display = "none"
})