document.querySelectorAll("a[href^='#']").forEach(anchor => {
anchor.addEventListener("click", function(e) {

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
})

})
})

function expandSpeaker(event, card){
if(card.classList.contains("expanded")) return
card.classList.add("expanded")
}

function collapseSpeaker(event, toggle){
event.stopPropagation()
const card = toggle.closest(".speaker-card")
card.classList.remove("expanded")
card.scrollIntoView({behavior:"smooth", block:"nearest"})
}