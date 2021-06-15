import App from "../components/App";
import Router from "next/router";
import { useEffect } from "react";
import { formsApi } from "../services/api/formsApi";

export const getToken = () => {
  const parameters = {};
  let referrer = null;
  let visitor = JSON.parse(localStorage.getItem("id")) || null;
  if (Router.query) {
    for (let key in Router.query) {
      key === "ref"
        ? (referrer = Router.query[key])
        : (parameters[key] = Router.query[key]);
    }
  }
  const data = { referrer, parameters, visitor };
  const finalObj = {};
  for (let key in data) {
    if (data[key]) finalObj[key] = data[key];
  }
  formsApi.getSessionToken(finalObj);
};

const Index = () => {
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      return;
    }
    getToken();
  }, []);

  return <App />;
};

export default Index;
