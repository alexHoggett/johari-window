import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex flex-col gap-9 h-screen justify-center items-center">
        <h1 className="text-center font-bold text-5xl">Oops!</h1>
        <p className="italic flex items-center gap-4 text-lg"><span className='font-bold text-2xl'>{error.status}:</span> {error.statusText}</p>
        {error.data && (
          <p>
            <i className="text-slate-300 text-lg">{error.data}</i>
          </p>
        )}
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="flex flex-col gap-9 h-screen justify-center items-center">
        <h1 className="text-center font-bold text-4xl">Oops! Unexpected Error</h1>
        <p className="italic text-lg">Something went wrong 😔</p>
        <p>
          <i className="text-slate-300 text-lg">{error.message}</i>
        </p>
      </div>
    );
  } else {
    return <></>;
  }
}

export default ErrorPage;