import Axios from "axios";
import qs from "qs";

export const AUTHENTICATION_URL =
  "https://fcisqa.ice.ibmcloud.com/oidc/endpoint/default/token";
const USER = "dd154745-84c0-4b10-87a2-7ea2081343d6";
const PWD = "Fnm83u9Rep";
const TOKEN = "Basic " + btoa(`${USER}:${PWD}`);
export const OPTIONS = {
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    Authorization: TOKEN
  }
};

export function authenticate(email, password) {
  let data = qs.stringify({
    username: email,
    password: password,
    grant_type: "password",
    scope: "openid"
  });

  return Axios.post(AUTHENTICATION_URL, data, OPTIONS).then(
    response => response.data
  );
}
