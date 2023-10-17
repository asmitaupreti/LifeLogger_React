import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Dashboard, Login, PageNotFound } from "./pages";
import CreateLifeProject from "./features/CreateLifeProject";
import LifeMilestone from "./pages/LifeMilestone";
import LifeIncident from "./pages/LifeIncident";

function App() {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;
  return (
    <>
      <Routes location={previousLocation || location}>
        <Route element={<AppLayout />}>
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
          <Route path="/createProject" element={<CreateLifeProject />} />
        </Routes>
      )}
    </>
  );
}

export default App;
