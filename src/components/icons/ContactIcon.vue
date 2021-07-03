<template>
  <svg v-if="active" class="inline" width="2.5em" height="2.5em" viewBox="0 0 20 20" focusable="false">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046zM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376zM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833V6.43zM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666z"
    />
  </svg>
  <svg v-else class="inline" width="2.5em" height="2.5em" viewBox="0 0 20 20" focusable="false">
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M18.333 2.5c.92 0 1.667.746 1.667 1.667v11.666c0 .92-.746 1.667-1.667 1.667H1.667C.747 17.5 0 16.754 0 15.833V4.167C0 3.247.746 2.5 1.667 2.5h16.666zM7.168 11.328l-4.91 4.852h15.325l-4.857-4.802L10 13.265l-2.832-1.937zM18.64 7.292l-4.796 3.316l4.796 4.736V7.292zm-17.279.061v7.836l4.686-4.631l-4.686-3.205zm16.956-3.532H1.698a.358.358 0 0 0-.25.086a.26.26 0 0 0-.085.222v1.62L10 11.656l8.644-5.965V4.199c.001-.134-.03-.231-.092-.292a.306.306 0 0 0-.234-.086z"
    />
  </svg>
</template>

<script lang="ts">
export default {
  name: "ContactIcon",
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
