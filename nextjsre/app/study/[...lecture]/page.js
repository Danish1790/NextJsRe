import React from 'react'

const Lecture = ({params}) => {
  return (
    <div>
    <h3>Here {params.lecture[0]} of college</h3>
    </div>
  )
}

export default Lecture