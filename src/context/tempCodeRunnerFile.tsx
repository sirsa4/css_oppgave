  {todos
        ? todos.map((todo: TodoType) => {
            return (
              <div key={todo.id}>
                <h3>id: {todo.id}</h3>
                <p>{todo.title}</p>
                <p>{todo.text}</p>
                {todo.isComplete ? (
                  <p>Completed</p>
                ) : (
                  <button type="button" onClick={() => handleComplete(todo.id)}>
                    Complete
                  </button>
                )}
              </div>
            )
          })
        : "nothing"}

      <input
        className="m-4 block border border-black"
        value={title}
        onChange={getTitle}
      />
      <textarea
        name="text"
        id=""
        cols={10}
        rows={2}
        className="border border-black"
        value={text}
        onChange={getText}
      ></textarea>
      <button type="button" onClick={handleAddTodo}>
        Add todo
      </button>