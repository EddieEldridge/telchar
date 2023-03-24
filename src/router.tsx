import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import CraftPage from '@/pages/CraftPage';
import SidebarLayout from '@/common/components/Common/Layouts/SidebarLayout';
import WelcomePage from '@/pages/WelcomePage/WelcomePage';
import CreatePage from '@/pages/CreatePage/CreatePage';
import ValidatePage from './pages/ValidatePage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SidebarLayout />}>
      <Route index element={<WelcomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/craft" element={<CraftPage />} />
      <Route path="/validate" element={<ValidatePage />} />
    </Route>
  )
)
