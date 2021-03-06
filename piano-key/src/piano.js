import React , {useEffect, useContext} from 'react';
import { AudioContext } from '../src/utility/AudioContext';

const Piano = () => {
const {setInstrument,playNote} = useContext(AudioContext)
useEffect(()=>{
    console.log('effect reload')
    setInstrument('acoustic_grand_piano')
},[])
const HandleClick =()=>{
    console.log('clicked play btn')
    playNote("C4")
}
    return ( 
         <button onClick={HandleClick} className="Btn">Play</button>
    );
}
 
export default Piano;