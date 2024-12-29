import { useState } from "react"
import { ContactDialog } from './dialogs/ContactDialog'
import { MessageSquare } from 'react-feather';

export const Contact = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 hover:bg-green-700 rounded-2xl sm:w-auto sm:mb-0">
          Hire Me
        <MessageSquare />
      </button>
      <ContactDialog open={isOpen} setOpen={setIsOpen}/>
    </>
  )
}
