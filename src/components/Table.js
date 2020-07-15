import React from 'react'

const Table = ({reg,loading}) => {
  

 return loading ? ( <div class="progress">
 <div class="indeterminate"></div>
</div> ):(
   
     <table className="white border">
        <thead className="padd">
          <tr>
          <th>State</th>
            <th>Infected</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody className="padd">
        {reg.map((state) => (
        <tr>
        <td>{state.loc}</td>
        <td>{state.totalConfirmed} </td>
        <td>{state.discharged}</td>
        <td>{state.deaths}</td>
      </tr>
            ))}
        </tbody>
      </table>
  
 )
    
}

export default Table
