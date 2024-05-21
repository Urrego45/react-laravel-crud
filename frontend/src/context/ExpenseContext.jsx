import { createContext, useContext, useState } from 'react';

import * as expensesApi from '../api/expense';


const ExpenseContext = createContext()


export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([])


  const getExpenses = async () => {
    try {
      const res = expensesApi.getExpenses()
      console.log(res);
      setExpenses(res.data)
    } catch (e) {
      console.log(e);
    }

  }

  const createExpense = async () => {
    try {
      console.log('asd');
    } catch (e) {
      console.log(e);
    }

  }

  const updateExpense = async () => {
    try {
      console.log('asd');
    } catch (e) {
      console.log(e);
    }

  }

  const deleteExpense = async () => {
    try {
      console.log('asd');
    } catch (e) {
      console.log(e);
    }

  }

  const getExpense = async () => {
    try {
      console.log('asd');
    } catch (e) {
      console.log(e);
    }

  }


  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        getExpenses,
        createExpense,
        updateExpense,
        deleteExpense,
        getExpense
      }}>

      {children}

    </ExpenseContext.Provider>
  )
}

