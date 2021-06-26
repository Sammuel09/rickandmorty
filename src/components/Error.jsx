const Error = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="error">
      <h1 className="error-text">Ooops!!!</h1>
      <h2 className="error-text">Something went wrong</h2>
      <button onClick={refreshPage} className="error-btn">
        Try again
      </button>
    </div>
  );
};

export default Error;
