import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description can't be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className='container my-3 p-4'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="textHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <textarea type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
