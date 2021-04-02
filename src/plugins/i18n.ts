import {Context} from "@nuxt/types";

export default function ({ app }: Context) {
  app.i18n.onLanguageSwitched = async () => {
    await window.$nuxt.refresh()
  }
}
