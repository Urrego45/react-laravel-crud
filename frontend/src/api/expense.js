import axios from './axios';


export const getExpensesRequest = async () => axios.get('/expenses')

export const createExpenseRequest = async (expense) => axios.post('/expenses', expense)

export const updateExpenseRequest = async (id, expense) => axios.put(`/expenses/${id}`, expense)

export const deleteExpenseRequest = async (id) => axios.delete(`/expenses/${id}`)

export const getExpenseRequest = async (id) => axios.get(`/expenses/${id}`)



