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

  // faq 수정

  reviseFaq: async (faqId, faqAnswer, faqQuestion) => {
    console.log("FAQ 수정 : " + faqId);
    const data = {
      faqId: faqId,
      faqAnswer: faqAnswer,
      faqQuestion: faqQuestion,
    };
    return await axios.post(
      Common.MV_DOMAIN + "/faq/revise",
      data,
      Common.tokenHeader()
    );
  },

  // faq 삭제
  deleteFaq: async (faqId) => {
    console.log("FAQ 삭제 :" + faqId);
    return await axios.delete(
      Common.MV_DOMAIN + `/faq/delete/${faqId}`,
      Common.tokenHeader()
    );
  },

  // faq 리스트
  getFaqList: async () => {
    console.log("faq 리스트 가지러감");
    return await axios.get(
      Common.MV_DOMAIN + "/faq/list",
      Common.tokenHeader()
    );
  },
};

export default FaqApi;
