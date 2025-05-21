<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { saveAs } from 'file-saver'
import { useCommonStore } from '@/stores/common'
import { X, Plus, ChevronDown } from 'lucide-vue-next'
import ColorPicker from './ColorPicker.vue'

const { title, description, linksOrTexts } = storeToRefs(useCommonStore())
const { tailwindClasses } = useCommonStore()
const activeTab = ref<'content' | 'style'>('content')

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

const exportHtml = () => {
  const previewEl = document.getElementById('background')
  if (!previewEl) return

  const innerHTML = previewEl.innerHTML

  let htmlContent = ''
  htmlContent += '<!DOCTYPE html>\n'
  htmlContent += '<html lang="zh-TW">\n'
  htmlContent += '<head>\n'
  htmlContent += '  <meta charset="UTF-8" />\n'
  htmlContent += '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'
  htmlContent += '  <title>Linktree Export</title>\n'
  htmlContent += '  <script src="https://cdn.tailwindcss.com"><'
  htmlContent += '/script>\n'
  htmlContent += '</head>\n'
  htmlContent += '<body class="min-h-screen flex flex-col items-center justify-center">\n'
  htmlContent += innerHTML + '\n'
  htmlContent += '  </div>\n'
  htmlContent += '</body>\n'
  htmlContent += '</html>\n'

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' })
  saveAs(blob, 'linktree.html')
}
</script>
<template>
  <div class="w-xs flex">
    <div
      class="bg-white p-6 border-r border-gray-200 rounded-r-lg overflow-y-auto max-h-screen w-full"
    >
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-800">編輯器</h2>
        <button
          @click="exportHtml"
          class="my-2 px-4 py-2 bg-sky-500 text-white text-sm rounded-4xl hover:bg-sky-600"
        >
          匯出為 HTML
        </button>
      </div>

      <!-- Tab 切換列 -->
      <div class="flex space-x-2 mb-6 text-sm font-medium">
        <button
          @click="activeTab = 'content'"
          :class="[
            'flex-1 py-2 rounded-lg',
            activeTab === 'content'
              ? 'bg-teal-500 text-white shadow'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
          ]"
        >
          文字內容
        </button>
        <button
          @click="activeTab = 'style'"
          :class="[
            'flex-1 py-2 rounded-lg',
            activeTab === 'style'
              ? 'bg-teal-500 text-white shadow'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
          ]"
        >
          樣式設定
        </button>
      </div>

      <!-- Tab 內容區 -->
      <div v-show="activeTab === 'content'" class="space-y-4">
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
      </div>

      <!-- 樣式設定 tab -->
      <div v-show="activeTab === 'style'" class="space-y-4">
        <!-- 背景顏色 -->
        <div class="relative">
          <label class="block text-xs font-semibold text-gray-500 mb-1">背景顏色</label>
          <ColorPicker v-model="tailwindClasses.background.color" prefix="bg" />
        </div>

        <!-- 卡片背景色 -->
        <div class="relative">
          <label class="block text-xs font-semibold text-gray-500 mb-1">卡片背景色</label>
          <ColorPicker v-model="tailwindClasses.card.color" prefix="bg" />
        </div>

        <!-- 卡片圓角 -->
        <div class="relative">
          <label class="block text-xs font-semibold text-gray-500 mb-1">卡片圓角</label>
          <select
            v-model="tailwindClasses.card.rounded"
            class="w-full px-3 py-2 pr-10 rounded-lg border border-gray-300 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="rounded-none">無圓角</option>
            <option value="rounded-md">小</option>
            <option value="rounded-md">中</option>
            <option value="rounded-lg">大</option>
            <option value="rounded-xl">特大</option>
            <option value="rounded-3xl">超大</option>
          </select>
          <ChevronDown
            class="absolute right-2 top-1/2 pt-[2px] pointer-events-none w-5 h-5 text-gray-400"
          />
        </div>

        <!-- 卡片陰影 -->
        <div class="relative">
          <label class="block text-xs font-semibold text-gray-500 mb-1">卡片陰影</label>
          <select
            v-model="tailwindClasses.card.shadow"
            class="w-full px-3 py-2 pr-10 rounded-lg border border-gray-300 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="shadow-none">無陰影</option>
            <option value="shadow-sm">小</option>
            <option value="shadow-lg">大</option>
            <option value="shadow-2xl">超大</option>
          </select>
          <ChevronDown
            class="absolute right-2 top-1/2 pt-[2px] pointer-events-none w-5 h-5 text-gray-400"
          />
        </div>

        <!-- 連結按鈕主色 -->
        <div class="relative">
          <label class="block text-xs font-semibold text-gray-500 mb-1">連結按鈕主色</label>
          <select
            v-model="tailwindClasses.link.a.color"
            class="w-full px-3 py-2 pr-10 rounded-lg border border-gray-300 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="text-white bg-zinc-600 hover:bg-zinc-700">深灰</option>
            <option value="text-white bg-blue-600 hover:bg-blue-700">藍色</option>
            <option value="text-white bg-teal-600 hover:bg-teal-700">綠藍色</option>
            <option value="text-white bg-pink-500 hover:bg-pink-600">粉紅</option>
          </select>
          <ChevronDown
            class="absolute right-2 top-1/2 pt-[2px] pointer-events-none w-5 h-5 text-gray-400"
          />
        </div>

        <div class="relative">
          <label class="block text-xs font-semibold text-gray-500 mb-1">連結按鈕圓角</label>
          <select
            v-model="tailwindClasses.link.a.rounded"
            class="w-full px-3 py-2 pr-10 rounded-lg border border-gray-300 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="rounded-none">無圓角</option>
            <option value="rounded-md">小</option>
            <option value="rounded-md">中</option>
            <option value="rounded-lg">大</option>
            <option value="rounded-xl">特大</option>
            <option value="rounded-3xl">超大</option>
          </select>
          <ChevronDown
            class="absolute right-2 top-1/2 pt-[2px] pointer-events-none w-5 h-5 text-gray-400"
          />
        </div>
      </div>
    </div>
  </div>
</template>
