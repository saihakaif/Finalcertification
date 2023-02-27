document.getElementById("search").addEventListener("click", () => { 
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = documet.querySelectorAll(".card");
    elements.forEach((elements,index) => {
        if(element.innerText.includes(searchInput.toUpperCase())){
             cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    })
});