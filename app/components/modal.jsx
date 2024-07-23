'use client'

import React, { useRef, useEffect } from 'react'
import NewGoalForm from './newGoalForm';

const CreateNewModal = (props) => {
    const onCloseCallback = props.onClose;
    const open = props.open;
    const modalRef = useRef(null);

    useEffect(() => {
        if (open && modalRef.current) {
        modalRef.current.scrollTop = 0;
        }
    }, [open]);

  return (
<div className={`relative z-10 ${open ? 'visible' : 'invisible'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  <div className={`fixed inset-0 bg-opacity-80 backdrop-blur-[1px] transition-colors ${open ? 'visible bg-gray-300' : 'invisible'} duration-500`} aria-hidden="true">
  </div>
  
  <div class="fixed inset-0 z-10 w-screen overflow-y-auto " ref={modalRef}>
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
      <div class={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-auto m-10 transition-all ${open ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} duration-500`}
      >
        <div className={`bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4`}
        >
          <NewGoalForm onClose={onCloseCallback}/>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default CreateNewModal;
