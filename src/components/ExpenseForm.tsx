import { ChartData } from 'chart.js'
import React, { useState } from 'react'
import BarChart from './Chart.js/BarChart'
import './ExpenseForm.scss'

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

const ExpenseForm = ({
    enteredTitle,
    setEnteredTitle,
    enteredAmount,
    setEnteredAmount,
    enteredDate,
    setEnteredDate,
    expense,
    setExpense,
    chartAmount,
    setChartAmount,
}: {
    enteredTitle: string
    setEnteredTitle: Function
    enteredAmount: number | string
    setEnteredAmount: Function
    enteredDate: string
    setEnteredDate: Function
    expense: expenseInterface[]
    setExpense: Function
    chartAmount: any
    setChartAmount: Function
}) => {
    const titleChangeHandler = (event: any) =>
        setEnteredTitle(event.target.value)
    const amountChangeHandler = (event: any) =>
        setEnteredAmount(Number(event.target.value))
    const dateChangeHandler = (event: any) => setEnteredDate(event.target.value)

    const chartData: chartDataInterface[] = [
        {
            id: Math.random(),
            x: new Date(enteredDate).toLocaleString('en-En', {
                month: 'short',
            }),
            y: enteredAmount,
        },
    ]

    const formSubmitHandler = (event: any) => {
        event.preventDefault()

        if (
            enteredTitle.trim().length > 0 &&
            enteredAmount! > 0 &&
            enteredDate.trim().length > 0
        ) {
            setExpense([
                ...expense,
                {
                    id: Math.random().toString(),
                    title: enteredTitle,
                    amount: enteredAmount,
                    date: new Date(enteredDate),
                },
            ])

            let result = chartAmount.reduce((prev: any, current: any) => {
                let item: any = prev.find(
                    (item: chartDataInterface) => item.x === current.x
                )

                if (item) {
                    item.y += current.y
                } else {
                    prev.push(current)
                }

                return prev
            }, [])
            setChartAmount([...result, chartData[0]])

            // setChartAmount(
            //     chartAmount.reduce((prev: chartDataInterface[], current) => {
            //         let item: any = prev.find(
            //             (item: any) => item.x === current.x
            //         )

            //         if (item) {
            //             item.y += current.y
            //         } else {
            //             prev.push(current)
            //         }

            //         return prev
            //     }, [])
            // )

            // chartAmount.reduce(
            //     (prev: chartDataInterface, current: chartDataInterface) => {
            //         let item: any = [prev].find(item => item.x === current.x)

            //         if (item) {
            //             item.y += current.y
            //         } else {
            //             [prev].push(current)
            //         }

            //         return prev
            //     }
            // )

            // setEnteredTitle('')
            // setEnteredAmount('')
            // setEnteredDate('')

            // const addExpenseAmountToChart = () => {
            //     setChartAmount(
            //         chartData.reduce((prev, current) => {
            //             return [
            //                 {
            //                     x: prev.x,
            //                     y: (prev.y += current.y),
            //                 },
            //             ]
            //         }, [])
            //     )
            // }
            // addExpenseAmountToChart()

            // const addExpenseToChartSum = () => {
            //     setChartAmount(
            //         chartAmount.reduce((prev, current) => {
            //             if (prev.x === current.x) {
            //                 return {
            //                     id: Math.random(),
            //                     x: prev.x,
            //                     y: (prev.y += current.y),
            //                 }
            //             } else {
            //                 return prev.concat(current)
            //             }
            //         })
            //     )
            // }

            // const addExpenseToChartSum = () =>
            //     setChartAmount(
            //         chartData.reduce((prev, current) => {
            //             return {
            //                 id: Math.random(),
            //                 x: prev.x,
            //                 y: (prev.y += current.y),
            //             }
            //         })
            //     )

            // const addExpenseToChartConcat1 = () => {
            //     setChartAmount(
            //         chartAmount.reduce((prev: any, current) => {
            //             let item: any = prev.find(
            //                 (item: chartDataInterface) => item.x === current.x
            //             )

            //             if (item) {
            //                 prev.y += current.y
            //             } else {
            //                 prev.push(current)
            //             }

            //             return prev
            //         }, [])
            //     )
            // }
            // const addExpenseToChartConcat2 = () => {
            //     setChartAmount(previousChartData =>
            //         previousChartData.concat(chartData)
            //     )
            // }
            // setChartAmount(
            //     chartAmount.reduce((prev: any, current) => {
            //         let item: any = prev.find(
            //             (item: chartDataInterface) => item.x === current.x
            //         )

            //         if (item) {
            //             item.y += current.y
            //         } else {
            //             prev.push(current)
            //         }

            //         return prev
            //     }, [])
            // )

            // if (chartAmount[chartAmount.length - 1].x === chartData[0].x) {
            //     addExpenseToChartConcat1()
            // } else {
            //     addExpenseToChartConcat2()
            // }

            console.log(chartAmount)
        } else {
        }
    }

    // Create new expense functionality
    const [isEditing, setIsEditing] = useState(true)

    const createNewExpense = () => {
        setIsEditing(false)
    }
    const cancelNewExpense = () => {
        setIsEditing(true)
    }
    // //

    return (
        <div className='new-expense '>
            {isEditing && (
                <button
                    className='btn-add-new-expense'
                    onClick={createNewExpense}
                >
                    Add new Expense
                </button>
            )}
            {!isEditing && (
                <form onSubmit={formSubmitHandler}>
                    <div className='new-expense__controls'>
                        <div className='new-expense__control'>
                            <label>Title</label>
                            <input
                                type='text'
                                value={enteredTitle}
                                onChange={titleChangeHandler}
                            />
                        </div>
                        <div className='new-expense__control'>
                            <label>Amount</label>
                            <input
                                type='number'
                                value={enteredAmount}
                                onChange={amountChangeHandler}
                            />
                        </div>
                        <div className='new-expense__control'>
                            <label>Date</label>
                            <input
                                type='date'
                                value={enteredDate}
                                onChange={dateChangeHandler}
                            />
                        </div>
                    </div>
                    <div className='new-expense__actions'>
                        <button type='submit'>Add Expense</button>
                        <button type='button' onClick={cancelNewExpense}>
                            Cancel
                        </button>
                    </div>
                </form>
            )}
            <BarChart
                chartAmount={chartAmount}
                enteredDate={enteredDate}
                enteredAmount={enteredAmount}
            />
        </div>
    )
}

export default ExpenseForm

let first = { id: Math.random(), x: 'Jan', y: 10 }
let last = { id: Math.random(), x: 'Jan', y: 11 }
let item1 = { id: Math.random(), x: 'Feb', y: 44 }
let item2 = { id: Math.random(), x: 'Feb', y: 77 }
let item3 = { id: Math.random(), x: 'Mar', y: 88 }

const data = [first, last, item1, item2, item3]

// let result = data.reduce((prev, current) => {
//     let item = prev.find(item => item.x === current.x)

//     if (item) {
//         item.y += current.y
//     } else {
//         prev.push(current)
//     }

//     return prev
// }, [])

// console.log(result)
