import axios from "axios";

export default axios.create({
  baseURL: "http://3.37.128.156:9999/hjs",
  headers: {
    "Content-type": "application/json",
  },
});
