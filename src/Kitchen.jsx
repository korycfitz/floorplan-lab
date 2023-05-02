import Oven from './Oven'
import Sink from './Sink'

const Kitchen = (props) => {
  return (
    <>
      <div>Kitchen</div>
      <div><Oven /></div>
      <Sink />
    </>
  )
}

export default Kitchen