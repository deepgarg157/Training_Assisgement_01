// const userDetail = [
//     {
//         userName:"Deep",
//         phone:12355641
//     },
//     {
//         userName:"Deep Garg",
//         phone:1235564165
//     }
// ]

// localStorage.setItem("userDetails", JSON.stringify(userDetail))

// console.log(JSON.parse(localStorage.getItem("userDetails")));

let form = document.querySelector('form')
let div = document.querySelector(".div")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = e.target.username.value;
    let email = e.target.email.value;
    let phone = e.target.phone.value;
    

    localStorage.setItem("userInfo", JSON.stringify(userDetail))
    let userDetail = JSON.parse(localStorage.getItem("userInfo") ?? []);
    userDetail = ({
        userName: name,
        userEmail: email,
        userPhone: phone
    })
    console.log(userDetail);


})

// let displayUserInfo=()=>{
//     let userDetail = JSON.parse(localStorage.getItem("userInfo") ?? []);
//     // userDetail.forEach(element, index => {
//     //     console.log(element);
//     // });
//     console.log(userDetail);

// }

// displayUserInfo()