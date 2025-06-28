import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthWapper  from './context/Authcontext.jsx'
import Uicontext from './context/Uicontext.jsx'
createRoot(document.getElementById('root')).render(
      <Uicontext>
<AuthWapper> 

   <App/>
</AuthWapper>

</Uicontext>
)
