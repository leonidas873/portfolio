import './App.css';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import Nav from './components/Nav/Nav.jsx';
import Projects from './components/projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
<Introduction/>
<Nav/>
<Skills/>
<Projects/>
<Contact/>
<Footer/>
    </div>
  );
}

export default App;
