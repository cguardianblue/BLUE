import { computed, reactive, inject } from "vue"
import { configProviderKey } from "@cguardian/cg-ui/src/configProvider/src/ConfigProviderProps"
import cn from "locale/zh.js"
import en from "locale/en.js"
const I18N_MESSAGES = reactive({
  zh: cn,
  en: en,
})
// let LOCALE = ref("en")
export const useLocale = () => {
  let LOCALE = inject(configProviderKey)
  const i18nMessage = computed(() => I18N_MESSAGES[LOCALE.localeValue.value])
  const locale = computed(() => i18nMessage.value.locale)
  const transform = (key, options) => {
    const keyArray = key.split(".")
    let temp = i18nMessage.value

    for (const keyItem of keyArray) {
      if (!temp[keyItem]) {
        return key
      }
      temp = temp[keyItem]
    }
    // todo key 是参数，若 第二个参数 为共{ total } 页 这种，未验证,options是对象类型也得校验
    if (options) {
      temp = temp.replace(/\{\{(.*?)\}\}/g, (_, key) => options[key.trim()])
    }
    return temp
  }

  return {
    locale,
    t: transform,
  }
}
