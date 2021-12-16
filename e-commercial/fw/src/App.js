
import './App.scss';
import { Route ,Routes , NavLink } from 'react-router-dom'

import Header from './component/common/header/Header';
import { Suspense } from 'react';
import Footer from './component/common/footer/Footer';
import Spinner from './component/common/spinner/Spinner';
import Landing from './feature/Landing/pages/Landing';

function App() {
  return (
   
      <div className="App">
        <Header></Header>
        <Suspense fallback={<Spinner/>}>
            <Routes>
                <Route index path="/" element={<Landing/>} ></Route>
                <Route path="/:cateslug/:subslug" element={<Spinner></Spinner>} ></Route>
                <Route >
                 
                </Route>
            </Routes>
        </Suspense>
        <Footer></Footer>
      </div>
    

  );
}

export default App;
