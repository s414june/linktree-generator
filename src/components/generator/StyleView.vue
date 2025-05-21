<script setup lang="ts">
import { useCommonStore } from '@/stores/common'
import { ChevronDown } from 'lucide-vue-next'
import ColorPicker from '../ColorPicker.vue'

const { tailwindClasses } = useCommonStore()
</script>
<template>
  <div class="space-y-4">
    <!-- 背景顏色 -->
    <div class="relative">
      <label class="block text-xs font-semibold text-gray-500 mb-1">背景顏色</label>
      <ColorPicker v-model="tailwindClasses.background.color" prefix="bg" />
    </div>

    <!-- 卡片背景色 -->
    <div class="relative">
      <label class="block text-xs font-semibold text-gray-500 mb-1">卡片背景色</label>
      <ColorPicker v-model="tailwindClasses.card.bg" prefix="bg" />
    </div>

    <div class="relative">
      <label class="block text-xs font-semibold text-gray-500 mb-1">標題顏色</label>
      <ColorPicker v-model="tailwindClasses.title.color" prefix="text" />
    </div>
    <div class="relative">
      <label class="block text-xs font-semibold text-gray-500 mb-1">說明顏色</label>
      <ColorPicker v-model="tailwindClasses.description.color" prefix="text" />
    </div>
    <!-- 連結按鈕主色 -->
    <div class="relative">
      <label class="block text-xs font-semibold text-gray-500 mb-1">連結按鈕主色</label>
      <ColorPicker v-model="tailwindClasses.link.a.bg" prefix="bg" />
    </div>
    <div class="relative">
      <label class="block text-xs font-semibold text-gray-500 mb-1">連結文字顏色</label>
      <ColorPicker v-model="tailwindClasses.link.a.color" prefix="bg" />
    </div>
    <div class="relative">
      <label class="block text-xs font-semibold text-gray-500 mb-1">純文字顏色</label>
      <ColorPicker v-model="tailwindClasses.link.text.color" prefix="text" />
    </div>

    <div class="relative">
      <label class="block text-xs font-semibold text-gray-500 mb-1">社群圖示顏色</label>
      <ColorPicker v-model="tailwindClasses.social.color" prefix="text" />
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
  </div>
</template>
