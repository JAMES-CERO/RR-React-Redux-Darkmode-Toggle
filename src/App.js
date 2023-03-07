import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch } from 'react-redux';
import {toggleDark, toggleLight} from './components/modeSlice'

function App() {
  
  const mode = useSelector((state) => state.mode)
  const dispatch = useDispatch()

  const toggleSwitch = () => {
    mode.darkmode 
    ? dispatch(toggleLight())
    : dispatch(toggleDark())
  }

  return (
    <div style={{ backgroundColor: mode.color1, color: 'black' }} className="App">
      <Nav  />
      <button onClick={toggleSwitch}>
        toggle Me!
      </button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
