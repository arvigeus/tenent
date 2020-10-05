import Error from "next/error";

export default function Page({ errorCode }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }
}

Page.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
