var HearName = document.querySelector('#form_name'),
	HearEmail = document.querySelector('#form_Email'),
	HearPhone = document.querySelector('#form_phone'),
	HearMessage = document.querySelector('#form_message');
var ButtAct = document.querySelector('#form_but'),
	HearForm = document.querySelector('.Admin1'),
	Form = document.querySelector('.hearyour');



ButtAct.addEventListener("click", ()=>{
	if(HearMessage.value == ''){
		HearForm.style.opasity = "100%";
		Form.style.filter = "blur(5px)";
		form.style.cursor = ""
	}
});

