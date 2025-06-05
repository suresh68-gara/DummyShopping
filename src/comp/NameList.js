import React from 'react'
     function NameList() {
        const persons=[
            {
                id:1,
                name:'vinnu',
                age:21,
                skill:'autocad'
            
            },
            {
                id:2,
                name:'maneesha',
                age:22,
                skill:'html,css,python,javscript,reactjs'
        
            },
            {
                id:3,
                name:'laddu',
                age:23,
                skill:'python'
            }
        ]
        const personlist = persons.map(person =>  (
        
        
        <h1>
                I am {person.name}.Iam {person.age} years old.I know {person.skill}.
        </h1>
        ))
        return <div>{personlist}
        </div>
     }
//     const names=['vinnu','laddu','mani']
//     const NameList=names.map(names=><h1>{names}</h1>)
//      return <div>{NameList}</div>
//  return (
//    <div> 
//        {
// //         names.map(names=><h1>{names}</h1>)
// //         }
// //     </div> }

  


export default NameList