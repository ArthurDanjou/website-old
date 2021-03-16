import {useContext} from "@nuxtjs/composition-api";

export const translate = (code: string) => {
  const { $i18n } = useContext()
  $i18n.t(code)
}

export const setLocale = async (locale: string) => {
  const {$i18n} = useContext()
  await $i18n.setLocale(locale)
}

export const getLocale = () =>{
  const { $i18n } = useContext()
  return $i18n.getBrowserLocale()
}
