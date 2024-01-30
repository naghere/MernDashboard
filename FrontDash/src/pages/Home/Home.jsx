
import './Home.css'
import Activity from '../../components/Activitys/Activity';
import { MdOutlinePendingActions } from "react-icons/md";

const Home = () => {
  return (
    <div className='HomeContent'>
      <h1>Home</h1>
      <div className="list-activities">
        <Activity number={2} status={"Pendente"} total={19}/>
        <Activity number={4} status={"Em andamento"} total={19}/>
        <Activity number={13} status={"Concluido"} total={19}/>
      </div>
      <div className="carrosel">
        
      </div>
    </div>
  )
}

export default Home
