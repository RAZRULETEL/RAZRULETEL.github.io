"use strict"
let cost_and_time_array = [
					[
						[3000,5000,10000],
						[1,1.5,1.7],
						[1,1.5,2]
					],
					[
						[5,7,15],
						[2,5,7],
						[2,4,8]
					]
				];
let calculator = {
	type:-1,
	design:-1,
	adaptability:-1,
	calculate_cost:function(){
		return cost_and_time_array[0][0][this.type] * cost_and_time_array[0][1][this.design] * cost_and_time_array[0][2][this.adaptability];
	},
	calculate_time:function(){
		return cost_and_time_array[1][0][this.type] + cost_and_time_array[1][1][this.design] + cost_and_time_array[1][2][this.adaptability];
	},
	can_calculate:function(){
		if(this.type == -1 || this.design == -1 || this.adaptability == -1)
			return false;
		else
			return true;
	}
}
/*
let skip = false;
if(confirm("Запустить подсчёт сроков и стоимости на promptах ?")){
	siteTypePrompt();
	siteDesignPrompt();
	siteAdaptabilityPrompt();
	if(!skip)
		alert("Стоимость: "+calculator.calculate_cost()+"руб.\nСроки: "+calculator.calculate_time()+" дней.");
calculator.type = -1;
calculator.design = -1;
calculator.adaptability = -1;
}

function siteTypePrompt(){
	let type = prompt("Сайт какого типа вы хотите ?\n 1. Визитка\n 2. Лендинг\n 3. Корпоративный\nPS: принимаються как числа так и слова","Визитка");
	if(type!=null){
		switch(type.toLowerCase()){
			case "1":
			case "визитка":
				calculator.type = 0;
			break;
			case "2":
			case "лендинг":
				calculator.type = 1;
			break;
			case "3":
			case "корпоративный":
				calculator.type = 2;
			break;
		}
		if(calculator.type == -1){
			alert("Не так не пойдёт, давай нормальный ответ");
			siteTypePrompt();
		}
	}else
		if(confirm("Уже уходишь? Так быстро?")){
			skip = true;
			return;
		}else
			siteTypePrompt();	
}


function siteDesignPrompt(){
	if(skip)
		return;
	let type = prompt("Какой дизайн вы хотите на своём сайте ?\n 1. Обычный\n 2. Hi-tech\n 3. Максимум эффектов\nPS: принимаються как числа так и слова","Обычный");
	if(type!=null){
		switch(type.toLowerCase()){
			case "1":
			case "обычный":
				calculator.design = 0;
			break;
			case "2":
			case "hi-tech":
				calculator.design = 1;
			break;
			case "3":
			case "максимум эффектов":
				calculator.design = 2;
			break;
		}
		if(calculator.design == -1){
			alert("Не так не пойдёт, давай нормальный ответ");
			siteDesignPrompt();
		}
	}else
		if(confirm("Уже уходишь? Так быстро?")){
			skip = true;
			return;
		}else
			siteDesignPrompt();
}


function siteAdaptabilityPrompt(){
	if(skip)
		return;
	let type = prompt("Выберите адаптивность:\n 1. ПК\n 2. Android\n 3. Все платформы\nPS: принимаються как числа так и слова","ПК");
	if(type!=null){
		switch(type.toLowerCase()){
			case "1":
			case "пк":
				calculator.adaptability = 0;
			break;
			case "2":
			case "android":
				calculator.adaptability = 1;
			break;
			case "3":
			case "все":
			case "все платформы":
				calculator.adaptability = 2;
			break;
		}
		if(calculator.adaptability == -1){
			alert("Не так не пойдёт, давай нормальный ответ");
			siteAdaptabilityPrompt();
		}
	}else
		if(confirm("Уже уходишь? Так быстро?")){
			skip = true;
			return;
		}else
			siteAdaptabilityPrompt();
}*/


function onTypeChanged(){
	let type = document.getElementById('type');
	calculator.type = type.value;
	type.style.color = "#102031";
	onConditionsChanged();
}

function onDesignChanged(){
	let design = document.getElementById('design');
	calculator.design = design.value;
	design.style.color = "#102031";
	onConditionsChanged();
}

function onAdaptabilityChanged(){
	let adaptability = document.getElementById('adaptability');
	calculator.adaptability = adaptability.value;
	adaptability.style.color = "#102031";
	onConditionsChanged();
}

function onConditionsChanged(){
	if(calculator.can_calculate()){

		let time = document.getElementById('time');
		time.innerHTML = calculator.calculate_time()+" дней";

		let cost = document.getElementById('cost');
		cost.innerHTML = calculator.calculate_cost()+"руб.";

	}
}

let options = {threshold: 0};

let observer = new IntersectionObserver(callback, options);

let target = $('section');

for(let item of target){
	observer.observe(item);
} 
/*target.each(function(item, index){
	observer.observe(index);
});*/

let options_stats = {threshold: 0.9};

let observer_stats = new IntersectionObserver(call_stats, options_stats);

observer_stats.observe($("section.statistics")[0]);

function call_stats(entries, observer){
	if(entries[0].isIntersecting){
		console.log("+");
  		fromTo($("#clients")[0], 0, 120);
  		fromTo($("#hours")[0], 0, 4600);
  		fromTo($("#projects")[0], 0, 340);
  		fromTo($("#prizes")[0], 0, 23);
  		observer_stats.unobserve($("section.statistics")[0]);
  	}
};

function callback(entries, observer){
  entries.forEach(entry => {
  	if(entry.isIntersecting){
  		//console.log(entry);
  		entry.target.style.animation = "to_screen 1.7s forwards";
  	}
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};

function rand(min, max){
	// Returns a random integer from min to max:
	Math.floor(Math.random() * max) + min;
}

function fromTo(object, from, to){
	let i = from;
	let k=1;
	if(to>600){
		while(3000/(to/k)<5){
			k++;
		}
		
	}
	let cycle = setInterval(function() {
		object.innerHTML = i;
		if(i == to)
			clearInterval(cycle);
		i+=k;
	},3000/(to-i));
}
$('a[href*="#"]').click(function(){
	$('html, body').animate({scrollTop: $($(this).attr("href")).offset().top - 60 + "px"});
})
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

let img_observer = new IntersectionObserver(highResImg, options);

for(let item of $(".img-loading")){
	img_observer.observe(item);
} 

function highResImg(entries, observer){
	entries.forEach(entry => {
  	if(entry.isIntersecting){
  		//console.log(entry.target.attributes["normal-resolution"].value);
  		entry.target.src = entry.target.attributes["normal-resolution"].value;
  		$(entry.target).removeClass("img-loading");
  	}
  });
}

setTimeout($.magnificPopup.open({
  items: {
      src: '#popup',
      type: 'inline'
  }
}),30000);