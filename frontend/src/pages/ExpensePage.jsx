import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

// import { ExpenseProvider } from '../context/ExpenseContext';

import * as expensesApi from '../api/expense';


function ExpensePage() {
  const [ expenses , setExpenses] = useState([])

  useEffect(() => {
    getExpenses()
  }, [])

  const getExpenses = async () => {
    try {
      const res = await expensesApi.getExpensesRequest()
      setExpenses(res.data)
    } catch (e) {
      console.log(e);
    }
  }

  const deleteExpenses = async (id) => {
    console.log(id);
    try {
      await expensesApi.deleteExpenseRequest(id)
      getExpenses()
    } catch (e) {
      console.log(e);
    }
  }
  
  if (expenses.length === 0) return (<h1>No expenses</h1>)

  return (
    <div >
      <div className="d-grid gap-2">
        <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
      </div>

      <table className='table table-striped'>
        <thead className='bg-primary text-white'>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Expense date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map(expense => (
              <tr key={expense.id}>
                <td>{expense.id}</td>
                <td>{expense.type}</td>
                <td>{expense.amount}</td>
                <td>{expense.description}</td>
                <td>{expense.expense_date}</td>
                <td>
                  <Link to={`/edit/${expense.id}`}>Edit</Link>
                   - 
                  <button onClick={() => deleteExpenses(expense.id)}>Delete</button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
      
    </div>
  )
}

export default ExpensePage