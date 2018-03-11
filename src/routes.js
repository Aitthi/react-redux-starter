import HomePage from './pages/home-page'
import ContentPage from './pages/content-page'

const routes = [{
    title: 'Home',
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    title: 'Content',
    path: '/content',
    component: ContentPage
  }
]

export default routes;