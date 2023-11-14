import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Awake from './components/Awake/Awake';
import ProjectPage from './pages/Projects/index';

function App() {

  return (
    <>
      <Awake /> {/* This component pings the projects every 14 minutes to keep them awake */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </>
  )
}

export default App
