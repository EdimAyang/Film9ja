import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";
import { getApiErrorMessage } from "../../lib/utilis/api-errors";

// dont retry the query if the response is of the following status codes

const SKIP_RETRY_CODES = [401, 404];

// Setup query client()

const queryClient = new QueryClient({
  defaultOptions: {
    //configure query behaviour
    queries: {
      staleTime: 1000 * 60, // 1 minute
      retry: (failureCount, error) => {
        if (isAxiosError(error)) {
            toast.error('error', {id:'#kjshior'})
          const status = error?.response?.status;
          if (status && SKIP_RETRY_CODES.includes(status)) {
            return false;
          }
        }
        return failureCount < 1;
      },
    },
    //configure mutation setup
    mutations: {
      onError: (err) => {
        const errorMessage = getApiErrorMessage(err);
        const errorMessageB64 = btoa(errorMessage);
        toast.error(errorMessage, { id: errorMessageB64 });
      },
    },
  },
});

export const ReactQueryClientProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
