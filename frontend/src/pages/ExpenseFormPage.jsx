import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import * as expensesApi from '../api/expense';


function ExpenseFormPage () {
  const { register, handleSubmit, setValue } = useForm()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    async function loadExpensive () {
      if (params.id) {
        const res = await expensesApi.getExpenseRequest(params.id)
        setValue('type', res.data.type)
        setValue('amount', res.data.amount)
        setValue('description', res.data.description)
        setValue('expense_date', res.data.expense_date)
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

        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type</label>
          <input type="text" className="form-control" id="type" aria-describedby="emailHelp" {... register("type")} />
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input type="decimal" className="form-control" id="amount" {... register("amount")} />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">description</label>
          <input type="text" className="form-control" id="type" aria-describedby="emailHelp" {... register("description")} />
        </div>

        <div className="mb-3">
          <label htmlFor="expense_date" className="form-label">expense_date</label>
          <input type="date" className="form-control" id="expense_date" {... register("expense_date")} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>

    
  )
}


export default ExpenseFormPage