import React from 'react'

const Footer = ({completedtasksCount = 0, activeTasksCount = 0}) => {
  return (
    <>
      {completedtasksCount + activeTasksCount > 0 && (
        <div className='text-center'>
          <p className='text-sm text-muted-foreground' >
            {completedtasksCount > 0 && (
              <>
                Bạn đã hoàn thành {completedtasksCount} việc 
                {activeTasksCount > 0 && `, còn ${activeTasksCount} việc nữa.`}
              </>
            )}
            {completedtasksCount === 0 && activeTasksCount > 0 && (
              <>Hãy bắt đầu làm {activeTasksCount} nhiệm vụ!</>
            )}
          </p>
        </div>
      )}  
    </>
  )
}

export default Footer