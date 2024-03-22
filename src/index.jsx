import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "../server.js";
import { requireAuth } from "../utlies/auth.js";
import Error from "./components/Error/Error.jsx";
import HostLayout from "./components/HostLayout/HostLayout.jsx";
import Layout from "./components/Layout/Layout.jsx";
import About from "./pages/About/About.jsx";
import Home from "./pages/Home/Home.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import HostVanDetails from "./pages/Host/HostVanDetails.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import VanDetail, {
  loader as VanDetailLoader,
} from "./pages/Vans/VanDetail.jsx";
import Vans, { Loader as vansLoader } from "./pages/Vans/Vans.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} loader={vansLoader} />
        <Route
          path="vans/:id"
          element={<VanDetail />}
          loader={VanDetailLoader}
        />

        <Route path="host" element={<HostLayout />}>
          <Route
            index
            element={<Dashboard />}
            loader={async () => {
              return await requireAuth();
            }}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="reviews"
            element={<Reviews />}
            loader={async () => {
              return null;
            }}
          />

          <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
          <Route
            path="vans/:id"
            element={<HostVanDetails />}
            loader={async () => {
              return null;
            }}
          >
            <Route
              index
              element={<HostVanInfo />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="pricing"
              element={<HostVanPricing />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="photos"
              element={<HostVanPhotos />}
              loader={async () => {
                return null;
              }}
            />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
