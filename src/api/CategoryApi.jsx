import axios from "axios";
import Common from "../util/Common";

const CategoryApi = {
  // 카테고리 생성
  createCategory: async (categoryType) => {
    return await axios.post(
      Common.MV_DOMAIN + "/category/new",
      { categoryType: categoryType },
      Common.tokenHeader()
    );
  },
};

export default CategoryApi;
