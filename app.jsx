import React from 'react'
import Server from 'react-dom/server'


let Greet = () => <h1>Hello, world!</h1>
console.log(Server.renderToString(<Greet />))
