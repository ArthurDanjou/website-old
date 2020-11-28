import axios from "axios";
import {Axios} from "../../config";

export default async function () {
  let informations = {}
  const {data: translations} = await axios.get(Axios.baseURL + 'translations')
  translations.map((item: any) => {
    const { code, fr } = item
    informations = { ...informations, [code]: fr }
  })
  return informations
}
