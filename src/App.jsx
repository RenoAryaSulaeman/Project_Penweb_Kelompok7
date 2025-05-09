import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RecipeList from "./Containers/RecipeList"
import RecipeDetail from "./Containers/RecipeDetail"

function App() {
  return (
    <>
    <Router>
      <div className="fixed flex justify-center items-center w-screen h-screen -z-10 pointer-events-none">
        <h1 className="text-7xl text-orange-100">@u@</h1>
      </div>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/detail/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
