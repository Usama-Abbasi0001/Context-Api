import React, { useContext } from 'react'
import { data,data1,data2 } from '../App';



function ChalidC() {
  const context =  useContext(data1);
    const context1 = useContext(data2);
  return (
    <>
{/* <data.Consumer>
    {
        (name)=>{
            return(
                <div>{name}</div>
            )
        }
    }
</data.Consumer> */}

<div> Context Hook  <br />  {context} <br />{context1}</div>

    </>
  )
}

export default ChalidC;
