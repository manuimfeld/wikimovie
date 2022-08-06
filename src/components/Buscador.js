import React from "react";

const Buscador = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value;
    onSubmit(keyword);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="d-flex align-items-center"
    >
      <label className="form-label mb-0 mx-2">
        <input
          className="form-control"
          type="text"
          name="keyword"
          id=""
          placeholder="Buscar..."
        />
      </label>
      <button type="submit" className="btn btn-success">
        Buscar
      </button>
    </form>
  );
};

export default Buscador;
