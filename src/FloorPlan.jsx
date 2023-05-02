import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

function FloorPlan() {
  return (
    <div className="floor-plan-container">
      <div className="container-1">
        <div className="bedroom" id="bedroom-1">
          <Bedroom bedNum={1}/>
        </div>
        <div className="bath" id="full-bath">
          <Bath size='Full'/>
        </div>
        <div className="bedroom" id="bedroom-2" >
          <Bedroom bedNum={2}/>
        </div>
      </div>
      <div className="container-2">
        <LivingRoom />
        <div className="bath" id="half-bath">
          <Bath size='Half'/>
        </div>
      </div>
      <div className="container-3">
        <div>
          <Kitchen />
        </div>
        <div className="bedroom" id="bedroom-3" >
          <Bedroom bedNum={3}/>
        </div>
      </div>
    </div>
  )
}

export default FloorPlan