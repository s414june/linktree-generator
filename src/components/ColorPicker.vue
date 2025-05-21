<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from 'vue'

const props = defineProps<{
  modelValue: string
  prefix?: string
}>()

const emit = defineEmits(['update:modelValue'])

const prefix = computed(() => props.prefix ?? 'bg')
const isOpen = ref(false)
const color = ref(props.modelValue)

const colorFamilies = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
]

const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']

const selected = computed(() => props.modelValue)
const isSelected = (color: string) => selected.value === color

const handleSelect = (_color: string) => {
  color.value = _color
  emit('update:modelValue', _color)
}
</script>

<template>
  <button
    type="button"
    class="w-7 h-7 rounded border border-white shadow ring-2 ring-transparent focus:outline-none"
    :class="color"
    @click.stop="isOpen = !isOpen"
  />
  <div
    v-if="isOpen"
    class="overflow-auto max-h-[400px] border border-gray-200 rounded p-2 absolute bg-white shadow-lg z-20"
  >
    <div v-for="family in colorFamilies" :key="family" class="mb-3">
      <div class="flex gap-1/2 flex-wrap">
        <button
          v-for="shade in shades"
          :key="shade"
          :title="`${prefix}-${family}-${shade}`"
          type="button"
          class="w-5 h-5 rounded border border-white shadow ring-2 ring-transparent focus:outline-none"
          :class="[
            `${prefix}-${family}-${shade}`,
            isSelected(`${prefix}-${family}-${shade}`) && 'ring-blue-500',
          ]"
          @click="handleSelect(`${prefix}-${family}-${shade}`)"
        />
      </div>
    </div>
  </div>
  <div v-if="isOpen" class="w-full h-full fixed left-0 top-0" @click="isOpen = false"></div>
</template>
