import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import FoodData from "../foodData"
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState(FoodData)
  const [query, setQuery] = useState('')
 
  useEffect(()=>{
    setData([...FoodData].filter((item)=>item.name.toLowerCase().includes(query)))
  },[query])

  const filterData = (e) => {
    if (e.target.innerText !== 'All') {
      setData(FoodData.filter((item) => e.target.innerText.toLowerCase() == item.category.toLowerCase()))
      return
    }
    setData(FoodData)
  }

  return (
    <>
      <Navbar query={query} setQuery={setQuery} />
      <main className="px-5">
        <h2 className="text-2xl mb-4 font-bold">Find the best food</h2>
        <ul className="categories mb-4 flex flex-wrap gap-2">
          <li className="bg-white p-2 rounded font-bold border text-sm cursor-pointer hover:bg-green-300 hover:text-white transition-all duration-200" onClick={filterData} >All</li>
          <li className="bg-white p-2 rounded font-bold border text-sm cursor-pointer hover:bg-green-300 hover:text-white transition-all duration-200" onClick={filterData} >Lunch</li>
          <li className="bg-white p-2 rounded font-bold border text-sm cursor-pointer hover:bg-green-300 hover:text-white transition-all duration-200" onClick={filterData} >Breakfast</li>
          <li className="bg-white p-2 rounded font-bold border text-sm cursor-pointer hover:bg-green-300 hover:text-white transition-all duration-200" onClick={filterData} >Dinner</li>
          <li className="bg-white p-2 rounded font-bold border text-sm cursor-pointer hover:bg-green-300 hover:text-white transition-all duration-200" onClick={filterData} >Snacks</li>
        </ul>
        <ProductList data={data} />
      </main>
    </>
  )
}

export default App
