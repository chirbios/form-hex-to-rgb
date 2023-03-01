import { useState } from 'react'

import './App.css'

export default function App() {
  const [hex, setHex] = useState('');

  function convertToRGB(){
  if(hex.length != 6){
      throw "Ошибка!"
  }
  let  aRgbHex = hex.match(/.{1,2}/g);
  let aRgb = [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16)
  ];
  console.log(aRgb)
  return aRgb;
}

  return (
    <form onSubmit={e => setHex(e.target.value)}
      style={{background: `#${hex}`}}>
      <input 
        placeholder='Введите цвет'
        maxLength={6}
        id='name' name='name' 
        value={hex}
        onChange={e => setHex(e.target.value)}/>
      <label htmlFor='name'>{convertToRGB}</label>
    </form>
  )
}

// setRgb(function hex2rgb(c) {
//   let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
//   return result ? {
//       r: parseInt(result[1], 16),
//       g: parseInt(result[2], 16),
//       b: parseInt(result[3], 16)
//   } : 'Ошибка';
// })