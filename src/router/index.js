import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

function LazyLoad(path) {
    const LazyComponent = React.lazy(()=>import(`../${path}`));
    return <Suspense fallback='Loading...'>
        <LazyComponent />
    </Suspense>
}

function AppRouter(props) {
    return (
        <Routes>
            <Route path='/' exact element={LazyLoad('pages/Home')}/>
            <Route path='/products/pos' element={LazyLoad('pages/products/PosProducts')}/>
            <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
    );
}

export default AppRouter;