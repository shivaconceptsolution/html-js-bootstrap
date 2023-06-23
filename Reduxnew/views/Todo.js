import {useDispatch, useSelector} from 'react-redux';

import { useState } from 'react';
import { AddTodo,RemoveTodo } from '../actions/todoAction';


const Todo =()=>{
    const [todoValue, setTodoValue] = useState('');
    const dispatch = useDispatch();
    const data = useSelector(state => state);
    const todos = data.todos.todos;
    const items = todos.map((data)=>{
        return <li>{data} <button onClick={() => removeTodo(data)}>X</button></li>
    })
    const addTodo = () => {
        if (todos && !todos.includes(todoValue)) {
        dispatch(AddTodo(todoValue));
        setTodoValue('');
        } else {
        alert(`${todoValue} already added in Todo List`);
        }
        };
   const removeTodo = item => {
            const todoIndex = todos.indexOf(item);
            if (todoIndex > -1) {
            dispatch(RemoveTodo(item));
            } else {
            alert(`${todoValue} is not in the Todo List`);
            }
            };
    return(<div>
           <input type="text"
           
             onChange={(e)=>setTodoValue(e.target.value)}
placeholder={'Add your todo here'}
value={todoValue}
/>
<input type="button" name="increase" title="Add Todo" onClick={addTodo}  value="ADD TOdo"/>
<div style={{alignSelf: 'stretch', paddingLeft: 40}}>
List of Todos :
</div>
<ul>
            {items}
        </ul>  
    </div>)
}
export default Todo;