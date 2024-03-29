import Navbar from "./components/Navbar"
import Search from './components/Search';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';

function App(){
    return(<>
        <Navbar />
        <Search />
        <Product />
        <About />
        <Contact />
      </>)
}
export default App