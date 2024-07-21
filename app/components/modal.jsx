'use client'

import React from 'react'
import NewGoalForm from './newGoalForm';

const CreateNewModal = (props) => {
    const onCloseCallback = props.onClose;

  return (
<div class="relative z-10 transition-all duration-300 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-300 transition-all duration-300 bg-opacity-80 backdrop-blur-[1px]" aria-hidden="true"></div>
  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all duration-300 sm:my-8 sm:w-auto m-10"
      >
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
        >
          <NewGoalForm onClose={onCloseCallback} />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default CreateNewModal;
