import "./BarraDeTitulo.scss";

const BarraDeTitulo = ({ selectedSection, q, setQ }) => {
  return (
    <div className="fund-don-barra-titulo">
      {selectedSection?.isVisibleSearch && (
        <div className="fund-form-field">
          <input
            value={q || ""}
            onChange={(e) => {
              setQ(e.target.value);
            }}
          />
          {!q ? (
            <i className="fas fa-search" />
          ) : (
            <i className="fas fa-times-circle" onClick={() => setQ()} />
          )}
        </div>
      )}
    </div>
  );
};

export default BarraDeTitulo;
