import ReactPlayer from 'react-player'
import AlwaysBalancedDemo from '../media/always-balanced-demo.mp4'

function AlwaysBalanced() {

  return (

    <div >
      <ReactPlayer className="react-player"
        playing
        controls={true}
        url={[
          {src: AlwaysBalancedDemo, type: 'video/mp4'},
        ]}
      />
    </div>
    
  );
  
}

export default AlwaysBalanced;