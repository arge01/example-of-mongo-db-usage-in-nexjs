/* eslint-disable react-hooks/exhaustive-deps */
import Button from 'component/Button';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { TYPES } from 'services/todos/reducer/type';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Todos({ data, action, loading, setUpdate }) {
  const ReactSwal = withReactContent(Swal);
  const router = useRouter();

  const [filter, setFilter] = useState([...data]);

  useEffect(() => {
    setFilter([...data]);
  }, [data]);

  const onSearch = (e) => {
    const new_data = data.filter((f) => {
      const n = f.jop.toUpperCase();
      const t = e.target.value.toUpperCase();

      if (n.indexOf(t) > -1) {
        return { ...f };
      }

      return false;
    });

    if (e?.target?.value) {
      setFilter(new_data);
    } else {
      setFilter([...data]);
    }
  };

  const onFilter = (e) => {
    if (e?.target?.value !== 'all') {
      setFilter(
        data.filter(
          (f) => f?.priotry?.toString() === e.target.value?.toString()
        )
      );
    } else {
      setFilter([...data]);
    }
  };

  const handleDel = async (v) => {
    ReactSwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        action.find(v._id).then((response) => {
          const { payload, type } = response;
          const data = payload?.data || {};
          if (type === TYPES.FIND) {
            if (data?.status) {
              action
                .update({ ...data, status: false })
                .then(() => action.findAll());
            } else {
              action.del(data._id).then(() => action.findAll());
            }
          }
        });
      }
    });
  };
  return (
    <>
      <div className="item table-item add-item">
        <h3 className="title">Jop List</h3>
        <div className="form-item row">
          <div className="item-index">
            <div className="col-lg">
              <div className="form-groups">
                <input
                  name="jop"
                  type="text"
                  className="form-control"
                  id="jop-name"
                  aria-describedby="jopNameHelp"
                  placeholder="Jop Name"
                  onChange={onSearch}
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-groups">
                <select
                  name="priotry"
                  className="form-control"
                  id="jop-priotry"
                  onChange={onFilter}
                >
                  <option value="all">All</option>
                  <option value={1}>Urgent</option>
                  <option value={2}>Reqular</option>
                  <option value={3}>Trivial</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="item-index">
          {loading && <h5>...Loading</h5>}
          <table className="table-striped table">
            <thead>
              <tr>
                <th style={{ width: '100%' }}>Jop</th>
                <th style={{ paddingRight: '45px' }}>Priotry</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filter?.map((v) => (
                <tr key={v._id}>
                  <td>
                    <span
                      style={{
                        textDecoration: `${
                          v?.status ? 'none' : 'line-through'
                        }`,
                      }}
                    >
                      {v.jop}
                    </span>
                  </td>
                  <td>
                    {v.priotry === 1 && <span className="urgent">Urgent</span>}
                    {v.priotry === 2 && (
                      <span className="regular">Regular</span>
                    )}
                    {v.priotry === 3 && <span className="trival">Trival</span>}
                  </td>
                  <td>
                    <ul className="d-flex">
                      <li>
                        <Button
                          icon="fas fa-pencil-alt"
                          onClick={() => {
                            router.push('#update-or-crate');
                            setUpdate(v);
                          }}
                        />
                      </li>
                      <li>
                        <Button
                          icon="fas fa-trash"
                          btn="danger"
                          onClick={() => handleDel(v)}
                        />
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Todos;
