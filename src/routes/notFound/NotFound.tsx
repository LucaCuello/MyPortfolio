import { useEffect, useState } from "react";
import { BiMessageSquareError } from "react-icons/bi";
import { Navigate, useNavigate } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  const [seconds, setSeconds] = useState(4);
  const oneSecond: number = 1000;
  const navigateTo = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, oneSecond);
    const timeout = setTimeout(() => {
      navigateTo("/home", { replace: true });
    }, oneSecond * 4);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="not-found">
      <h1 className="heading heading-error">
        <BiMessageSquareError />
        Wrong URL
      </h1>
      <h2 className="subheading">The page you're looking for doesn't exist.</h2>
      <p>Redirecting to home page in... {seconds} seconds</p>
    </div>
  );
};
