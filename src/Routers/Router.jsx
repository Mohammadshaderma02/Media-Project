import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/mainLayout'
import Loading from '../components/Loading/Loading';
// import Home from '../pages/Home/Home'
// import MediaById from '../pages/Media/MediaByID'

const LazyHome=lazy(()=>import('../pages/Home/Home'));

const LazyMedia=lazy(()=>import('../components/Media/ShowMediaId'));

function Router() {
  return (
    <>
    <MainLayout>
   <Routes>
    <Route path='/' element={<Suspense fallback={<Loading/>}><LazyHome/></Suspense>}/>
    <Route path='/media/:id' element={<Suspense fallback={<Loading/>}><LazyMedia/></Suspense>}/>
   </Routes>
   
   </MainLayout>
    </>
  )
}

export default Router