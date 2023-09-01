function BillsTable(props) {
  const triggerShowAddBill = () => {
    props.showAddBill()
  }

  const removeBill = (index) => {
    props.removeBill(index)
  }

  return (
    <table className='table w-full'>
      <thead>
        <tr className='text-left'>
          <th scope='col'>Date</th>
          <th scope='col'>Amount</th>
          <th scope='col'>Category</th>
          <th scope='col' />
        </tr>
      </thead>
      <tbody>
        {props.bills?.map((value, index) => {  // array?.map() - ????????
          return (  // .toLocaleDateString() - to display the date in a human readable form
            <tr className='p4 even:bg-gray-100 odd:bg-white' key={index}>
              <td>{new Date(value.date).toLocaleDateString()}</td>
              <td>${value.amount}</td>
              <td>{value.category}</td>
              <td>
                <button onClick={() => removeBill(index)}>✖</button>
              </td>
            </tr>
          )
        })}
        <tr>
          <td colSpan='4' className='text-center pt-5'>
            <button className='underline' onClick={triggerShowAddBill}>
              Add new
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )  // () => removeBill(index) - we need to use an arrow function, otherwise, the `removeBill()` method is immediately called, since we added the parentheses
}

export default BillsTable
