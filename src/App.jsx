import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Awake from './components/Awake/Awake';

function App() {

  return (
    <>
      <Awake /> {/* This component pings the projects every 14 minutes to keep them awake */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
