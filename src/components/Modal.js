import React from 'react'

const Modal = (props) => {
  const confirmHandler = () => {
    props.onConfirm()
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button onClick={props.onCancel} className="btn btn--alt">Cancel</button>
      <button onClick={confirmHandler} className="btn">Confirm</button>
    </div>
  )
}

export default Modal
