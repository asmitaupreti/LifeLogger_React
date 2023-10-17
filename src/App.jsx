import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Dashboard, Login, PageNotFound } from "./pages";
import CreateLifeProject from "./features/CreateLifeProject";
import LifeMilestone from "./pages/LifeMilestone";
import LifeIncident from "./pages/LifeIncident";
import CreateLifeMilestone from "./features/CreateLifeMilestone";
import CreateLifeIncident from "./features/CreateLifeIncident";

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
    </>
  );
}

export default App;
