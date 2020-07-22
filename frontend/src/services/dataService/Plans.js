import api from "../api";

class DataServicePlan {
  getAll() {
    return api.get("/plans");
  }
}

export default new DataServicePlan();
