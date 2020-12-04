import axios from "axios";
import {Axios} from "../config";

export default async function () {
  let informations = {}
  const {data: translations} = await axios.get(Axios.baseURL + 'translations')
  translations.map((item: any) => {
    const { code, en } = item
    informations = { ...informations, [code]: en }
  })
  return informations
}
