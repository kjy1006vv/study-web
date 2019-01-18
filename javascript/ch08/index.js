
function addDiv(){
    let newDiv = document.createElement("Div");
    console.log(newDiv);
    newDiv.innerHTML = "나";
    let card_list = document.querySelector(".card-list");
    console.log(card_list);
    card_list.prepend(newDiv);
}


addDiv();
