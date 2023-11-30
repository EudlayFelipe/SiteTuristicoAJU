window.addEventListener('scroll', function(){
    let header = document.querySelector('.h')
    header.classList.toggle('rolagem' ,window.scrollY > 0)
})



function submitForm(event) {
    event.preventDefault();
   
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
  
    alert("Nome: " + name + "\nEmail: " + email + "\nIdade: " + age);
  }