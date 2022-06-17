import React from 'react'
import './ExpenseItem.scss'
// import BarChart from './Chart.js/BarChart'

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

const ExpenseItem = ({
    expense,
    setExpense,
    chartAmount,
    setChartAmount,
}: {
    expense: expenseInterface[]
    setExpense: Function
    chartAmount: chartDataInterface[]
    setChartAmount: Function
}) => {
    const deleteHandler = ({ id }: any) => {
        setExpense(expense.filter(item => item.id !== id))
    }
    const deleteChart = () => {
        setChartAmount(chartAmount.filter(item => item.id !== id))
    }
    // Title: 'No expense found'
    if (expense.length === 0) {
        return <h2 className='expenses-list__fallback'>No expense</h2>
    }
    // //

    return (
        <div>
            {expense.map(item => (
                <div className='expense-item' key={item.id}>
                    <div className='expense-item__date'>
                        <div className='expense-item__date__year'>
                            {item.date.toLocaleString('en-EN', {
                                year: 'numeric',
                            })}
                        </div>
                        <div className='expense-item__date__month'>
                            {item.date.toLocaleString('en-EN', {
                                month: 'long',
                            })}
                        </div>
                        <div className='expense-item__date__day'>
                            {item.date.toLocaleString('en-EN', {
                                day: 'numeric',
                            })}
                        </div>
                    </div>
                    <div className='expense-item__description'>
                        <h2>{item.title}</h2>
                        <div className='expense-item__price'>
                            {item.amount} $
                        </div>
                    </div>
                    <button
                        className='expense-item'
                        onClick={() => {
                            deleteHandler(item), deleteChart()
                        }}
                    >
                        Delete
                    </button>
                </div>
            ))}

            <div>{expense.map(item => item.amount)}</div>
            {/* <BarChart expense={expense} /> */}
        </div>
    )
}

export default ExpenseItem
