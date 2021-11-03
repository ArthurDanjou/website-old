<template>
  <div class="social-links">
    <a class="xl:z-index-3" data-blobity-radius="16" data-blobity-magnetic="false" target="_blank" href="https://twitter.com/ArthurDanj" rel="noopener noreferrer">
      <TwitterIcon />
    </a>
    <a class="xl:z-index-3" data-blobity-radius="16" data-blobity-magnetic="false" target="_blank" href="https://github.com/ArthurDanjou" rel="noopener noreferrer">
      <GithubIcon />
    </a>
    <a class="xl:z-index-3" data-blobity-radius="16" data-blobity-magnetic="false" target="_blank" href="https://www.polywork.com/arthurdanjou" rel="noopener noreferrer">
      <PolyworkIcon />
    </a>
    <a class="xl:z-index-3" data-blobity-radius="16" data-blobity-magnetic="false" target="_blank" href="https://www.twitch.tv/arthurdanjou" rel="noopener noreferrer">
      <TwitchIcon />
    </a>
    <a class="xl:z-index-3" data-blobity-radius="16" data-blobity-magnetic="false" target="_blank" href="https://go.arthurdanjou.fr/discord" rel="noopener noreferrer">
      <DiscordIcon />
    </a>
    <a class="xl:z-index-3" data-blobity-radius="16" data-blobity-magnetic="false" target="_blank" href="mailto:contact@arthurdanjou.fr" rel="noopener noreferrer">
      <MailIcon />
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialList"
}
</script>

<style scoped lang="scss">
.social-links a {
  svg {
    @apply h-6 w-6
  }
}
</style>
