<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/stores/common'
import { X, Plus, ChevronDown } from 'lucide-vue-next'

const { avatar, ico, title, description, linksOrTexts, socialLinks } = storeToRefs(useCommonStore())

const headerTitle = ref('My Profile Card')
const icoInput = ref<HTMLInputElement | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)

const handleIcoChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (!input.files || !input.files[0]) return

  const file = input.files[0]
  const reader = new FileReader()

  reader.onload = () => {
    ico.value = reader.result as string
    // 可選：變更當前 Favicon
    updateFavicon(ico.value)
  }

  reader.readAsDataURL(file)
}

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (!input.files || !input.files[0]) return

  const file = input.files[0]
  const reader = new FileReader()

  reader.onload = () => {
    avatar.value.src = reader.result as string
  }

  reader.readAsDataURL(file)
}

const triggerIco = () => {
  icoInput.value?.click()
}

const triggerFile = () => {
  fileInput.value?.click()
}

const updateFavicon = (dataUrl: string) => {
  let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
  }
  link.href = dataUrl
}

// 新增一筆連結
const addLink = () => {
  linksOrTexts.value.push({
    name: '',
    url: '',
    type: 'link',
    color: '',
  })
}

// 刪除指定連結
const removeLink = (index: number) => {
  linksOrTexts.value.splice(index, 1)
}

watch(
  () => headerTitle.value,
  (newTitle) => {
    document.title = newTitle + ' - Linktree Generator'
  },
  {
    immediate: true,
  },
)
</script>
<template>
  <div class="space-y-4">
    <div>
      <label class="block text-sm text-gray-700 mb-1">上傳網頁圖示</label>
      <input
        ref="icoInput"
        type="file"
        accept="image/png, image/jpeg, image/webp"
        @change="handleIcoChange"
        class="hidden"
      />
      <div class="flex items-center space-x-2">
        <label
          for="icoInput"
          class="cursor-pointer inline-block border border-blue-500 text-blue-500 text-sm px-4 py-2 rounded shadow hover:bg-blue-100 transition"
          @click="triggerIco"
        >
          選擇圖片
        </label>
      </div>
    </div>
    <div>
      <label class="block text-sm text-gray-700 mb-1">網頁標題</label>
      <input
        v-model="headerTitle"
        type="text"
        class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
    <div>
      <label class="block text-sm text-gray-700 mb-1">上傳大頭貼</label>
      <input
        ref="fileInput"
        type="file"
        accept="image/png, image/jpeg, image/webp"
        @change="handleFileChange"
        class="hidden"
      />
      <div class="flex items-center space-x-2">
        <label
          for="fileInput"
          class="cursor-pointer inline-block border border-blue-500 text-blue-500 text-sm px-4 py-2 rounded shadow hover:bg-blue-100 transition"
          @click="triggerFile"
        >
          選擇圖片
        </label>
      </div>
    </div>
    <!-- 使用者名稱 -->
    <div>
      <label class="block text-sm text-gray-700 mb-1">使用者名稱</label>
      <input
        v-model="title"
        type="text"
        class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>

    <!-- 描述 -->
    <div>
      <label class="block text-sm text-gray-700 mb-1">描述</label>
      <input
        v-model="description"
        type="text"
        class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>

    <!-- 連結清單 -->
    <div>
      <h3 class="text-sm font-semibold text-gray-600 mb-2">連結清單</h3>

      <div
        v-for="(item, index) in linksOrTexts"
        :key="index"
        class="relative mb-4 border border-gray-200 rounded-xl p-4 bg-white shadow-sm space-y-3"
      >
        <!-- 刪除按鈕 -->
        <button
          @click="removeLink(index)"
          class="absolute top-2 right-2 text-zinc-400 hover:text-red-500"
          title="刪除"
        >
          <X class="w-4 h-4" />
        </button>

        <!-- 類型選擇 -->
        <div class="relative">
          <label class="block text-xs font-semibold text-gray-500 mb-1">類型</label>
          <select
            v-model="item.type"
            class="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none"
          >
            <option value="link">連結</option>
            <option value="text">純文字</option>
          </select>
          <ChevronDown
            class="absolute right-2 top-1/2 pt-[2px] pointer-events-none w-5 h-5 text-gray-400"
          />
        </div>

        <!-- 名稱 -->
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1">名稱</label>
          <input
            v-model="item.name"
            class="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            :placeholder="'項目 ' + (index + 1) + ' 名稱'"
          />
        </div>

        <!-- URL（只在 link 時顯示） -->
        <div v-if="item.type === 'link'">
          <label class="block text-xs font-semibold text-gray-500 mb-1">連結 URL</label>
          <input
            v-model="item.url"
            class="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="https://example.com"
          />
        </div>
      </div>

      <!-- 新增按鈕 -->
      <button
        @click="addLink"
        class="mt-3 w-full text-sm py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition flex items-center justify-center"
      >
        <Plus class="w-4 h-4 mr-1" /> 新增一筆
      </button>
    </div>

    <div>
      <h3 class="text-sm font-semibold text-gray-600 mb-2">社群連結</h3>
      <div v-for="(item, index) in socialLinks" :key="index" class="mb-3">
        <label class="flex items-center gap-2 text-sm font-medium text-gray-700 pb-1">
          <FontAwesomeIcon :icon="item.icon" class="text-xl" />
          {{ item.name }}
        </label>
        <input
          v-model="item.url"
          type="text"
          :placeholder="`輸入 ${item.name} 連結`"
          class="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
    </div>
  </div>
</template>
