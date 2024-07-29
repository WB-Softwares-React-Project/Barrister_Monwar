import axios from "axios";


const axiosInstance = axios.create({
  baseURL: 'https://member.gcauk.co.ukassss'
})

const useAxiosPublic = () => {
  return axiosInstance;
}

export default useAxiosPublic;