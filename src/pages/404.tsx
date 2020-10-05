export default function NotFound() {
  return (
    <>
      <div className="container">
        <div>
          <h1 className="status">404</h1>
          <div className="textContainer">
            <h2 className="statusText">This page could not be found.</h2>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }

        .status {
          display: inline-block;
          margin: 0;
          margin-right: 20px;
          padding: 10px 23px 10px 0;
          font-weight: 500;
          font-size: 24px;
          vertical-align: top;
          border-right: 1px solid rgb(0 0 0 / 30%);
        }

        .textContainer {
          display: inline-block;
          height: 49px;
          line-height: 49px;
          text-align: left;
          vertical-align: middle;
        }

        .statusText {
          margin: 0;
          padding: 0;
          font-weight: normal;
          font-size: 14px;
          line-height: inherit;
        }
      `}</style>
    </>
  );
}
