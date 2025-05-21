<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/stores/common'

const { avatar, title, description, linksOrTexts, socialLinks } =
  storeToRefs(useCommonStore())
const { getClasses, tailwindClasses } = useCommonStore()
</script>
<template>
  <div
    id="background"
    class="min-h-screen py-5 flex flex-col items-center justify-center"
    :class="getClasses(tailwindClasses.background)"
  >
    <div
      id="card"
      class="bg-gray-100 flex flex-col items-center flex-1 max-w-sm w-full px-4 py-5"
      :class="getClasses(tailwindClasses.card)"
    >
      <!-- 頭像 -->
      <img
        :src="avatar.src"
        :alt="avatar.alt"
        class="w-24 h-24 rounded-full border-4 border-white shadow-md mb-4"
      />

      <!-- 使用者名稱 -->
      <h1 v-if="title.length" class="text-2xl font-bold text-gray-800 mb-1">{{ title }}</h1>
      <p v-if="description.length" class="text-gray-500 mb-6">{{ description }}</p>

      <div class="w-full flex flex-col gap-3">
        <template v-for="item in linksOrTexts" :key="item.name">
          <a
            v-if="item.type === 'link'"
            :href="item.url"
            target="_blank"
            class="text-center p-2 transition focus:outline-none focus:ring-2"
            :class="[item.color, getClasses(tailwindClasses.link.a)]"
          >
            {{ item.name }}
          </a>
          <span
            v-else-if="item.type === 'text'"
            class="text-center"
            :class="[item.color, getClasses(tailwindClasses.link.text)]"
          >
            {{ item.name }}
          </span>
        </template>
      </div>
      <div class="mt-6 flex justify-center space-x-4 mb-6 text-gray-600">
        <a
          v-for="(item, i) in socialLinks"
          :key="i"
          :href="item.url"
          target="_blank"
          :class="['transition', item.color]"
        >
          <component :is="item.icon" class="w-6 h-6" />
        </a>
      </div>
    </div>
    <footer class="mt-5 text-gray-500 text-sm">
      Powered by
      <a
        href="https://github.com/s414june"
        target="_blank"
        class="text-teal-500 hover:text-teal-700"
        >Froggy Wu</a
      >
    </footer>
  </div>
</template>
