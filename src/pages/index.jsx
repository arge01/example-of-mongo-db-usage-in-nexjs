/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import Layout from '../component/Layout';

import Todos from 'component/Todos';

import { useDispatch, useSelector } from 'react-redux';
import { model } from '../services/todos/initial';
import { find, findAll, create, update, del } from 'services/todos';
import CreateOrUpdate from 'component/Todos/CreateOrUpdate';

function Home() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const action = {
    findAll: () => dispatch(findAll()),
    find: (id) => dispatch(find(id)),
    create: (data) => dispatch(create(data)),
    update: (data) => dispatch(update(data)),
    del: (id) => dispatch(del(id)),
  };

  useEffect(() => {
    action.findAll();
  }, [dispatch]);

  const [form, setForm] = useState(model);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (updated?._id) {
      setForm(updated);
    }
  }, [updated]);

  const onChange = (e) => {
    if (form?.jop?.length <= 255) {
      setForm({ ...form, [e.target.name]: e.target.value });
    } else {
      setForm(model);
    }
  };
  const save = () => {
    action.create(form).then(() => {
      setForm(model);
      action.findAll();
    });
  };

  const updateJop = () => {
    action
      .update(form)
      .then(() => {
        setForm(model);
        action.findAll();
      })
      .finally(() => setUpdated(false));
  };

  const formClear = () => {
    setForm(model);
  };
  return (
    <Layout>
      <div className="container">
        <div id="update-or-crate" className="row">
          <CreateOrUpdate
            title={`${!updated ? 'Create New Jop' : 'Update Jop'}`}
            form={form}
            setForm={setForm}
            onChange={onChange}
            action={!updated ? save : updateJop}
            update={updated}
            setUpdate={setUpdated}
            formClear={formClear}
          />
        </div>
        <div id="data-table" className="row">
          <Todos
            data={todos?.entities}
            action={action}
            loading={todos?.loading}
            setUpdate={setUpdated}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
