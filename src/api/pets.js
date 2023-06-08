import instance from "./index";

const getPets = async () => {
  const pets = await instance.get("pets");
  return pets.data;
};

const addPet = async (name, image, type, adopted) => {
  const res = await instance.post("pets", {
    name: name,
    image: image,
    type: type,
    adopted: adopted,
  });
  return res;
};

const updatePet = async (petId, name, image, type) => {
  const res = await instance.put(`pets/${petId}`, {
    name: name,
    image: image,
    type: type,
    adopted: 1,
  });
  return res;
};

const getPetById = async (id) => {
  const res = await instance.get(`pets/${id}`);
  return res.data;
};

const deletePetById = async (id) => {
  const res = await instance.delete(`pets/${id}`);
  return res.data;
};

export { getPets, addPet, updatePet, getPetById, deletePetById };
