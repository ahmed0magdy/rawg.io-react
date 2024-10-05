import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d383142fd7b64d21947bfa3237b2819a",
  },
});
