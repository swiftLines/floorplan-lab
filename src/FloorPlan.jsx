import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

const FloorPlan = () => {
  return (
    <div>
      <Bedroom bedNum={1}/>
      <Kitchen />
      <Bath bathSize={'Full'}/>
      <Bedroom bedNum={2}/>
      <LivingRoom />
      <Bath bathSize={'Half'} />
      <Bedroom bedNum={3}/> 
    </div>
  );
}
 
export default FloorPlan;