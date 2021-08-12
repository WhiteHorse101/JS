/*
    Object Oriented Programming in JS
    JS allows one to create objects without its class 
    This was one way of creating js objects, this method is called as JSON [Javascript Object Notation]
*/ 


var car = {

    color: 'Black',
    company: 'Audi',
    model: 'Q3',
    price: 5600000,
    variants : ['Petrol','Diesel','Electric'],

    /*below we have created and function using function expr method the same we as we have seen in prac.js file
      here the function wont be called by default even if we call 'car' object, so if you want to access this function you 
      need to call is explicitly  */

    origin: function(){
        console.log('Audi is an German origin car manufacturer');
        
    }
}

for(let i =0; i<3; i++){
    console.log(car.variants[i]); // for loop to access and print array named 'variants' in car object 
}

// there is another way of printing content of array that is using 'For Each Loop'

car.variants.forEach(function(val,idx){ 
    console.log(val,idx);
})

/* Above is the eg of for each loop here we can see we have defined a func in foreach that accepts val,idx 
   and pritns it using print statement i.e console.log*/

