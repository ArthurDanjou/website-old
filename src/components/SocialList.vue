<template>
  <div class="social-links">
    <a target="_blank" href="https://twitter.com/ArthurDanj" rel="noopener noreferrer">
      <TwitterIcon />
    </a>
    <a target="_blank" href="https://github.com/ArthurDanjou" rel="noopener noreferrer">
      <GithubIcon />
    </a>
    <a target="_blank" href="https://www.polywork.com/arthurdanjou" rel="noopener noreferrer">
      <PolyworkIcon />
    </a>
    <a target="_blank" href="https://www.twitch.tv/arthurdanjou" rel="noopener noreferrer">
      <TwitchIcon />
    </a>
    <a target="_blank" href="https://go.arthurdanjou.fr/discord" rel="noopener noreferrer">
      <DiscordIcon />
    </a>
    <a target="_blank" href="mailto:contact@arthurdanjou.fr" rel="noopener noreferrer">
      <MailIcon />
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialList"
}
</script>

<style lang="scss">
.social-links a {
  svg {
    @apply h-6 w-6 duration-300
  }

  &:hover svg {
    @apply transform hover:scale-120
  }
}
</style>
