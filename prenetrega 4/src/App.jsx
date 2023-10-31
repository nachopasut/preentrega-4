
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
function App() {
 
  return (
  <div className='App'>
    <NavBar/>
 <ItemListContainer producto="BOTIN" id="1" precio="12000"/>
   <ItemListContainer producto="PELOTA" id="2" precio= "5000"/>
  </div>
  )
}

export default App
