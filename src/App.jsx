import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import ProductsPage from './pages/ProductsPage';
import PublishPage from './pages/PublishPage';
import NotFoundPage from './pages/NotFoundPage';
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/publish" element={<PublishPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    )
  );
  
  return (
    <>
      <RouterProvider router={ router } />
    </>
  )
}

export default App
