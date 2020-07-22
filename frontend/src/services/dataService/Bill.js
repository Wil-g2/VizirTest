import api from "../api";

class DataServiceBill {
  calculate(data) {
    return api.post("/bills", data);
  }
}

export default new DataServiceBill();
