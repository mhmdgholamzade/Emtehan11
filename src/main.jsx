import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import './css/BootstrapMin.css';
import './css/MagnificPopup.css';
import './css/OwlCarouselMin.css';
import './css/OwlThemeDefault.css';
import './css/style.css';
import './css/font-awesome-4.7.0/css/FontAwesome.min.css';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
