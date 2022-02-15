import api from "./api";

const Category = {
  categories: () => {
    return api.get("/categories");
  },
  categorie: (data)=>{
    return api.get(`/categories/${data}`);
  }
};

export default Category;
