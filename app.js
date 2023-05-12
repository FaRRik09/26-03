// var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
// var results = {}
// for (var i = 0; i < tags.length; i++) {
//     var a = tags[i];
//     if (results[a] != undefined)
//         ++results[a];
//     else
//         results[a] = 1;
// }
// for (var key in results)
//     console.log(key + '' + ':' + '' + results[key]);

// FizzBuzz
// DZ 1
// for(var i = 0; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log('FizzBuzz')
//     } else if (i % 3 === 0){
//         console.log('Fizz')
//     } else if (i % 5 === 0){
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
// }

// DZ 2
var drinks = ['milk', 'beer', 'beer', 'milk', 'milk']
for (var i = 0; i < drinks.length; i ++){
    if (drinks[i] === 'milk'){
        console.log('good')
    } else if (drinks[i] === 'beer'){
        console.log('bad')
    }
}

