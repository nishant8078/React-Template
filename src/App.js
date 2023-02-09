import React from 'react'
import { Fragment } from 'react'
import { Route,Routes} from 'react-router-dom'
import Header from './Header'
import Body from './Body'
import Casestudy from './pages/Casestudy'
import Process from './pages/Process'
import Industries from './pages/Industries'
import Hiring from './pages/Hiring'
import Call from './pages/Call'



function App() {
  return (
<>

  <Header name1="Scehdule a call" name2="we are hiring" />
    <Routes>
  <Route exact path='/casestudy' element={<Casestudy />}/>
  <Route exact path='/process' element={<Process />}/>
  <Route exact path='/industries' element={<Industries />}/>
  <Route exact path='/CallUs' element={<Call />}/>
  <Route exact path='/Hiring' element={<Hiring />}/>
  <Route exact path='/' element={<Body />}/>
  </Routes>
</>
  )
}

export default App



// <Route exact path='/'
//       element={
//         <Fragment>
//           < Header name1="Scehdule a call" name2="we are hiring" />
            
//             < Body />
//         </Fragment>
//       }
//     />