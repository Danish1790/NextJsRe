"use client"

const student = ({params}) => {
  return (
    <div>
        <h3>Student Details</h3>
        <h5>Name: {params.student}</h5>
    </div>
  )
}

export default student