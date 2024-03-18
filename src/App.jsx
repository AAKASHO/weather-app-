
import { Route, Routes } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { Footer, Header, SideBar } from "./components/common";
import {   CreateCompanyPage, CreateUnitPage, HomePage, LoginPage, OrgMastersPage } from "./RouteMain";
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
