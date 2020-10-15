
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
    
  },
  {
    path: '/CreateOrder',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    { path: '', component: () => import('pages/CreateOrder.vue') }
  ]

  },
  
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
