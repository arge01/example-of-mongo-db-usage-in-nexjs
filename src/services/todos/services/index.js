import fetchConfig from '../../../middleware/fetchConfig';

const find = (id) => fetchConfig('get', `todos?id=${id}`);
const findAll = () => fetchConfig('get', 'todos');
const create = (data) => fetchConfig('post', 'todos', data);
const update = (data) => fetchConfig('put', `todos?id=${data._id}`, data);
const del = (id) => fetchConfig('delete', `todos?id=${id}`);

export const services = {
  find,
  findAll,
  create,
  update,
  del,
};
