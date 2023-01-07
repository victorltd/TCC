document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });



    var myLink = document.querySelector('a[href="#"]');
                                myLink.addEventListener('click', function(e) {
                                  e.preventDefault();
                                });


$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

/*
function closeSelf(){
  // do something

  if(condition satisfied){
     alert("conditions satisfied, submiting the form.");
     document.forms['certform'].submit();
     window.close();
  }else{
     alert("conditions not satisfied, returning to form");    
  }
}
*/
function closeDialog() {
  let d = document.getElementById('d')
  d.style.display = "none"
  d.close()
}   










//lembrar de apagar essas funcoes

// 1 bateria REGULAR
document.getElementById("1R").onclick = function() {
  //1 bateria
  document.getElementById("1batR").style.display = "inline";
  document.getElementById("1batM").style.display = "none";
  document.getElementById("1batMA").style.display = "none";
  //2bateria
  document.getElementById("2batR").style.display = "none";
  document.getElementById("2batM").style.display = "none";
  document.getElementById("2batA").style.display = "none";
  //3bateria
  document.getElementById("3batR").style.display = "none";
  document.getElementById("3batM").style.display = "none";
  document.getElementById("3batA").style.display = "none";
  //4bateria
   document.getElementById("4batR").style.display = "none";
   document.getElementById("4batM").style.display = "none";
   document.getElementById("4batA").style.display = "none";




}

// 1 bateria MICRO
document.getElementById("1M").onclick = function() {
  //1 bateria
  document.getElementById("1batR").style.display = "none";
  document.getElementById("1batM").style.display = "inline";
  document.getElementById("1batA").style.display = "none";
  //2bateria
  document.getElementById("2batR").style.display = "none";
  document.getElementById("2batM").style.display = "none";
  document.getElementById("2batA").style.display = "none";
  //3bateria
  document.getElementById("3batR").style.display = "none";
  document.getElementById("3batM").style.display = "none";
  document.getElementById("3batA").style.display = "none";
  //4bateria
   document.getElementById("4batR").style.display = "none";
   document.getElementById("4batM").style.display = "none";
   document.getElementById("4batA").style.display = "none";


}
// 1 bateria ADVANCED
document.getElementById("1A").onclick = function() {
  //1 bateria
  document.getElementById("1batR").style.display = "none";
  document.getElementById("1batM").style.display = "none";
  document.getElementById("1batA").style.display = "inline";
  //2bateria
  document.getElementById("2batR").style.display = "none";
  document.getElementById("2batM").style.display = "none";
  document.getElementById("2batA").style.display = "none";
  //3bateria
  document.getElementById("3batR").style.display = "none";
  document.getElementById("3batM").style.display = "none";
  document.getElementById("3batA").style.display = "none";
  //4bateria
   document.getElementById("4batR").style.display = "none";
   document.getElementById("4batM").style.display = "none";
   document.getElementById("4batA").style.display = "none";


}

// 2 bateria REGULAR
document.getElementById("2R").onclick = function() {
  //1 bateria
  document.getElementById("1batR").style.display = "none";
  document.getElementById("1batM").style.display = "none";
  document.getElementById("1batA").style.display = "none";
  //2bateria
  document.getElementById("2batR").style.display = "inline";
  document.getElementById("2batM").style.display = "none";
  document.getElementById("2batA").style.display = "none";
  //3bateria
  document.getElementById("3batR").style.display = "none";
  document.getElementById("3batM").style.display = "none";
  document.getElementById("3batA").style.display = "none";
  //4bateria
   document.getElementById("4batR").style.display = "none";
   document.getElementById("4batM").style.display = "none";
   document.getElementById("4batA").style.display = "none";

}

// 2 bateria MICRO
document.getElementById("2M").onclick = function() {
  //1 bateria
  document.getElementById("1batR").style.display = "none";
  document.getElementById("1batM").style.display = "none";
  document.getElementById("1batA").style.display = "none";
  //2bateria
  document.getElementById("2batR").style.display = "none";
  document.getElementById("2batM").style.display = "inline";
  document.getElementById("2batA").style.display = "none";
  //3bateria
  document.getElementById("3batR").style.display = "none";
  document.getElementById("3batM").style.display = "none";
  document.getElementById("3batA").style.display = "none";
  //4bateria
   document.getElementById("4batR").style.display = "none";
   document.getElementById("4batM").style.display = "none";
   document.getElementById("4batA").style.display = "none";


}

// 2 bateria ADVANCED
document.getElementById("2A").onclick = function() {
  //1 bateria
  document.getElementById("1batR").style.display = "none";
  document.getElementById("1batM").style.display = "none";
  document.getElementById("1batA").style.display = "none";
  //2bateria
  document.getElementById("2batR").style.display = "none";
  document.getElementById("2batM").style.display = "none";
  document.getElementById("2batA").style.display = "inline";
  //3bateria
  document.getElementById("3batR").style.display = "none";
  document.getElementById("3batM").style.display = "none";
  document.getElementById("3batA").style.display = "none";
  //4bateria
   document.getElementById("4batR").style.display = "none";
   document.getElementById("4batM").style.display = "none";
   document.getElementById("4batA").style.display = "none";


}