import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ExpensePage from './pages/ExpensePage';


export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<ExpensePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
