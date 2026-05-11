import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserHistory, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './styles.css'
import { Route as RootRoute } from './routes/__root'
import { Route as IndexRoute } from './routes/index'

const queryClient = new QueryClient()

const rootRoute = RootRoute

const indexRoute = IndexRoute.update({
  getParentRoute: () => rootRoute,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
])

const router = createRouter({
  routeTree,
  context: { queryClient },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
