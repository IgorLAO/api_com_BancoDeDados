import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Card from './card'




function App() {
  const [list, setList] = useState([])


  useEffect(() =>{
    const FetchData = async () =>{
      const response = await fetch(`http://localhost:5000/profiles`);
      const data = await response.json()

      setList(data)
    } 
    FetchData()
    
  }, [])
  console.log(list)


  return (
    <>
    <div className='perfis'>
      {list.map((item) => (<>
        <div className='perfil'>
          <img src={item.imagem} alt="" />
          <b>
          {item.nome}
          </b>
          CPF:{item.CPF}
        </div>
      </>))}

        <Card nomesProps= {['igor', 'girafa', 'magico']}/>

    </div>
       
    </>
  )
}

export default App
