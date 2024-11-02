import A from '../assets/Sounds kopyası/A.wav';
import F from '../assets/Sounds kopyası/F.wav';
import C from '../assets/Sounds kopyası/C.wav';
import D from '../assets/Sounds kopyası/D.wav';
import G from '../assets/Sounds kopyası/G.wav';
import B from '../assets/Sounds kopyası/B.wav';
import E from '../assets/Sounds kopyası/E.wav';
import { useEffect, useRef } from 'react';

function SoundsClick() {
  // Ses dosyalarını önceden yüklemek için useRef kullanıyoruz
  const sounds = useRef({
    A: new Audio(A),
    B: new Audio(B),
    C: new Audio(C),
    D: new Audio(D),
    E: new Audio(E),
    F: new Audio(F),
    G: new Audio(G),
  });

  const play = (note) => {
    const audio = sounds.current[note];
    audio.currentTime = 0;  // Ses dosyasını baştan çalmaya başlatır
    audio.play();           // Oynatır
  };

  return (
    <>
      <button onClick={() => play("C")}>C</button>
      <button onClick={() => play("D")}>D</button>
      <button onClick={() => play("E")}>E</button>
      <button onClick={() => play("F")}>F</button>
      <button onClick={() => play("G")}>G</button>
      <button onClick={() => play("A")}>A</button>
      <button onClick={() => play("B")}>B</button>
    </>
  );
}

export default SoundsClick;
