import api from "./api";

const getDevelopers = async () => {
  const res = await api.get("/developers");
  return res.data;
};

const deleteDeveloper = async (id) => {
  const res = await api.delete(`/developers/${id}`);
  return res.data;
};



const createDeveloper = async (data) => {
  const res = await api.post("/developers", data);
  return res.data;
};
const developerService = {
  getDevelopers,
  deleteDeveloper,
  createDeveloper
};

export default developerService;
