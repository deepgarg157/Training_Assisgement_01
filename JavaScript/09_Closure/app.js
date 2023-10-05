 // function outer(){
    //     let name='deep'
    //     function inner(){
    //         console.log(`name: ${name}`);
    //     }
    //     inner()
    // }
    // outer()

    // document.getElementById('gray').addEventListener('click', function(){
    //     document.body.style.backgroundColor='gray'
    // })

    // document.getElementById('green').addEventListener('click', function(){
    //     document.body.style.backgroundColor='green'
    // })

    // function outer(){
    //     let name='deep'
    //     function inner(x, y){
    //         console.log(name);
    //         return x+y

    //     }
    //     console.log(inner(3,4))
    // }

    // outer()

    // function clickHandler(color){
    //     document.body.style.backgroundColor=`${color}`
    //     return function(){
    //             document.body.style.backgroundColor = `${color}`
    //         }
    // }

    // document.getElementById('gray').addEventListener('click', clickHandler('gray'))

    // function makeFunc() {
    //     const name = "Mozilla";
    //     function displayName() {
    //         console.log(name);
    //     }
    //     return displayName;
    // }

    // const fn=makeFunc();
    // fn()

    // var n = 8
    // function square(num) {
    //     let ans = num * num
    //     return ans
    // }

    // const output = square(5)
    // const output1 = square(n)
    // console.log(output);
    // console.log(output1);

    // function x(){
    //     var a=7;
    //     function y(){
    //         console.log(a);
    //     }

    //     return y
    // }

    // const z= x()
    // console.log(z);
    // console.log(typeof z);
    // z()

    function x(){
        var a=7;
        function y(){
            console.log(`output ${a}`);
        }
        y();
    }

    x();

    const grayColor=document.getElementById('gray')
    grayColor.addEventListener('click', function(){
        document.body.style.backgroundColor="gray"
    })

    const greenColor=document.getElementById('green')
    greenColor.addEventListener('click', function(){
        document.body.style.backgroundColor="green"
    })