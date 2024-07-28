const images = document.querySelectorAll('.vertical-div img');
let currentIndex = 0;

function updateCards() {
    document.querySelectorAll('.card img').forEach(cardImg => {
        cardImg.src = images[currentIndex].src;
        console.log(currentIndex);
        let apply = document.getElementById("choose");
        apply.onclick = null;
        apply.onclick = function(){
            window.location.href = `../templates/template${currentIndex}/index1.html`
        };
    });
}

images.forEach((img, index) => {
    img.addEventListener('click', function() {
        currentIndex = index;
        updateCards();
    });
});