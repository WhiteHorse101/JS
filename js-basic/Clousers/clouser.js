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