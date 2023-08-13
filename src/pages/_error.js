const Error = ({ statusCode }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "10rem",
      }}
    >
      {statusCode
        ? `Oops! An ${statusCode} error occurred`
        : "Oops! An error occurred"}
    </div>
  );
};

Error.getIntialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
