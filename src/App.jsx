import React from 'react'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Listarticles from "./component/articles/Listarticles";

import Listcategories from "./component/categories/Listcategories";

import Listscategories from "./component/scategories/Listscategories";
import Menu from './component/Menu';

const App = () => {
  return (
  

      <Router>
        <Menu/>
<Routes>
<Route path="/articles" element={<Listarticles/>}/>


<Route path="/categories" element={<Listcategories/>}/>

<Route path="/scategories" element={<Listscategories/>}/>

</Routes>
</Router>

  )
}

export default App
