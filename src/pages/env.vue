<template>
  <main class="flex flex-col items-center px-5 xl:px-64">
    <PageTitle title="part.env" />
    <p class="text-gray-700 dark:text-gray-400 text-xl my-8">{{ $t('env.title.description') }}</p>
    <EnvGroup>
      <EnvTitle title="env.title.ide">
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </EnvTitle>
      <EnvList>
        <EnvListItem title="env.ide.java" content="Intellij Idea Ultimate" link="https://www.jetbrains.com/fr-fr/idea/"/>
        <EnvListItem title="env.ide.web" content="WebStorm" link="https://www.jetbrains.com/fr-fr/webstorm/"/>
        <EnvListItem title="env.ide.go" content="GoLand" link="https://www.jetbrains.com/fr-fr/go/"/>
        <EnvListItem title="env.ide.db" content="DataGrip" link="https://www.jetbrains.com/fr-fr/datagrip/"/>
        <EnvListItem title="env.ide.all" content="Jetbrains Toolbox" link="https://www.jetbrains.com/toolbox-app/"/>
        <EnvListItem title="env.police" content="Jetbrains Mono" link="https://www.jetbrains.com/lp/mono/"/>
        <EnvListItem title="env.console" content="ITerm 2" link="https://iterm2.com"/>
        <EnvListItem title="env.shell" content="ZSH + OhMyZSH" link="https://ohmyz.sh"/>
      </EnvList>
    </EnvGroup>
    <EnvGroup>
      <EnvTitle title="env.title.apps">
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </EnvTitle>
      <EnvList>
        <EnvListItem title="env.email_client" content="Apple Mail" link="https://apps.apple.com/fr/app/mail/id1108187098"/>
        <EnvListItem title="env.calendar" content="Apple Calendar" link="https://apps.apple.com/fr/app/calendrier/id1108185179"/>
        <EnvListItem title="env.vpn_client" content="Pritunl" link="https://pritunl.com/"/>
        <EnvListItem title="env.web_client" content="Safari" link="https://www.apple.com/safari/"/>
        <EnvListItem title="env.organisation_tool" content="Notion" link="https://www.notion.so/"/>
        <EnvListItem title="env.design_tool" content="Affinity Designer" link="https://affinity.serif.com/fr/designer/"/>
        <EnvListItem title="env.communication_tool" content="Slack" link="https://slack.com/intl/fr-fr/"/>
        <EnvListItem title="env.communication_tool" content="Discord" link="https://www.discord.com/"/>
      </EnvList>
    </EnvGroup>
    <EnvGroup>
      <EnvTitle title="env.title.hosting">
        <svg class="inline icon"  height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      </EnvTitle>
      <EnvList>
        <EnvListItem title="env.hosting.ndd" content="OVH" link="https://ovh.com/"/>
        <EnvListItem title="env.hosting.cloud" content="Digital Ocean" link="https://www.digitalocean.com/"/>
      </EnvList>
    </EnvGroup>
    <EnvGroup>
      <EnvTitle title="env.title.setup">
        <svg class="inline icon" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </EnvTitle>
      <EnvList>
        <EnvListItem title="env.setup.desk" content="Ikea"/>
        <EnvListItem title="env.setup.phone" content="Apple Iphone Xr" link="https://www.apple.com/fr/shop/buy-iphone/iphone-xr"/>
        <EnvListItem title="env.setup.computer" content="Apple Macbook Pro 13“ M1 16Go Ram 512Go SSD" link="https://www.apple.com/shop/buy-mac/macbook-pro/13-inch-space-gray-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb#"/>
        <EnvListItem title="env.setup.headphone" content="Apple Airpods" link="https://www.apple.com/fr/airpods/"/>
      </EnvList>
    </EnvGroup>
  </main>
</template>

<script>

export default {
  name: "env",
  head() {
    return {
      title: `${this.$i18n.t('header.env')} - Arthur Danjou`
    }
  }
}
</script>
