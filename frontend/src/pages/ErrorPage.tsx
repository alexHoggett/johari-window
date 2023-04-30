import { useState } from 'react'
import React from 'react'
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops! {error.status}</h1>
        <p>{error.statusText}</p>
        {error.data && (
          <p>
            <i>{error.data}</i>
          </p>
        )}
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong 😔</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    return <></>;
  }
}

export default ErrorPage;