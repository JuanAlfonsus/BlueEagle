import { Outlet } from "react-router-dom";
import Travel from "./assets/travel.svg"
import Navigation from "./components/home/Navigation";

function App() {

  return (
    <>
      {/* Header Home */}
      <div className="flex flex-column items-center" style={{ height: '260px', position: 'relative', marginBottom: 30 }}>
        <img src={Travel} alt="" style={{ width: '100%', height: '250px' }} />
        <div id="balance-card">
          <p>Welcome, Juan!</p>
        </div>
      </div>

      {/* Body Home */}
      <div id="home-menu" style={{ gap: 10 }}>

        <div className="box-menu">
          <i className="fa-solid fa-car-side" style={{ color: "#48034f", fontSize: 25 }}></i>
          <span>Ride</span>
        </div>
        <div className="box-menu">
          <i className="fa-solid fa-car" style={{ color: "#48034f", fontSize: 25 }}></i>
          <span>Rent</span>
        </div>
        <div className="box-menu">
          <i className="fa-solid fa-truck" style={{ color: "#48034f", fontSize: 25 }}></i>
          <span>Delivery</span>
        </div>
        <div className="box-menu">
          <i className="fa-solid fa-van-shuttle" style={{ color: "#48034f", fontSize: 25 }}></i>
          <span>Shuttle</span>
        </div>

      </div>

      {/* Navigation  bar */}
      <Navigation />
    </>
  )
}

export default App
