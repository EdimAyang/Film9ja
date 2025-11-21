import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "./router/index.tsx";
import { createPortal } from "react-dom";
import { ReactQueryClientProvider } from "./components/network/tanstack-setup.tsx";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from 'react-router-dom'
import { Global_Css } from "./GlobalStyles.tsx";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
      {createPortal(
        <Toaster containerStyle={{ zIndex: 99999 }} />,
        document.body
      )}
      <Global_Css />
      <ReactQueryClientProvider>
        <RouterProvider router={Router}  />
    </ReactQueryClientProvider>
  </StrictMode>
);
