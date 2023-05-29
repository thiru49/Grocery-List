import React from 'react'
import { FaPlus } from 'react-icons/fa'

export const AddItem = ({newItem, SetNewItem, handleSubmit}) => {
  return (
    <form className='addForm'>
        <label htmlFor="addItem">Add Item</label>
        <input autoFocus
        id='addIem'
        type="text"
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e)=> SetNewItem(e.target.value)} />
        <button type='submit'
        aria-label='Add Item'>
         <FaPlus/>
        </button>
    </form>
  )
}
