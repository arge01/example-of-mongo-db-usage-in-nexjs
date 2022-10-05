import React from 'react';

import Button from 'component/Button';

import { useRouter } from 'next/router';

function CreateOrUpdate({
  title,
  form,
  onChange,
  action,
  update = false,
  setUpdate,
  formClear,
}) {
  const router = useRouter();
  return (
    <div className="item add-item">
      <h3 className="title">{title}</h3>
      <div className="form-item row">
        <div className="col-lg">
          <div className="form-group">
            <label htmlFor="jop-name">Jop Name</label>
            <input
              name="jop"
              type="text"
              className="form-control"
              placeholder="Jop Name"
              value={form.jop}
              onChange={onChange}
              disabled={update}
            />
            <small id="jopNameHelp" className="form-text text-muted">
              {form?.jop?.length ? (
                255 - form?.jop?.length > 0 && 255 - form?.jop?.length
              ) : (
                <></>
              )}
            </small>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="form-group">
            <label htmlFor="jop-priority">Jop Priotry</label>
            <select
              name="priotry"
              className="form-control"
              id="jop-priotry"
              onChange={onChange}
            >
              <option selected={true} value={0}>
                Please Select
              </option>
              <option selected={form.priotry === 1} value={1}>
                Urgent
              </option>
              <option selected={form.priotry === 2} value={2}>
                Reqular
              </option>
              <option selected={form.priotry === 3} value={3}>
                Trivial
              </option>
            </select>
          </div>
        </div>
        <div className="col-lg-auto">
          <Button
            icon="fas fa-plus"
            onClick={() => {
              action();
              router.push('#data-table');
            }}
            disabled={form?.jop !== '' && form?.priotry > 0 ? false : true}
          >
            {!update ? 'Create' : 'Update'}
          </Button>
          {update && (
            <Button
              icon="fas fa-times"
              btn="danger"
              onClick={() => {
                setUpdate(false);
                formClear();
                router.push('#data-table');
              }}
            >
              Cencel
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateOrUpdate;
