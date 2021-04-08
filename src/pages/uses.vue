<template>
  <main class="about flex flex-col items-center">
    <PageTitle
      title="about.environment"
      color="orange"
    >
      <svg class="inline icon" height="40" width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    </PageTitle>
    <p class="text-gray-700 dark:text-gray-400 text-xl mt-4 mb-8">{{ $t('about.env.description') }}</p>
    <EnvGroup>
      <EnvTitle title="about.env.ide">
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </EnvTitle>
      <EnvList>
        <EnvListItem title="about.ide.java" content="Intellij Idea Ultimate" link="https://www.jetbrains.com/fr-fr/idea/"/>
        <EnvListItem title="about.ide.web" content="WebStorm" link="https://www.jetbrains.com/fr-fr/webstorm/"/>
        <EnvListItem title="about.ide.go" content="GoLand" link="https://www.jetbrains.com/fr-fr/go/"/>
        <EnvListItem title="about.ide.db" content="DataGrip" link="https://www.jetbrains.com/fr-fr/datagrip/"/>
        <EnvListItem title="about.ide.all" content="Jetbrains Toolbox" link="https://www.jetbrains.com/toolbox-app/"/>
        <EnvListItem title="about.police" content="Jetbrains Mono" link="https://www.jetbrains.com/lp/mono/"/>
        <EnvListItem title="about.console" content="Terminus" link="https://github.com/Eugeny/terminus"/>
        <EnvListItem title="about.wsl_2" content="Ubuntu 20.04" link="https://www.microsoft.com/en-us/p/ubuntu-2004-lts/9n6svws3rx71?activetab=pivot:overviewtab"/>
      </EnvList>
    </EnvGroup>
    <EnvGroup>
      <EnvTitle title="about.env.apps">
        <svg class="inline icon" height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </EnvTitle>
      <EnvList>
        <EnvListItem title="about.email_client" content="Courrier by Microsoft" link="https://www.microsoft.com/fr-fr/p/courrier-et-calendrier/9wzdncrfhvqm?activetab=pivot:overviewtab"/>
        <EnvListItem title="about.vpn_client" content="Pritunl" link="https://pritunl.com/"/>
        <EnvListItem title="about.ftp_client" content="WinSCP" link="https://winscp.net/eng/download.php"/>
        <EnvListItem title="about.web_client" content="FireFox Developer Edition" link="https://www.mozilla.org/fr/firefox/developer/"/>
        <EnvListItem title="about.organisation_tool" content="Notion" link="https://www.notion.so/"/>
        <EnvListItem title="about.organisation_tool" content="Trello" link="https://www.trello.com/"/>
        <EnvListItem title="about.design_tool" content="Affinity Designer" link="https://affinity.serif.com/fr/designer/"/>
        <EnvListItem title="about.communication_tool" content="Slack" link="https://slack.com/intl/fr-fr/"/>
        <EnvListItem title="about.communication_tool" content="Discord" link="https://www.discord.com/"/>
        <EnvListItem title="about.communication_tool" content="Mattermost" link="https://mattermost.com/"/>
      </EnvList>
    </EnvGroup>
    <EnvGroup>
      <EnvTitle title="about.env.hosting">
        <svg class="inline icon"  height="32" width="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      </EnvTitle>
      <EnvList>
        <EnvListItem title="about.hosting.vps" content="PulseHeberg" link="https://pulseheberg.com/"/>
        <EnvListItem title="about.hosting.ndd" content="OVH" link="https://ovh.com/"/>
      </EnvList>
    </EnvGroup>
    <EnvGroup>
      <EnvTitle title="about.env.setup">
        <svg class="inline icon" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </EnvTitle>
      <EnvList>
        <EnvListItem title="about.setup.desk" content="Ikea"/>
        <EnvListItem title="about.setup.phone" content="Apple Iphone Xr" link="https://www.apple.com/fr/shop/buy-iphone/iphone-xr"/>
        <EnvListItem title="about.setup.computer" content="Asus i5, 8Go Ram, GTX 950, 1To HDD"/>
        <EnvListItem title="about.setup.screen" content="iiyama ProLite E2283HS" link="https://iiyama.com/fr/fr/produits/prolite-e2283hs-b3/"/>
        <EnvListItem title="about.setup.keyboard" content="Microsoft"/>
        <EnvListItem title="about.setup.mouse" content="Roccat Kova" link="https://fr.roccat.org/Mice/Kova-AIMO"/>
        <EnvListItem title="about.setup.headphone" content="Apple Airpods" link="https://www.apple.com/fr/airpods/"/>
        <EnvListItem title="about.setup.microphone" content="Turtle Beach px22" link="https://www.amazon.fr/Turtle-Beach-PX22-casque-gaming/dp/B00BDS415I"/>
      </EnvList>
    </EnvGroup>
  </main>
</template>

<script>
export default {
name: "uses"
}
</script>

<style scoped>

</style>
