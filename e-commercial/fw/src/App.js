
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './component/common/footer/Footer';
import Header from './component/common/header/Header';
import Spinner from './component/common/spinner/Spinner';
import Landing from './feature/Landing/pages/Landing';
import ProductDetail from './feature/ProductDetail/page/ProductDetail';
import ProductPage from './feature/ProductPage/page/ProductPage';


function App() {
  return (
   
      <div className="App">
        <Header></Header>
        <Suspense fallback={<Spinner/>}>
            <Routes>
                <Route index path="/" element={<Landing/>} ></Route>
                <Route path="/:cateslug"  element={<ProductPage/>}></Route>
                <Route path="/:cateslug/:subslug"  element={<ProductPage/>}></Route>
                <Route path="/:cateslug/:subslug/:id"  element={<ProductDetail/>}></Route>
               
                <Route ></Route>
            </Routes>
        </Suspense>
        <Footer></Footer>
      </div>
    

  );
}

export default App;
