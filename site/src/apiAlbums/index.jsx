import { useEffect, useState } from 'react'
import './style.scss'





export default function Spotify(){
    const [list, setList] = useState([])
    useEffect(() =>{
        const fetchData = async () =>{
            const res = await fetch('http://localhost:5000/')
            const data = await res.json()

            setList(data)
        }
        
        fetchData()
    })

    return(
        <>
            <div className="MainSpot">
                <h1>Spotify do igao</h1>
                <div className="musicas">
                    {list.map((item) => <>
                        <div className='cardAlbums'>
                            <img src={item.CAPA_ALBUM} alt="" />
                            <h4>{item.NM_MUSICA}</h4>
                            <h6>
                            {item.NM_ALBUM}

                            </h6    >
                            <b>
                            {item.NM_ARTISTA}
                            </b>

                        </div>
                    </> )}
                </div>
            </div>
        </>
    )
}