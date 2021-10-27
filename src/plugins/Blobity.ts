import Blobity from "blobity";
import {Options} from "blobity/lib/Blobity";
import {onMounted, ref} from "@nuxtjs/composition-api";

export const options: Partial<Options> = {
  color: 'rgb(180, 180, 180)',
  mode: 'normal',
  zIndex: 1,
  opacity: 1,
  magnetic: true,
  dotColor: 'rgb(255, 70, 12)',
  size: 30,
  focusableElementsOffsetX: 4,
  focusableElementsOffsetY: 4,
}

export const useBlobity = (options: Partial<Options>) => {
  const instance = ref<Blobity | null>(null)
  onMounted(() => {
    if (!instance.value) {
      instance.value = new Blobity(options);
    }
  })

  return instance.value!
}

