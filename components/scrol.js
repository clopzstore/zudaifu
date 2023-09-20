
import React, { Component ,useEffect } from "react";
useEffect(() => {
    return scrollYProgress.on('change', (latestValue) => {
        if (latestValue > 0.5) {
            controls.start('show');
        } else {
            controls.start('hide');
        }
    });
});
class Scrol extends Component {
    
  render() {
   
    return (
      <>
       
      </>
    );
  }
}
export default Scrol;
