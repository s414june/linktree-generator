import { ref, reactive } from 'vue'
import { Github, Twitter, Instagram, Linkedin, Youtube } from 'lucide-vue-next'
import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', () => {
  const avatar = ref({
    src: 'https://avatars.githubusercontent.com/u/9919?s=200&v=4',
    alt: 'Avatar',
  })

  const title = ref('@yourusername')
  const description = ref('前端工程師 / 熱愛開源')

  const tailwindClasses = reactive({
    background: {
      color: 'bg-gray-100',
    },
    card: {
      color: 'bg-white',
      shadow: 'shadow-lg',
      rounded: 'rounded-xl',
      padding: 'p-6',
    },
    link: {
      a: {
        focus: 'focus:ring-blue-300',
        shadow: 'shadow-lg',
        rounded: 'rounded-lg',
        color: 'text-white bg-zinc-600 hover:bg-zinc-700',
        text: 'text-sm font-medium',
      },
      text: {
        color: 'text-gray-800',
        text: 'text-sm font-medium',
      },
    },
  })

  const getClasses = (classesObject: { [key: string]: string }) => {
    return Object.values(classesObject).join(' ')
  }

  const linksOrTexts = ref([
    {
      name: 'Hi',
      url: '',
      color: '',
      type: 'text',
    },
    {
      name: 'GitHub',
      url: 'https://github.com',
      color: '',
      type: 'link',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      color: '',
      type: 'link',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com',
      color: '',
      type: 'link',
    },
  ])

  const socialLinks = ref([
    { icon: Github, url: 'https://github.com' },
    { icon: Twitter, url: 'https://twitter.com' },
    { icon: Instagram, url: 'https://instagram.com' },
    { icon: Linkedin, url: 'https://linkedin.com' },
    { icon: Youtube, url: 'https://youtube.com' },
  ])

  return {
    avatar,
    title,
    description,
    tailwindClasses,
    getClasses,
    linksOrTexts,
    socialLinks,
  }
})
