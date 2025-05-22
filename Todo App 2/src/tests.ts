// Test helper functions
function resetTodos(): void {
  window.todos = [];
}

function getTestTodos(): Todo[] {
  return window.todos || [];
}

// Test runner
function runTests(): void {
  console.log('Running unit tests...');
  let testCount = 0;
  let passCount = 0;

  // Test 1: addTodo with valid title
  resetTodos();
  testCount++;
  const newTodo = addTodo('Test Todo');
  console.assert(
    newTodo !== null && newTodo.title === 'Test Todo' && !newTodo.completed,
    'Test 1 Failed: addTodo did not create a valid todo'
  );
  if (newTodo && newTodo.title === 'Test Todo' && !newTodo.completed) {
    passCount++;
    console.log('Test 1 Passed: addTodo creates a valid todo');
  }

  // Test 2: addTodo with empty title
  resetTodos();
  testCount++;
  const emptyTodo = addTodo('');
  console.assert(
    emptyTodo === null,
    'Test 2 Failed: addTodo accepted empty title'
  );
  if (emptyTodo === null) {
    passCount++;
    console.log('Test 2 Passed: addTodo rejects empty title');
  }

  // Test 3: toggleTodo on existing todo
  resetTodos();
  testCount++;
  const todo = addTodo('Toggle Test');
  let toggleResult = false;
  if (todo) {
    toggleResult = toggleTodo(todo.id);
    const updatedTodo = getTestTodos().find(t => t.id === todo.id);
    console.assert(
      toggleResult && updatedTodo && updatedTodo.completed,
      'Test 3 Failed: toggleTodo did not toggle completion'
    );
    if (toggleResult && updatedTodo && updatedTodo.completed) {
      passCount++;
      console.log('Test 3 Passed: toggleTodo toggles completion');
    }
  } else {
    console.error('Test 3 Failed: Could not create todo for toggle test');
  }

  // Test 4: toggleTodo on non-existent todo
  resetTodos();
  testCount++;
  const toggleInvalid = toggleTodo(999);
  console.assert(
    !toggleInvalid,
    'Test 4 Failed: toggleTodo accepted invalid ID'
  );
  if (!toggleInvalid) {
    passCount++;
    console.log('Test 4 Passed: toggleTodo returns false for invalid ID');
  }

  // Test 5: deleteTodo on existing todo
  resetTodos();
  testCount++;
  const todoToDelete = addTodo('Delete Test');
  let deleteResult = false;
  if (todoToDelete) {
    deleteResult = deleteTodo(todoToDelete.id);
    console.assert(
      deleteResult && getTestTodos().length === 0,
      'Test 5 Failed: deleteTodo did not remove todo'
    );
    if (deleteResult && getTestTodos().length === 0) {
      passCount++;
      console.log('Test 5 Passed: deleteTodo removes todo');
    }
  } else {
    console.error('Test 5 Failed: Could not create todo for delete test');
  }

  // Test 6: deleteTodo on non-existent todo
  resetTodos();
  testCount++;
  const deleteInvalid = deleteTodo(999);
  console.assert(
    !deleteInvalid,
    'Test 6 Failed: deleteTodo accepted invalid ID'
  );
  if (!deleteInvalid) {
    passCount++;
    console.log('Test 6 Passed: deleteTodo returns false for invalid ID');
  }

  // Test 7: getTodos returns correct list
  resetTodos();
  testCount++;
  addTodo('Todo 1');
  addTodo('Todo 2');
  console.assert(
    getTestTodos().length === 2,
    'Test 7 Failed: getTodos returned incorrect list'
  );
  if (getTestTodos().length === 2) {
    passCount++;
    console.log('Test 7 Passed: getTodos returns correct list');
  }

  // Summary
  console.log(`Tests completed: ${passCount}/${testCount} passed`);
  if (passCount === testCount) {
    console.log('All tests passed!');
  } else {
    console.error('Some tests failed.');
  }
}

// Attach runTests to window for button access
window.runTests = runTests;