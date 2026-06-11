import api from "./api";

const getDevelopers = async () => {
  const res = await api.get("/developers");
  return res.data;
};

const deleteDeveloper = async (id) => {
  const res = await api.delete(`/developers/${id}`);
  return res.data;
};

const developerService = {
  getDevelopers,
  deleteDeveloper,
};

export default developerService;
