import Oven from './Oven'
import Sink from './Sink'

const Kitchen = () => {
  return (
    <div className='kitchen'>
      <div id="kitchen">
        Kitchen
      </div>
      <Oven />
      <Sink />
    </div>
  )
}

export default Kitchen