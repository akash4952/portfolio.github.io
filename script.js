let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'default'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

    if(mode == 'orange'){
		document.getElementById('theme-style').href = 'orange.css'
	}

	localStorage.setItem('theme', mode)
}

function myFunction(){
	Swal.fire({
		title: 'Hi, my name Akash Badola for further detail go and explore my portfolio',
		imageWidth: 400,
		imageHeight: 500,
		
	  })

	  
	 
}
 

  const email=document.querySelector('#email');
  const border=document.querySelector(".input-field")
  const icon1=document.querySelector(".icon1");
  const icon2=document.querySelector(".icon2")
  const error=document.querySelector(".error-text")
  const btn =document.querySelector("#submit-btn")
  let regExp=/^[^]+@[^ ]+\.[a-z]{2,3}$/;

  function check(){
	  if(email.value.match(regExp)){
		email.style.borderColor="#27ae60"
		icon1.style.display="none";
		icon2.style.display="block"; 
		error.style.display="none";
		btn.style.display="block"

	  }
	  else{
		  email.style.borderColor="#e74c3c"
		  icon1.style.display="block";
		  icon2.style.display="none";
		  error.style.display="block"
		  btn.style.disabled=true;
		  btn.style.display="none"

	  }
}
