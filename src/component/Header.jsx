import React, { useState } from 'react'

export default function Header({handleSubmit}) {
  const [learn,setLearn] = useState("")
  const [date,setDate] = useState("")
  const [name,setName] = useState("")
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

  return (
    <div>
      <div className='HeaderContainer'> 
        <input value={learn} onChange={(a)=>setLearn(a.target.value)} type="text" placeholder='Learn' />
        <input value={date} onChange={(a)=>setDate(a.target.value)}  type="date" />
        <select name="" id="" className='select'>
          <option value="">Choose</option>
          <option value="Pending">Pending</option>
          <option value="Fulfill">Fulfill</option>
          <option value="Reject">Reject</option>
        </select>
        <input value={name} onChange={(a)=>setName(a.target.value)} type='text' placeholder='Use Name'/>
        <button className='buttonAdd' onClick={() => {
                if (document.querySelector("select").value !== "") {
                  handleSubmit({ id: uuidv4(), learn: learn, name: name, date: date, status: document.querySelector("select").value })
                } else {
                    alert("Please choose your option!");
                }
                setLearn("");
                setDate("");
                setName("")

            }
           
            }>Submit</button>
      </div>
    </div>
  )
}
