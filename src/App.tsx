import React, { useState } from 'react'
import './App.scss'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

function App() {
    const [enteredTitle, setEnteredTitle] = useState<string>('')
    const [enteredAmount, setEnteredAmount] = useState<number | string>('')
    const [enteredDate, setEnteredDate] = useState<string>('')
    const [expense, setExpense] = useState<expenseInterface[]>([])

    interface expenseInterface {
        id: number
        title: string
        amount: number
        date: any
    }

    interface chartDataInterface {
        id: number
        x: string
        y: number | string | null
    }

    const [chartAmount, setChartAmount] = useState<chartDataInterface[]>([
        { id: Math.random(), x: '', y: null },
    ])
    // useEffect(() => {
    //     const temp = localStorage.getItem('expense')
    //     const loadedExpense = JSON.parse(temp)

    //     if (loadedExpense) {
    //         setExpense(loadedExpense)
    //     }
    // }, [])

    // useEffect(() => {
    //     const temp = JSON.stringify(expense)
    //     localStorage.setItem('expense', temp)
    // }, [expense])

    return (
        <div className='App'>
            <ExpenseForm
                enteredTitle={enteredTitle}
                setEnteredTitle={setEnteredTitle}
                enteredAmount={enteredAmount}
                setEnteredAmount={setEnteredAmount}
                enteredDate={enteredDate}
                setEnteredDate={setEnteredDate}
                expense={expense}
                setExpense={setExpense}
                chartAmount={chartAmount}
                setChartAmount={setChartAmount}
            />
            <ExpenseList
                expense={expense}
                setExpense={setExpense}
                chartAmount={chartAmount}
                setChartAmount={setChartAmount}
            />
        </div>
    )
}

export default App
