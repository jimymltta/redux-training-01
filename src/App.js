import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./redux/index";
import logo from "./assets/reduxbank-logo.png";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  console.log(account);
  console.log(depositMoney);
  console.log(withdrawMoney);

  return (
    <div className="container">
      <img src={logo} alt="redux bank" />

      <div className="App">
        <h1>You currently have</h1>
        {(account < 0 && <h1 style={{ color: "red" }}>{account}$</h1>) ||
          (account > 0 && <h1 style={{ color: "#32a877" }}>{account}$</h1>) ||
          (account === 0 && <h1 style={{ color: "#de3e43" }}>{account}$</h1>)}
        <div className="dorw100">
          <button className="depositBtn" onClick={() => depositMoney(100)}>
            Deposit 100$
          </button>
          <button className="withdrawBtn" onClick={() => withdrawMoney(100)}>
            Withdraw 100$
          </button>
        </div>
      </div>
      <h4>This is a simple exercise to learn Redux.</h4>
    </div>
  );
}

export default App;
