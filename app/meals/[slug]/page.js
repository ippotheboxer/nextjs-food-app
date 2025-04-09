import React from 'react'

const MealPage = ({params}) => {
  return (
    <main>
        <h1>Specific Meal page</h1>
        <p>{params.slug}</p>
    </main>
  )
}

export default MealPage;