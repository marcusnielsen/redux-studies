// @TODO: Refactor out the predicate function and reuse todos.filter.
export function filterActive (todos) {
  return todos.filter(function onFilter (todo) {
    return !todo.completed
  })
}

export function filterCompleted (todos) {
  return todos.filter(function onFilter (todo) {
    return todo.completed
  })
}
