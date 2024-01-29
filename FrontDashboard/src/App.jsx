import './App.css'
import Aside from './components/sidebar/Aside'
import { Link, NavLink } from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
function App() {


  return (
    <div className="home">
      <Aside/>
    </div>
  )
}

export default App
