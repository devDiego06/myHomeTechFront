<template>
  <svg
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
    :fill="fillColor"
    :stroke="strokeColor"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <title>start-favorite</title>
      <desc>Created with Sketch Beta.</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        sketch:type="MSPage"
      >
        <g
          id="Icon-Set-Filled"
          sketch:type="MSLayerGroup"
          transform="translate(-154.000000, -881.000000)"
          :fill="fillColor"
        >
          <path
            d="M186,893.244 L174.962,891.56 L170,881 L165.038,891.56 L154,893.244 L161.985,901.42 L160.095,913 L170,907.53 L179.905,913 L178.015,901.42 L186,893.244"
            id="start-favorite"
            sketch:type="MSShapeGroup"
          ></path>
        </g>
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  fillColor: {
    type: String,
    default: '#ffc108', // Color predeterminado
  },
  strokeColor: {
    type: String,
    default: '#ffc108', // Color predeterminado
  },
});
</script>
