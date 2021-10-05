import axios from "axios";

class Corona {
  constructor(key) {
    this.API_KEY = key;
  }

  getTotal = async () => {
    const response = await axios.get(`/korea/?serviceKey=${this.API_KEY}`);
    return response.data;
  };

  getCountry = async () => {
    const response = await axios.get(
      `/korea/country/new/?serviceKey=${this.API_KEY}`
    );
    return response.data;
  };
}

export default Corona;

// 배포시
// proxy : https://api.corona-19.kr, package.json에서 삭제
