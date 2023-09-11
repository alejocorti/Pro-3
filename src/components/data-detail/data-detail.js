function DataDetail(props) {
    return (
        <article className="data-detail">
                <div className="card-content">
                    <h4>{props.calle}.</h4>
                    <p>{props.numero}</p>
                </div>
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
            </article>
  );
}

export default DataDetail;