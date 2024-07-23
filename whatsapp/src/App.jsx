
import './App.css'
import {Header} from './assets/composants/Header'
import  {SearchBar}  from './assets/composants/SearchBar'
function App() {
  return (
    <>
    <div className='div-app'>
      <section className='left-app'>
        <Header/> 
        <SearchBar/>
      </section>
      <section className='right-app'>
          hello
      </section>  


    </div>
         
    </>
  )
}

export default App
