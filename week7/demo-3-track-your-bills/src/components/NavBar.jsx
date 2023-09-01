function NavBar(props) {
  const setNewActiveCategory = (index) => {
    props.setNewActiveCategory(index)  // index is cathegory name
  }

  const liStyle = 'p-4 inline bg-gray-lighter hover:bg-gray-light uppercase font-black cursor-pointer'

  return (
    <ul className='flex justify-center mb-0 border-b-4 list-reset'>
      <li
        className={
          liStyle +
          (props.activeCategory === '' || props.activeCategory === undefined  // whad does it do - ????????
            ? ' bg-gray-dark'
            : ' bg-gray-lighter')
        }
        onClick={() => setNewActiveCategory('')}
      >
        All
      </li>
      {props.categories
        ? props.categories.map((value, index) => {
            return (
              <li
                className={
                  liStyle +
                  (props.activeCategory === index  // doesn't work !!!!!!!! - to apply the class bg-gray-dark if a category is active
                    ? ' bg-gray-dark'
                    : ' bg-gray-lighter')
                }
                key={index}  // for what ????????
                onClick={() => setNewActiveCategory(value)}
              >
                {value}
              </li>
            )
          })
        : '<li>No categories</li>'}
      <li className={liStyle} onClick={() => props.showAddCategory()}>
        ➕
      </li>
    </ul>
  )
}

export default NavBar
