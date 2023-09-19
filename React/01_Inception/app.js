// const heading=React.createElement('h1', {}, 'Hello World with React');
// console.log(heading);
// console.log(typeof heading);
// const root=ReactDOM.createRoot(document.getElementById('root'))
// console.log(root);
// console.log(typeof root);
// root.render(heading)


/* <div id="parent">
    <div id="child">
        <h1>I am h1 heading</h1>
    </div>
</div> */
     
const parent=React.createElement('div', {id:'parent'},[
React.createElement('div', {id : 'child1'},
[React.createElement('h1', {}, 'I am h1 heading'),
 React.createElement('h2', {}, 'I am h2 heading')]
),
React.createElement('div', {id : 'child2'},
[React.createElement('h1', {}, 'I am h1 heading'),
 React.createElement('h2', {}, 'I am h2 heading')]
)
]

)

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)