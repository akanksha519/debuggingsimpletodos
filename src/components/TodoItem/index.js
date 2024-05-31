import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {uniqueNo, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(uniqueNo)
  }

  return (
    <li>
      <fragments>
        <p className="title">{title}</p>
        <button type="button" className="delete-btn" onClick={onDeleteTodo}>
          Delete
        </button>
      </fragments>
    </li>
  )
}

export default TodoItem
