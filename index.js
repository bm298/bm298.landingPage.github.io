const tabContainer= document.querySelector("#tabContainer")
function tabSwitcher(event){
console.log("tabswitcher",event.target)
console.log(event.target.classList.add("border-indigo-500"))
} 

tabContainer.addEventListener("click", tabSwitcher)