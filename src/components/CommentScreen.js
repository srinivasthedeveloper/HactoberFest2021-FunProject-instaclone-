import React from 'react'
import MyModal from './MyModal'
export default function CommentScreen({ isOpen, handleClose }) {
  return <MyModal handleClose={handleClose} isOpen={isOpen}></MyModal>
}
