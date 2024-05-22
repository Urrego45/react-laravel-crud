import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import * as expensesApi from '../api/expense';


function ExpenseFormPage () {
  const { register, handleSubmit, setValue } = useForm()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    console.log(params.id);
    async function loadExpensive () {
      if (params.id) {
        const res = await expensesApi.getExpenseRequest(params.id)
        console.log(res);
        setValue('type', res.type)
        setValue('amount', res.amount)
        setValue('description', res.description)
        setValue('expense_date', res.expense_date)
      }
    }
    loadExpensive()
  }, [])

  const onSubmit = handleSubmit( async (data) => {
    if (params.id) {
      await expensesApi.updateExpenseRequest(params.id, data)
    } else {
      await expensesApi.createExpenseRequest(data)
    }
    navigate('/')
  })


  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder='Type'
          {... register("type")}
          // className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
        />

        <input
          type="text"
          placeholder='amount'
          {... register("amount")}
          // className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
        />

        <textarea
          rows="3"
          {... register("description")}
          placeholder='Description'
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
        />

        <input
          type="date"
          placeholder='expense_date'
          {... register("expense_date")}
          // className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
        />

        <button>Save</button>

        
      </form>
    </div>
  )
}


export default ExpenseFormPage