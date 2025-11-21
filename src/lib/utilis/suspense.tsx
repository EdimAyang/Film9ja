import { Suspense } from "react";
import Loader from "../../router/loader";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../components/error-ui/Error_ui";

const WithSuspense = (element: React.ReactNode) => (
  <ErrorBoundary FallbackComponent={ErrorComponent}>
    <Suspense fallback={<Loader />}>{element}</Suspense>
  </ErrorBoundary>
);

export default WithSuspense;
