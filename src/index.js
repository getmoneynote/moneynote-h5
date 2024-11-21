/*
 * https://stackoverflow.com/questions/41897420/typescript-and-reactdom-render-method-doesnt-accept-component
 * https://juejin.cn/post/7069598156735905800
 * import React from 'react'
 */
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from "@/routes";


createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
