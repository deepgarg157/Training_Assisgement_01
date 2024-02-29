async function api() {
   const res = await  fetch('https://jsonplaceholder.org/posts')
   const data = await res.json()
   console.log(data)
        // .then((response) => response.json())
        // .then((data) => console.log(data))
}

api()