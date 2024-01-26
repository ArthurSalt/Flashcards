import { createBrowserRouter, RouteObject, RouterProvider, Outlet, Navigate } from 'react-router-dom'
import { useGetDecksQuery } from './services/decks'
import { Home } from './Home'
import { Decks } from './pages/decks/decks'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <div>login</div>,
  },
  {
    path: '/home',
    element: <Home />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Decks />,
  },
]

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
])

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export const Router = () => {
  return <RouterProvider router={router} />
}





