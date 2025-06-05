import React from 'react'
function person({person}) {
  return (
    <div>
        <h1>
                I am {person.name}.Iam {person.age} years old.I know {person.skill}.
        </h1>
    </div>
  )
}

export default person