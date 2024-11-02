import A from '../assets/Sounds kopyası/A.wav';
import F from '../assets/Sounds kopyası/F.wav';
import C from '../assets/Sounds kopyası/C.wav';
import D from '../assets/Sounds kopyası/D.wav';
import G from '../assets/Sounds kopyası/G.wav';
import B from '../assets/Sounds kopyası/B.wav';
import E from '../assets/Sounds kopyası/E.wav';

function SoundsClick() {


  const play = (e) =>{
    const audio = new Audio(e)
    audio.play(e)
  }
    

    // function clickHandler(e){
    //     console.log(e.target.value);
    //     if (e.target.value == 'C'){       
    //       play(e.target.value)
            
    //     }
    // }

  return (
   <>
   <button onClick={() => play(C)} value="C">C</button>
   <button onClick={() => play(D)} value="D">D</button>
   <button onClick={() => play(E)} value="E">E</button>
   <button onClick={() => play(F)} value="F">F</button>
   <button onClick={() => play(G)} value="G">G</button>
   <button onClick={() => play(A)} value="A">A</button>
   <button onClick={() => play(B)} value="B">B</button>
   </>
  )
}

export default SoundsClick
