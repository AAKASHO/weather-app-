
import { Route, Routes } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { Footer, Header, SideBar } from "./components/common";
import {   AddWorkerMainPage, AiChatMainPage, CreateCompanyPage, CreateUnitPage, EditOrgMasterMainPage, EditWorkerMainPage, EquipmentListMainPage, HomePage, LoginPage, OrgMastersPage, WorkOrderMainPage, WorkerListMainPage } from "./RouteMain";
import './index.css'
const App=()=> {
  const routes = useRoutes([
    { path: "/login", element: <LoginPage /> },
    { path: "/create-company", element: <CreateCompanyPage /> },
    { path: "/create-unit", element: <CreateUnitPage /> },
    { path: "/org-master", element: <OrgMastersPage /> },
    {
      path: "/*",
      element: (
        <div class="grid-container">
        <Header />
        <SideBar />
        <main className="main">
          <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="/artificial-intelligence" index element={<AiChatMainPage />} />
            <Route path="/work-order" index element={<WorkOrderMainPage />} />
            <Route path="/worker-list" index element={<WorkerListMainPage />} />
            <Route path="/add-worker" index element={<AddWorkerMainPage />} />
            <Route path="/edit-worker" index element={<EditWorkerMainPage />} />
            <Route path="/update-org-master" index element={<EditOrgMasterMainPage />} />
            <Route path="/equipment-list" index element={<EquipmentListMainPage />} />
           
          </Routes>
        </main>
        <Footer />
      </div>
      ),
    },
  ])
  return (
    <>
      {routes}
    </>
  );
}

export default App
