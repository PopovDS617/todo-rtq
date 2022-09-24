import { todos } from '../../../dummy-data';

let todoList = [...todos];
const handler = async (req, res) => {
  if (req.method === 'DELETE') {
    const { todo } = req.body;
    console.log(todo);

    res.status(201).json({ message: 'todo added ' });
  }

  if (req.method === 'GET') {
    const { id } = req.query;
    console.log(id);
    const comment = todoList.find((el) => el.id === parseInt(id));
    console.log(comment);
    res.status(200).json(comment);
  }
};

export default handler;
