import {Context} from "@nuxt/types";

export default async function ({redirect, route, $axios}: Context) {
  let isMaintenance = true
  const response = await $axios.get('/api/maintenance', {
    headers: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`
    }
  })
  if (response.status === 200) {
    isMaintenance = response.data.maintenance.active === 1
  }
  if(isMaintenance){
    return redirect('/maintenance')
  }
  if(!isMaintenance && route.path === '/maintenance'){
    return redirect('/')
  }
}
