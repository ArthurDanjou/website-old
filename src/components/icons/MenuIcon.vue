<template>
  <div>
    <svg v-if="type === 0" class="inline" width="2.5em" height="2.5em" viewBox="0 0 24 24" focusable="false">
      <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 12h18"/>
        <path d="M3 6h18"/>
        <path d="M3 18h18"/>
      </g>
    </svg>
    <svg v-else-if="type === 1" class="inline" width="2.5em" height="2.5em" viewBox="0 0 48 48" focusable="false">
      <g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path
          clip-rule="evenodd"
          d="M44 22c0-9.941-8.954-18-20-18S4 12.059 4 22h40z" />
        <path d="M4 38h40v6H4z" />
        <path d="M4 28l5.455 4l7.272-4L24 32l7.273-4l7.272 4L44 28" />
      </g>
    </svg>
    <svg v-else-if="type === 2" class="inline" width="0.75em" height="2.5em" viewBox="0 0 3 16" focusable="false">
      <path
        fill-rule="evenodd"
        d="M0 2.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0zm0 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0zM1.5 14a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3z"
        fill="currentColor" />
    </svg>
    <svg v-else-if="type === 3" class="inline" width="2.5em" height="2.5em" viewBox="0 0 24 24" focusable="false">
      <g fill="none">
        <path
          d="M7 6a3 3 0 0 0-3 3h16a3 3 0 0 0-3-3H7z"
          fill="currentColor" />
        <path
          d="M7 18a3 3 0 0 1-3-3h16a3 3 0 0 1-3 3H7z"
          fill="currentColor" />
        <path
          d="M3 11a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3z"
          fill="currentColor" />
      </g>
    </svg>
    <svg v-else-if="type === 4" class="inline" width="2.5em" height="2.5em" viewBox="0 0 24 24" focusable="false">
      <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7.05 11.293l4.243-4.243a2 2 0 0 1 2.828 0l2.829 2.83a2 2 0 0 1 0 2.828l-4.243 4.243a2 2 0 0 1-2.828 0L7.05 14.12a2 2 0 0 1 0-2.828z" />
        <path d="M16.243 9.172l3.086-.772a1.5 1.5 0 0 0 .697-2.516L17.81 3.667a1.5 1.5 0 0 0-2.44.47L14.122 7.05" />
        <path d="M9.172 16.243L8.4 19.329a1.5 1.5 0 0 1-2.516.697L3.667 17.81a1.5 1.5 0 0 1 .47-2.44l2.913-1.248" />
      </g>
    </svg>
    <svg v-else-if="type === 5" class="inline" width="2.5em" height="2.5em" viewBox="0 0 20 20" focusable="false">
      <path
        d="M9.584 6.036c1.952 0 2.591-1.381 1.839-2.843c-.871-1.693 1.895-3.155.521-3.155c-1.301 0-3.736 1.418-4.19 3.183c-.339 1.324.296 2.815 1.83 2.815zm5.212 8.951l-.444-.383a1.355 1.355 0 0 0-1.735 0l-.442.382a3.326 3.326 0 0 1-2.174.801a3.325 3.325 0 0 1-2.173-.8l-.444-.384a1.353 1.353 0 0 0-1.734.001l-.444.383c-1.193 1.028-2.967 1.056-4.204.1V19a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3.912c-1.237.954-3.011.929-4.206-.101zM10 7c-7.574 0-9 3.361-9 5v.469l1.164 1.003a1.355 1.355 0 0 0 1.735 0l.444-.383a3.353 3.353 0 0 1 4.345 0l.444.384c.484.417 1.245.42 1.735-.001l.442-.382a3.352 3.352 0 0 1 4.346-.001l.444.383c.487.421 1.25.417 1.735 0L19 12.469V12c0-1.639-1.426-5-9-5z"
        fill="currentColor"/>
      </svg>
  </div>
</template>

<script>
export default {
  name: "MenuIcon",
  props: {
    type: {
      type: Number,
      default: 0
    }
  }
}
</script>
