import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './views/Home.js'

const App = () => <div>
    <Routes>
        <Route path='/' element = {<Home />}/>
    </Routes>
</div>

export default App