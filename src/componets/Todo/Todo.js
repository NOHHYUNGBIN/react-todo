import {FaTrashAlt} from 'react-icons/fa'
import style from './Todo.module.css'
export default function Todo({todo, onUpdate, onDelete}) {
    const {id, text, status} = todo;
    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active'
        onUpdate({...todo, status})
    }
    const handleDelete = () => {
        onDelete(todo)
    }
    return (
        <li className={style.todo}>
            <input 
                className={style.checkbox}
                type='checkbox' 
                id={id} 
                checked={status === 'completed'}
                onChange={handleChange}

                />
            <label htmlFor={id}  className={style.text}>
                {todo.text}
            </label>
            <span className={style.icon}>
                <button onClick={handleDelete} className={style.button}>
                    <FaTrashAlt/>
                </button>
            </span>
        </li>
    )
}