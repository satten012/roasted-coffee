let navIconsContainer = document.querySelector("#nav-icons")
let navIcons = document.querySelector(".header-icons")
navIconsContainer.appendChild(navIcons)
navIcons.classList.remove("d-none")

const likes = document.querySelectorAll(".icon-favorite")
const cardCount = document.querySelectorAll(".icon-cart")
let likesCount = document.querySelector(".likes-count") 
let cardCountOffers = document.querySelector(".card-count")
let totalOffers = 0
let totalCardOffers = 0

likes.forEach(function(el, i){
    el.addEventListener("click", function(){
        console.log(i)
        if (i != 0){
        totalOffers +=1 
        likesCount.innerText = totalOffers
        }
    })
})

cardCount.forEach(function(el, i){
    el.addEventListener("click",function(){
        if (i !=0){
            totalCardOffers += 1
            cardCountOffers.innerHTML = totalCardOffers
        }
    })
})

const prompts = document.querySelectorAll(".product-qty > input")
let minicartTotalPrice  = document.querySelector (".totalSumm")
const productQty = document.querySelectorAll(".product-qty")
let dynamycSumm = 0

prompts.forEach(function(el, i){
    dynamycSumm += Number(el.value * Number(productQty[i].textContent.slice(37, 42)))
    minicartTotalPrice.innerHTML = "Total price:" + " " + "$" + dynamycSumm.toFixed(2)
    el.addEventListener("input", function(){
        dynamycSumm = 0
        prompts.forEach(function(el, i){
            dynamycSumm += Number(el.value * Number(productQty[i].textContent.slice(37, 42)))
            minicartTotalPrice.innerHTML = "Total price:" + " " + "$" + dynamycSumm.toFixed(2)
        })
    })
})