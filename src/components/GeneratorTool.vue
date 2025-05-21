<script setup lang="ts">
import { ref } from 'vue'
import { saveAs } from 'file-saver'
import { storeToRefs } from 'pinia'
import ContentView from './generator/ContentView.vue'
import StyleView from './generator/StyleView.vue'
import { useCommonStore } from '@/stores/common'

const { ico } = storeToRefs(useCommonStore())

const activeTab = ref<'content' | 'style'>('content')

const exportHtml = () => {
  const previewEl = document.getElementById('linktree-preview') as HTMLDivElement
  if (!previewEl) return

  const innerHTML = previewEl.innerHTML

  let htmlContent = ''
  htmlContent += '<!DOCTYPE html>\n'
  htmlContent += '<html lang="zh-TW">\n'
  htmlContent += '<head>\n'
  htmlContent += '  <meta charset="UTF-8" />\n'
  htmlContent += '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'

  htmlContent += '  <link rel="icon" type="image/png"  href="'
  htmlContent += ico.value
  htmlContent += '" />\n'

  htmlContent += '  <title>'
  htmlContent += document.title.replace(' - Linktree Generator', '')
  htmlContent += '</title>\n'
  htmlContent += '  <script src="https://cdn.tailwindcss.com"><'
  htmlContent += '/script>\n'
  htmlContent +=
    '  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/js/all.js"><'
  htmlContent += '/script>\n'
  htmlContent += '</head>\n'
  htmlContent += '<body class="min-h-screen flex flex-col items-center justify-center">\n'
  htmlContent += innerHTML + '\n'
  htmlContent += '  </div>\n'
  htmlContent += '</body>\n'
  htmlContent += '</html>\n'

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' })
  saveAs(blob, 'index.html')
}
</script>
<template>
  <div class="w-xs flex h-full">
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
      <div v-show="activeTab === 'content'">
        <ContentView />
      </div>

      <div v-show="activeTab === 'style'">
        <StyleView />
      </div>
    </div>
  </div>
</template>
