title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';

console.log("-----Task 1-----")

console.log("Version 1")
console.log(title + " " + name + " " + surname)
console.log("ul." + " " + street)
console.log(zip + " " + city)
console.log(country.toUpperCase())

console.log("Version 2")
console.log(`${title} ${name} ${surname}`)
console.log(`ul. ${street}`)
console.log(`${zip} ${city}`)
console.log(`${country.toUpperCase()}`)

/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
