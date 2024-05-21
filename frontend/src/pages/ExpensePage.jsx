import { useEffect } from 'react';
import { ExpenseProvider } from '../context/ExpenseContext';

function ExpensePage() {
  const { getExpenses, expenses } = ExpenseProvider()

  useEffect(() => {
    console.log(getExpenses);
    // getExpenses()
  }, [])
  
  // if (expenses.length === 0) return (<h1>No expenses</h1>)

  return (
    <div className='grid grid-cols-3 gap-2'>
      <h1>aaaaaaaaaaaaaaaaaaaa</h1>
      {/* {
        expenses.map(expense => (
          <div key={expense.id}>
            <h1>{expense.type}</h1>
          </div>
        ))
      } */}
    </div>
  )
}

export default ExpensePage