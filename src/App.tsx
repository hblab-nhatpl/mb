import { Header } from "./component/header/Header";
import { Route, Routes,} from "react-router-dom";
import { About } from "./view/about/About";


function App() {
  const routers = <main>
    <Header />
    <Routes>
      <Route path = '/' element= {<h1> Welcome to the Motion Bank - Future Spirit!</h1>}>
      </Route>
      <Route path = '/about' element={<About/>}>
      </Route>
      <Route path = '/company' element= {<h1> Welcome to the Motion Bank - Future Spirit! : Company Page</h1>}>
      </Route>
      <Route path = '/contact' element= {<h1> Welcome to the Motion Bank - Future Spirit!: Contact Page</h1>}>
      </Route>
    </Routes>
  </main>
  return routers;
    
  
}

export default App
