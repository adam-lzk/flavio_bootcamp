// start: npm run dev
// run - localStorage.setItem('categories', '[]') - in browser console to clear categories list in localStorage
// run - localStorage.setItem('bills', '[]') - bills list...

import { useState, useEffect } from 'react'
import AddBill from './components/AddBill'
import AddCategory from './components/AddCategory'
import BillsTable from './components/BillsTable'
import NavBar from './components/NavBar'

function App() {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(false)  // to first see the AddCategory component when the app starts
  const [shouldShowAddBill, setShouldShowAddBill] = useState(false)
  const [categories, setCategories] = useState([])
  const [bills, setBills] = useState([])
  const [activeCategory, setActiveCategory] = useState('')  //

  useEffect(() => {  // the useEffect() hook is called on the component mount, and on the component update
    const categoriesInLocalStorage = JSON.parse(localStorage.getItem('categories'))
    const billsInLocalStorage = JSON.parse(localStorage.getItem('bills'))

    setCategories(categoriesInLocalStorage)  // to retrieve data stored in localStorage when the application starts
    setBills(billsInLocalStorage)

    if (!categoriesInLocalStorage) {
      setShouldShowAddCategory(true)  // calling setState causes a rerender of the component
    }

    if (!billsInLocalStorage) {
      setShouldShowAddBill(true)
    }
  }, [])  // we need to add a second argument to useEffect, an empty array, to only run our effect on mount

  const addCategory = (category) => {
    const updatedCategories = [...(categories || []), category]  // takes care of the spread when the categories array is null or undefined, defaulting it to an empty array with || []
    setCategories(updatedCategories)  // to update state
    setShouldShowAddCategory(false)
    localStorage.setItem('categories', JSON.stringify(updatedCategories))  // when updated, save categories to local storage
  }

  const showAddCategory = () => {
    setShouldShowAddCategory(true)
  }

  const addBill = (amount, category, date) => {
    const bill = {amount, category, date}
    const updatedBills = [...(bills || []), bill]
    setBills(updatedBills)
    setShouldShowAddBill(false)
    localStorage.setItem('bills', JSON.stringify(updatedBills))
  }

  const showAddBill = () => {
    setShouldShowAddBill(true)
  }

  const removeBill = index => {
    let updatedBills = [...bills]
    updatedBills = updatedBills
      .slice(0, index)
      .concat(updatedBills.slice(index + 1, updatedBills.length))
    setBills(updatedBills)
    localStorage.setItem('bills', JSON.stringify(updatedBills))
  }

  const activeBills = () => {
    return bills
      ?.filter((bill) =>  // ?.filter() - ????????
        activeCategory ? bill.category === activeCategory : true
      )
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
  }

  const setNewActiveCategory = (index) => {
    setActiveCategory(index)  // index is cathegory name
  }

  return (
    <div className="App">
      {shouldShowAddCategory ? (
        <AddCategory onSubmit={addCategory} />
      ) : shouldShowAddBill ? (
        <AddBill onSubmit={addBill} categories={categories} />
      ) : (
        <div>
          <NavBar
            categories={categories}
            showAddCategory={showAddCategory}
            activeCategory={activeCategory}
            setNewActiveCategory={setNewActiveCategory}
          />
          <div className="container flex">
            <BillsTable
              bills={activeBills()}
              showAddBill={showAddBill}
              removeBill={removeBill}
            />
          </div>
        </div>
      )}
    </div>
  ) // activeBills() - why with parenthesis
}

export default App
