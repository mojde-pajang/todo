import React, { useState } from "react";

const Todo = (props) => {
  const { item, handelEdit, handelRemove, index } = props;
  const { task, complete } = item;

  const [edit, setEdit] = useState(false);
  const [editInput, setEditInput] = useState('');

  const onClickEdit = (e) => {
    e.preventDefault();
    setEdit(true);

  }
  const handleSubmit = () => {
    if (!editInput) return false;
    handelEdit(index, editInput);
    setEdit(false)
  }
  
  const handleChange = (e) => {
    setEditInput(e.target.value);
  };

  const onCheckChange = (e) => {

    console.log(e.target.checked)
    
  }

  return (
    <div> 
      {edit ? (
        <label>
          <input
            type="text"
            value={editInput || task}
            name="edit"
            onChange={handleChange}
          />
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </label>
      ) : (
        <label>
          <input type="checkbox" name="complete" onChange={onCheckChange} />
          <span className="">{task}</span>
        </label>
      )}
      <button onClick={onClickEdit}>Edit</button>
      <button onClick={() => handelRemove(index)}>Remove</button>
    </div>
  );
};

export default Todo;
