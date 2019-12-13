function aboutClick(){
    // hidding home section
    document.querySelector("#homeSection").classList.add("hidden");
    document.querySelector("#aboutSection").classList.remove("hidden");
    document.querySelector("#contactSection").classList.add("hidden");

}
function contactClick(){
    // hidding home section
    document.querySelector("#homeSection").classList.add("hidden");
    document.querySelector("#aboutSection").classList.add("hidden");
    document.querySelector("#contactSection").classList.remove("hidden");

}
function homeClick(){
    // hidding home section
    document.querySelector("#homeSection").classList.remove("hidden");
    document.querySelector("#contactSection").classList.add("hidden");
    document.querySelector("#aboutSection").classList.add("hidden");

}
