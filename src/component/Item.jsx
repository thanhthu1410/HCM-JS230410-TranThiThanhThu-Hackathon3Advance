import React, { useState } from 'react'

export default function Item({ item, index, deleteUser, handleUpdateUser }) {

    const [update, setUpdate] = useState(null);
    const [editLearn, setEditLearn] = useState(item.learn)
    const [editDate, setEditDate] = useState(item.date)
    const [editStatus, setEditStatus] = useState(item.status)
    const [editName, setEditName] = useState(item.name)

    const handleSaveChanges = () => {
        const updatedUser = {
            id: item.id,
            learn: editLearn,
            date: editDate,
            name: editName,
            status: editStatus
        }
        handleUpdateUser(updatedUser);
        setUpdate(null);
    }
    return (
        <tr>
            <td>{index + 1}</td>
            {update === null ? (
                <>
                    <td>{item.learn}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                    <td>{item.name}</td>
                    <td className='active'>
                        <button className='updateButton' onClick={() => setUpdate(item)}>
                            Update
                        </button>
                        <button className='deleteButton' onClick={() => deleteUser(item.id)}>
                            Delete
                        </button>
                    </td>
                </>
            ) : (
                <>
                    <td>
                        <input
                            type="text"
                            value={editLearn}
                            onChange={(e) => setEditLearn(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type="date"
                            value={editDate}
                            onChange={(e) => setEditDate(e.target.value)}
                        />
                    </td>
                    <td>
                        <select

                            value={editStatus}
                            onChange={(e) => setEditStatus(e.target.value)}
                        >
                            <option value="">Choose...</option>
                            <option value="Pending">Pending</option>
                            <option value="Full fill">Full fill</option>
                            <option value="Reject">Reject</option>
                        </select>
                    </td>
                    <td>
                        <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                        />
                    </td>
                    <td className='active'>
                        <button className='saveButton' onClick={handleSaveChanges}>
                            Save
                        </button>
                        <button className='deleteButton' onClick={() => deleteUser(item.id)}>
                            Delete
                        </button>
                    </td>
                </>
            )}
        </tr>
    )
}
