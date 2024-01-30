import "./Home.css";
import Activity from "../../components/Activitys/Activity";
import { LuArrowDownCircle } from "react-icons/lu";


const Home = () => {
  return (
    <div className="HomeContent">
      <div className="list-activities">
        <Activity number={2} status={"Pendente"} total={19} />
        <Activity number={4} status={"Em andamento"} total={19} />
        <Activity number={13} status={"Concluido"} total={19} />
        <Activity number={13} status={"Concluido"} total={19} />
      </div>
      <div className="Section-charts">
        <div className="quantity-acts">
          <div className="numRows">
            <p>Quantidade de Atividades para essa semana</p>
          </div>
          <div className="circleQua">
            <div className="numCircleQua">
              5
            </div>
          </div>

          <h4>Veja Mais...</h4>
        </div>



        <div className="content-charts">
            <div className="chartModule">
              
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
