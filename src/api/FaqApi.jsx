import axios from "axios";
import Common from "../util/Common";

const FaqApi = {
  //Faq 추가 생성
  createFaq: async (faqAnswer, faqQuestion) => {
    const data = {
      faqAnswer: faqAnswer,
      faqQuestion: faqQuestion,
    };
    return await axios.post(
      Common.MV_DOMAIN + "/faq/new",
      data,
      Common.tokenHeader()
    );
  },
};

export default FaqApi;

// 일단 작성을 시도해보았음! 12.19
