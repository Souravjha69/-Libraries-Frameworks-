import TodoItem from "../components/TodoItem";
function TodoItems ({todoItemss}) {
    return (
        <>
        {todoItemss.map(item =>  <TodoItem todoDate={item.dueDate} todoName={item.name} />)}
        <div className="items-container">
        </div>
        </>
    );
}
export default TodoItems;