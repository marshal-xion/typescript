// Interface for Todo model
interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

// Centralized state
let todos: Todo[] = [];

// Business logic functions
function addTodo(title: string): Todo | null {
  if (!title.trim()) {
    return null; // Validate non-empty title
  }
  const newTodo: Todo = {
    id: Date.now(), // Simple ID using timestamp
    title,
    completed: false,
    createdAt: new Date(),
  };
  todos.push(newTodo);
  return newTodo;
}

function toggleTodo(id: number): boolean {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    return true;
  }
  return false;
}

function deleteTodo(id: number): boolean {
  const initialLength = todos.length;
  todos = todos.filter(t => t.id !== id);
  return todos.length < initialLength;
}

function getTodos(): Todo[] {
  return todos;
}

// Render the todo list
function renderTodos(): void {
  const todoList = document.getElementById('todo-list') as HTMLUListElement | null;
  if (!todoList) return;

  todoList.innerHTML = ''; // Clear existing list
  getTodos().forEach(todo => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      toggleTodo(todo.id);
      renderTodos(); // Re-render after state change
    });

    const span = document.createElement('span');
    span.textContent = todo.title;
    if (todo.completed) {
      span.style.textDecoration = 'line-through';
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      deleteTodo(todo.id);
      renderTodos();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// Initialize event listeners
function init(): void {
  const addButton = document.getElementById('add-button') as HTMLButtonElement | null;
  const todoInput = document.getElementById('todo-input') as HTMLInputElement | null;

  if (addButton && todoInput) {
    addButton.addEventListener('click', () => {
      const title = todoInput.value.trim();
      if (title) {
        addTodo(title);
        todoInput.value = '';
        renderTodos();
      }
    });

    // Optional: Add todo on Enter key
    todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && todoInput.value.trim()) {
        addTodo(todoInput.value);
        todoInput.value = '';
        renderTodos();
      }
    });
  }
}

// Initialize the app
init();
renderTodos();

//console.assert(addTodo('Tes1t') !== null, 'Add todo failed');
//console.assert(getTodos().length === 1, 'Todo not added');