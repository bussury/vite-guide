
/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', 
    component:() => import('@/views/Home.vue'), 
    meta: { 
      title: 'Home',
      layout: 'LayoutClient' 
    } 
  },
  { path: '/about', 
    component: () => import('@/views/About.vue'), 
    meta: { 
      title: 'About',
      layout: 'LayoutClient'
    } 
  },
  { path: '/:path(.*)', component: () => import('@/views/NotFound.vue')},
]
