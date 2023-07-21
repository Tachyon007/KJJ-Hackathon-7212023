

//clock
let clock = document.getElementById("clock");
function setTwoChar(inText){
    if(inText.length < 2){
        inText = "0" + inText;
    }
    return inText;
}
setInterval(()=>{
    let currTime = new Date();
    let hour = setTwoChar("" + (currTime.getHours() % 12));
    let min = setTwoChar("" + currTime.getMinutes());
    let sec = setTwoChar("" + currTime.getSeconds());

    clock.innerHTML = hour + " : " + min + " : " + sec;

})


//grid menu
function scrollToFilter(){
    document.getElementById("filter").scrollIntoView({ behavior: "smooth"});
}



//tag selection

let selectedTags = [];

function toggleSelect(el){
    let classList = el.classList;
    if(classList.contains("tagSelectionSelected")){
        classList.remove("tagSelectionSelected");
        selectedTags = selectedTags.filter((tag)=>{
            return (tag != el.innerHTML)
        })
    }else{
        classList.add("tagSelectionSelected");
        selectedTags.push(el.innerHTML);
    }

    console.log(selectedTags);
}

function search(){
    location.href = "./index.html?" + "[" + selectedTags + "]"; 
}