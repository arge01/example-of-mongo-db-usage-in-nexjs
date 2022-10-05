/* eslint-disable no-case-declarations */
import Todos from '../../../../mongoDB/models/Todos';
import dbConnect from '../../../../mongoDB/utils/dbConnection';

dbConnect();

async function TodoRequest(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      let response = null;

      try {
        if (req?.query?.id) {
          response = await Todos.findOne({ _id: req?.query?.id });
        } else {
          response = await Todos.find({});
        }

        res.status(200).json({ isSuccess: true, data: response });
      } catch (error) {
        res.status(500).json({ isSuccess: false, error });
      }
      break;

    case 'POST':
      try {
        const { jop, priotry, status } = req.body;

        if (!jop && !priotry && jop?.lenght > 255) throw 'invalid data';

        const todos = await Todos.create({ jop, priotry, status });

        res.status(201).json({ isSuccess: true, data: todos });
      } catch (error) {
        res.status(500).json({ isSuccess: false, error });
      }
      break;

    case 'PUT':
      try {
        const { jop, priotry, status } = req.body;

        if (!jop && !priotry && jop?.lenght > 255) throw 'invalid data';

        await Todos.updateOne({ _id: req.query.id }, { jop, priotry, status });
        res.status(200).json({ isSuccess: true });
      } catch (error) {
        res.status(500).json({ isSuccess: false, error });
      }
      break;

    case 'DELETE':
      try {
        await Todos.deleteOne({ _id: req.query.id });
        res.status(200).json({ isSuccess: true });
      } catch (error) {
        res.status(500).json({ isSuccess: false, error });
      }
      break;
  }
}

export default TodoRequest;
