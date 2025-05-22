// Interface for Todo model
interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

// Extend Window interface to include todos
interface Window {
  todos: Todo[];
}

// Centralized state, attached to window
window.todos = window.todos || [];

// Local storage functions
function saveTodos(): void {
  try {
    localStorage.setItem('todos', JSON.stringify(window.todos));
  } catch (e) {
    console.error('Failed to save todos to localStorage:', e);
  }
}

function isValidTodo(item: any): item is Todo {
  return (
    typeof item === 'object' &&
    typeof item.id === 'number' &&
    typeof item.title === 'string' &&
    typeof item.completed === 'boolean' &&
    item.createdAt instanceof Date
  );
}

function loadTodos(): void {
  try {
    const saved = localStorage.getItem('todos');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.every(isValidTodo)) {
        window.todos = parsed.map(item => ({
          ...item,
          createdAt: new Date(item.createdAt),
        }));
      } else {
        console.warn('Invalid todos in localStorage, resetting to empty array');
        window.todos = [];
      }
    }
  } catch (e) {
    console.error('Failed to load todos from localStorage:', e);
    window.todos = [];
  }
}

// Business logic functions
function addTodo(title: string): Todo | null {
  if (!title.trim()) {
    return null;
  }
  const newTodo: Todo = {
    id: Date.now(),
    title,
    completed: false,
    createdAt: new Date(),
  };
  window.todos.push(newTodo);
  saveTodos();
  return newTodo;
}

function toggleTodo(id: number): boolean {
  const todo = window.todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    return true;
  }
  return false;
}

function deleteTodo(id: number): boolean {
  const initialLength = window.todos.length;
  window.todos = window.todos.filter(t => t.id !== id);
  const success = window.todos.length < initialLength;
  if (success) {
    saveTodos();
  }
  return success;
}

function getTodos(): Todo[] {
  return window.todos;
}

// Render the todo list
function renderTodos(): void {
  const todoList = document.getElementById('todo-list') as HTMLUListElement | null;
  if (!todoList) return;

  todoList.innerHTML = '';
  getTodos().forEach(todo => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      toggleTodo(todo.id);
      renderTodos();
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
  loadTodos();
  renderTodos();

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