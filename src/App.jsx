import { BrowserRouter, Routes, Route } from 'react-router-dom' // Import Routes here
import { Home } from './pages/Home' // Import your actual Home page component
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App