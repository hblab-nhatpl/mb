import { Route, Routes, } from "react-router-dom";
import { Header, Footer } from "./component";
import { Company, Contact, About } from "./view";
import style from './app.module.scss';


function App() {
  const routers = <div>
    <Header />
    <div className={style.main}>
      <Routes>
        <Route path='/' element={<h1> Welcome to the Motion Bank - Future Spirit!</h1>}>
        </Route>
        <Route path='/about' element={<About/>}>
        </Route>
        <Route path='/company' element={<Company />}>
        </Route>
        <Route path='/contact' element={<Contact/>}>
        </Route>
      </Routes>
      <Footer />
    </div>
  </div>
  return routers;
}

export default App;
