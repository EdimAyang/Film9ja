import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
// import  { Toaster }  from 'react-hot-toast'
// import { registerSW } from 'virtual:pwa-register';

// registerSW(); // Automatically registers and updates the service
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
