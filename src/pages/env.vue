<template>
  <main class="flex flex-col items-center px-4 xl:px-64">
    <PageTitle title="part.env" />
    <p class="text-justify text-gray-700 dark:text-gray-400 text-xl my-8">{{ $t('env.title.description') }}</p>
    <EnvGroup>
      <EnvTitle title="env.title.ide">
        <DevelopmentIcon />
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
        <BundleIcon />
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
        <ServerIcon />
      </EnvTitle>
      <EnvList>
        <EnvListItem title="env.hosting.ndd" content="OVH" link="https://ovh.com/"/>
        <EnvListItem title="env.hosting.cloud" content="Digital Ocean" link="https://www.digitalocean.com/"/>
      </EnvList>
    </EnvGroup>
    <EnvGroup>
      <EnvTitle title="env.title.setup">
        <LampIcon />
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
