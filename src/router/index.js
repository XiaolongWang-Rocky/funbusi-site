import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';

function LazyLoad(path) {
    const LazyComponent = React.lazy(()=>import(`../${path}`));
    return <Suspense fallback='Loading...'>
        <LazyComponent />
    </Suspense>
}

function AppRouter(props) {
    return (
        <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/products/pos' element={LazyLoad('pages/products/PosProducts')}/>
            <Route path='/thanks' element={LazyLoad('pages/Thanks')}/>
            <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
    );
}

export default AppRouter;