function outer(arg1){

    let var1 = 10;
    let x = 10;

    function inner1(arg2){

        let var2 = 20;
        let x = 20;

        function inner2(arg3){

            let var3 = 30;
            let x = 30;

            console.log(x);
            console.log(arg1,var1, arg2, var2, arg3, var3);


        }
        
        return inner2 
    }

    return inner1
    //return 10   
}



let x = outer('param1')

x('param2')

function checkthis(){

    console.log(this)
}

let a = {

    a: 10,
    b: 'abc',
    c: true,
    d: function(){

        console.log(this)
    },
    20:800,     //here we have taken number as property but we cannot call it directly because js considers this as a string
    e: {
        l:25,
        m: 'rishabh',

        f:{
            n:'json',
            o:100

        }
    }

}

console.log(a.e.l)
console.log(a.e.f.n)
// console.log(a.20) uncomment this, here you will face error because it not the right way of accesing that token 

console.log(a[20]) // here you can see 20 can be accessed this way 

