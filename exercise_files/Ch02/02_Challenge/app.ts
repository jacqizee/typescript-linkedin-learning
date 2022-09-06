interface Item {
  id: number
  title: string
  completedOn?: Date
  status: StatusTypes
}

enum StatusTypes {
  ToDo = 'todo',
  InProgress = 'in-progress',
  Done = 'done'
}

const todoItems: Item[] = [
    { id: 1, title: "Learn HTML", status: StatusTypes.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: StatusTypes.InProgress },
    { id: 3, title: "Write the best app in the world", status: StatusTypes.ToDo },
]

function addTodoItem(todo: string): Item {
    const id = getNextId(todoItems)

    const newTodo: Item = {
        id,
        title: todo,
        status: StatusTypes.ToDo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends { id: number }>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))