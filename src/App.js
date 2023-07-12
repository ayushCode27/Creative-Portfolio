import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles';
import { darkTheme, lightTheme } from './components/Themes';
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from 'react-router-dom';
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import WorkPage from './components/WorkPage';
import MySkillsPage from './components/MySkillsPage';
import { AnimatePresence } from 'framer-motion';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Main />
      </>
    ),
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/work',
    element: <WorkPage />,
  },
  {
    path: '/skills',
    element: <MySkillsPage />,
  },
]);
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence onExitComplete>
          <RouterProvider router={router} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
