import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Dashboard, Login, PageNotFound } from "./pages";

import LifeMilestone from "./pages/LifeMilestone";
import LifeIncident from "./pages/LifeIncident";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ProtectedLayout from "./ui/ProtectedLayout";
import { AuthProvider } from "./context/AuthProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            element={
              <ProtectedLayout>
                <AppLayout />
              </ProtectedLayout>
            }
          >
            <Route index element={<Navigate replace to="/lifeproject" />} />
            <Route path="/lifeproject">
              <Route index element={<Dashboard />} />
              <Route path=":id/lifemilestone">
                <Route index element={<LifeMilestone />} />
                <Route path=":id/lifeincident" element={<LifeIncident />} />
              </Route>
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
