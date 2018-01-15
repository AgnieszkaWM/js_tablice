var femaleName = ['Joanna','Wanda','Marta','Zofia'];
var maleNames = ['Paweł','Krzysztof', 'Michał', 'Rafał'];
var allNames = femaleName.concat(maleNames);

console.log(allNames);

var newName = prompt('Wpisz imię');

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
	alert(allNames);
	console.log(allNames);
} else {
	alert('Wybierz inne imię');
	console.log('Wybierz inne imię');
}

