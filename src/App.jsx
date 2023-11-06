import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Dashboard, Login, PageNotFound } from "./pages";
import CreateLifeProject from "./features/CreateLifeProject";
import LifeMilestone from "./pages/LifeMilestone";
import LifeIncident from "./pages/LifeIncident";
import CreateLifeMilestone from "./features/CreateLifeMilestone";
import CreateLifeIncident from "./features/CreateLifeIncident";
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
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes location={previousLocation || location}>
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
        {previousLocation && (
          <Routes>
            <Route path="/createlifeproject" element={<CreateLifeProject />} />
            <Route
              path={`${previousLocation.pathname}/createlifemilestone`}
              element={<CreateLifeMilestone />}
            />
            <Route
              path={`${previousLocation.pathname}/createlifeincident`}
              element={<CreateLifeIncident />}
            />
          </Routes>
        )}
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
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
