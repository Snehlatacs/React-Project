import React from 'react'
import { useRouteError } from 'react-router-dom';
// This component is used to display an error page when a route is not found or an error occurs


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div>
    <h1>Oops!</h1>
    <h3>Something went wrong!</h3>
    <p>We couldn't find the page you were looking for.</p>
    <h3>{error.status}:{error.statusText}</h3>
    </div>
  )
}

export default ErrorPage