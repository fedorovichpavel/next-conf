import axios from "axios";

const domain = "mejorprestamos.mx";

export const formsApi = {
  axiosApi: axios.create({
    baseURL: `https://${domain}/api`,
  }),

  headers() {
    return {
      headers: {
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`,
      },
    };
  },

  getStaticForms() {
    return this.axiosApi.get(`http://api.leads-man.com/mx/form`);
  },

  getForms() {
    return this.axiosApi.get(`/mx/form`);
  },

  getSessionToken(ref) {
    //ref = { referrer, parameters, visitor };
    const token = this.axiosApi
      .post(`/${domain}/visitors`, ref)
      .then((response) => {
        localStorage.setItem("id", JSON.stringify(response.data.id));
        sessionStorage.setItem("token", JSON.stringify(response.data.token));
        return response.data.token;
      });
    return token;
  },

  request(data) {
    return this.axiosApi.post("/applications", data, this.headers());
  },

  postForm(data, step) {
    const id = JSON.parse(localStorage.getItem("app_id"));
    return this.axiosApi.post(
      `/applications/${id}/${step}`,
      data,
      this.headers()
    );
  },

  postIdProduct(code) {
    const id = JSON.parse(localStorage.getItem("app_id"));
    return this.axiosApi.post(
      `/applications/${id}/verify`,
      { code },
      this.headers()
    );
  },
  getOffer() {
    const id = JSON.parse(localStorage.getItem("app_id"));
    return this.axiosApi.get(`/applications/${id}/offers`, this.headers());
  },
  postOffer(data) {
    const id = JSON.parse(localStorage.getItem("app_id"));
    return this.axiosApi.post(
      `/applications/${id}/select`,
      data,
      this.headers()
    );
  },
};
