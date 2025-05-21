import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', () => {
  const ico = ref(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA41JREFUWEftV1tsi2EYfv62m3ZoR6zdISsdWqeicarVRmS4cCWIkLhAIs43bhhjCUEQ50PEmQt2QUQiyIRM2GKbrc3S2U/LtFbrumO3blXW8X70z/41C1ebi75Xf7/3/d7veZ/ved/m45CfL8mxWHIBbAGQgoGxrwAuPHv9+hCXU1i4F8CBgTk36pQ8AuAZwMr7IvhKAHoGqXp2bAxAjIEYAwIDm/V6mEaOFHXkrY8f4Q+FsG3CBGH9htOJpWlpSJLLRbEXeB7WlhbIOA5jhw9HQzCIllCIxWw3GGAcMUKIt7e24nRNjbgN90+dinlqtSjpiepqNIdCODh9urB+zG7HGp0OaQkJotj9NhtKGxtxZtYsjFcq8a27G7srK1HV2ooD06bBnJQkxJc1NiLXahUD2DNlChYkJ4uSHrXbWRV5RiMSZDLmIwCrRo+GdtgwIZYmWZ7VCl8wiEtms7D+1OPB8epq9C2uxOfDPptNDEDKcbhsNiN96FDmeOB24zzPC8kIYLZGwxK+amjAbYsFqvh45r/vcuHi+/egHBSXpdGw9YLaWlxxONi1FGRnQxkXB2d7O7aWlqK75/cAFnXBqZkzMTkxkTmuORx47PEgS63GEIkExT4fPF1dAqDesQ/dbpzlecRLJLg6dy6SFQqEwmHsfPuWxfNtbXi0cCHiJBJEWIkk6hfAk7o6ZKrVDDUZJdxVUcHulGyv0Yj5fyolcKSB1WPGYP24ccxPYtXI5Wz/OZ7Hnawstn7L6cTtT5+EQvoF8CMcRkVzM1IUCuFaypqakFtZyTZv0uuxXKtl3x/8fqaB6xYLFFIpXIEATr57hxMzZoCI3vzmjdA1tR0d8AaDfwcQoWqlVouNej3bUN7UxJRNRocTCDISKil7cWoqO3BneTlr6bUZGcx/z+XCl0AAE1Uq3P38Ge5AIBoA9e4RkwmJf4RFh1EXaBQKHDaZEP4lmnybjV2BXCrFNoMBS1JTWaKeiKA4Dp7OTuwoK4NCJsPNzExIOO53DAkOQF1nJ9YVF7PfZMIV9DcHSIiRJASCzKBU4tzs2UIVfT8OVVXhhdfL5secUaOi4lYUFaHt+/d/B9A3w78CIFZpMFF3RIzo31BSEs3AopQU6HoNF9rw0utFjd8fVQGN4WXp6f0y8Ly+Ho72duafpFJhtU7HOoIEeM3pRH2vdo79G8YYiDHwXzAw6E+zwX2cDvbz/CfZ8riqOIzbIAAAAABJRU5ErkJggg==',
  )
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
    title: {
      color: 'text-gray-500',
    },
    description: {
      color: 'text-gray-600',
    },
    card: {
      bg: 'bg-white',
      color: 'text-black',
      shadow: 'shadow-lg',
      rounded: 'rounded-xl',
      padding: 'p-6',
    },
    link: {
      a: {
        focus: 'focus:ring-blue-300',
        shadow: 'shadow-lg',
        rounded: 'rounded-lg',
        bg: 'bg-zinc-600 hover:bg-zinc-700',
        color: 'text-white',
        text: 'text-sm font-medium',
      },
      text: {
        color: 'text-gray-800',
        text: 'text-sm font-medium',
      },
    },
    social: {
      color: 'text-gray-600',
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
    { name: 'github', icon: ['fab', 'github'], url: 'https://github.com' },
    { name: 'facebook', icon: ['fab', 'facebook'], url: 'https://facebook.com' },
    { name: 'linkedin', icon: ['fab', 'linkedin'], url: 'https://linkedin.com' },
    { name: 'X', icon: ['fab', 'x-twitter'], url: '' },
    { name: 'instagram', icon: ['fab', 'instagram'], url: '' },
    { name: 'youtube', icon: ['fab', 'youtube'], url: '' },
    { name: 'tiktok', icon: ['fab', 'tiktok'], url: '' },
    { name: 'discord', icon: ['fab', 'discord'], url: '' },
    { name: 'threads', icon: ['fab', 'threads'], url: '' }, // 若 Font Awesome 無支援可改用自訂
    { name: 'reddit', icon: ['fab', 'reddit'], url: '' },
    { name: 'telegram', icon: ['fab', 'telegram'], url: '' },
    { name: 'whatsapp', icon: ['fab', 'whatsapp'], url: '' },
    // { name: 'line', icon: ['fab', 'line'], url: '' }, // FA 沒有 line，建議自訂
    { name: 'mastodon', icon: ['fab', 'mastodon'], url: '' },
    { name: 'medium', icon: ['fab', 'medium'], url: '' },
    { name: 'spotify', icon: ['fab', 'spotify'], url: '' },
    { name: 'soundcloud', icon: ['fab', 'soundcloud'], url: '' },
    { name: 'twitch', icon: ['fab', 'twitch'], url: '' },
    { name: 'pinterest', icon: ['fab', 'pinterest'], url: '' },
    { name: 'snapchat', icon: ['fab', 'snapchat'], url: '' },
    { name: 'vimeo', icon: ['fab', 'vimeo'], url: '' },
  ])

  return {
    avatar,
    title,
    description,
    tailwindClasses,
    getClasses,
    linksOrTexts,
    socialLinks,
    ico,
  }
})
