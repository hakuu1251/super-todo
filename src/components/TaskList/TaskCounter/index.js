import React, { useEffect, useState } from 'react'
import { useGetTodosQuery } from '../../../redux'
import './style.css'

function TaskCounter() {
  const { data = [], isLoading } = useGetTodosQuery()
  const [completedCount, setCompletedCount] = useState(0)

  useEffect(() => {
    let count = 0
    data.forEach(todo => {
      if (todo.isCompleted) count++
    })
    setCompletedCount(count)
  }, [data])

  return (
    <div className="task-counter">
      <div className="task-counter__left">
        Созданные задачи
        <span className="task-amount"> {data.length}</span>
      </div>
      
      <div className="task-counter__right">
        Завершено
        <span className="task-amount">
         {
          completedCount > 0 
            ? `${completedCount} из ${data.length}`
            : 0
         }
        </span>
      </div>
    </div>
  )
}

export default TaskCounter