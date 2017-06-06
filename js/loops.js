var cities = ['New York City','Washington DC','Compton','Seattle','LA']
var ul = document.createElement('ul')

for (var x = 0; x < cities.length;x++){//For loop needs three things, instantiate the variable 
	var li = document.createElement('li');	
	/*if(cities[x] !== 'Seattle'){
		console.log(cities[x]);
	}*/
	li.innerHTML = cities[x];
	ul.appendChild(li);


}

document.body.appendChild(ul);


