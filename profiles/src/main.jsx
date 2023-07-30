import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss' 
import Spotify from './apiAlbums/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Spotify/>
  </React.StrictMode>,
)
