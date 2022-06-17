import React, { useState } from 'react'
import './ExpenseList.scss'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'

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

const ExpenseList = ({
    expense,
    setExpense,
    chartAmount,
    setChartAmount,
}: {
    expense: expenseInterface[]
    setExpense: Function
    chartAmount: any
    setChartAmount: Function
}) => {
    const [isfiltered, setIsFiltered] = useState(true)

    const startFilterHandler = () => {
        setIsFiltered(false)
    }

    const cancelFilterHandler = () => {
        setIsFiltered(true)
    }

    // set current month
    const [filteredMonth, setFilteredMonth] = useState(new Date().getMonth())
    //

    // Filter operation
    const filterExpenses = expense.filter(item => {
        return item.date.getMonth().toString() === filteredMonth
    })
    // //

    // No filter operation
    const noFilterExpenses = expense.filter(item => {
        return item.date.getMonth().toString() | filteredMonth
    })
    // //

    const filterChangeHandler = (selectedMonth: any) => {
        setFilteredMonth(selectedMonth)
    }

    // Title: 'No expense found'
    if (expense.length === 0) {
        return (
            <div className='expenses-list__fallback'>
                <h2>No expense</h2>
            </div>
        )
    }
    // //

    return (
        <div className='expenses'>
            {isfiltered && (
                <div>
                    <button
                        className='expenses'
                        type='button'
                        onClick={startFilterHandler}
                    >
                        Filter
                    </button>

                    <ExpenseItem
                        expense={noFilterExpenses}
                        setExpense={setExpense}
                        chartAmount={chartAmount}
                        setChartAmount={setChartAmount}
                    />
                </div>
            )}
            {!isfiltered && (
                <div>
                    <ExpensesFilter
                        selected={filteredMonth}
                        onChangeFilter={filterChangeHandler}
                        onCancelFilter={cancelFilterHandler}
                    />
                    <ExpenseItem
                        expense={filterExpenses}
                        setExpense={setExpense}
                        chartAmount={chartAmount}
                        setChartAmount={setChartAmount}
                    />
                </div>
            )}
        </div>
    )
}

export default ExpenseList
