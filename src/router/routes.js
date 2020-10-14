
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
    
  },
  {
    path: '/orderReceive',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    { path: '', component: () => import('pages/OrderReceive.vue') }
  ]

  },
  {
    path: '/orderServe',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/OrderServe.vue') }
    ]
  },
  {
    path: '/orderPreparing',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/OrderPreparing.vue') }
    ]
  }
,
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
