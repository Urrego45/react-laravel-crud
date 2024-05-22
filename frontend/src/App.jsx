import './customcss/style.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ExpensePage from './pages/ExpensePage';
import ExpenseFormPage from './pages/ExpenseFormPage';


export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<ExpensePage />} />
          <Route path='/create' element={<ExpenseFormPage />} />
          <Route path='/edit/:id' element={<ExpenseFormPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
