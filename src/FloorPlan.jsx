import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import BedroomList from "./BedroomList";
import BathList from "./BathList";

function FloorPlan(props) {
  return (
    <div>
      <Kitchen />
      <LivingRoom />
      <BedroomList />
      <BathList />
    </div>
  )
}

export default FloorPlan