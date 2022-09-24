import { todos } from '../../../dummy-data';

let todoList = [...todos];

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const result = await todoList;
    res.json(result);
  }

  if (req.method === 'POST') {
    const text = req.body.text;

    const todo = {
      id: todos.length + 1,
      text: text,
      active: true,
      done: false,
    };
    todoList.push(todo);
    console.log(todoList);
    res.status(201).json({ message: 'todo added ' });
  }
};

export default handler;
