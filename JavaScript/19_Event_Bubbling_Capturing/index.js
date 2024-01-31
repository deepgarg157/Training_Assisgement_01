const parent = document.querySelector('.parent')
const child1 = document.querySelector('.child1')
const child2 = document.querySelector('.child2')

parent.addEventListener('click', functionParent)
child1.addEventListener('click', functionChild1)
child2.addEventListener('click', functionChild2)

function functionParent(){
    console.log('parent clicked')
}

function functionChild1(){
    console.log('child1 clicked')
}

function functionChild2(e){
    e.stopPropagation()
    console.log('child2 clicked')
}