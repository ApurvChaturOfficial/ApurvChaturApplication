import { useEffect } from "react";

import.meta.env.VITE_APPLICATION === "ApurvChatur" ? import("./index1.css") :
import.meta.env.VITE_APPLICATION === "SofieBerkin" ? import("./index2.css") :
import.meta.env.VITE_APPLICATION === "AnushreeMandape" ? import("./index3.css") : null

// react-router components
import { Routes, Route, Navigate, BrowserRouter, useLocation } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { Action } from "../love/eLayout/aGlobalLayout/extra/State";

// Layout
import GlobalLayout from "src/love/eLayout/aGlobalLayout";
import UnprotectedLayout from "src/love/eLayout/bUnprotectedLayout";
import ProtectedLayout from "src/love/eLayout/cProtectedLayout";
import AuthenticatedLayout from "src/love/eLayout/dAuthenticatedLayout";
import AuthorisedLayout from "src/love/eLayout/eAuthorisedLayout";
import TopbarLayout from "src/love/eLayout/fTopbarLayout";
import SidebarLayout from "src/love/eLayout/gSidebarLayout";

// Page
import HomePage from "src/love/fPage/bUnprotectedPage/aHomePage";

import RouteName from "src/love/gRoute/RouteName";
import PortfolioCardListPage from "src/love/fPage/bUnprotectedPage/bPortfolioCardPage/aPortfolioCardListPage";
import EventCardListPage from "src/love/fPage/bUnprotectedPage/cEventCardPage/aEventCardListPage";
import BlogCardListPage from "src/love/fPage/bUnprotectedPage/dBlogCardPage/aBlogCardListPage";
import PortfolioCardRetrievePage from "src/love/fPage/bUnprotectedPage/bPortfolioCardPage/bPortfolioCardRetrievePage";


export default function App2() {
  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.GlobalLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};

  // Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])

  // JSX
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout ReduxUltimate={Redux} />} >
            <Route element={<UnprotectedLayout ReduxUltimate={Redux} />} >
              <Route path={RouteName.GlobalRoute.HomeRoute} element={<HomePage ReduxUltimate={Redux} />} />

              <Route path={RouteName.GlobalRoute.PortfolioCardListRoute} element={<PortfolioCardListPage ReduxUltimate={Redux} />} />
              <Route path={`${RouteName.GlobalRoute.PortfolioCardRetrieveRoute}/:id`} element={<PortfolioCardRetrievePage ReduxUltimate={Redux} />} />

              <Route path={RouteName.GlobalRoute.EventCardListRoute} element={<EventCardListPage ReduxUltimate={Redux} />} />
              {/* <Route path={`${RouteName.GlobalRoute.EventCardRetrieveRoute}/:id`} element={<EventCardListPage ReduxUltimate={Redux} />} /> */}

              <Route path={RouteName.GlobalRoute.BlogCardListRoute} element={<BlogCardListPage ReduxUltimate={Redux} />} />
              {/* <Route path={`${RouteName.GlobalRoute.BlogCardRetrieveRoute}/:id`} element={<BlogCardListPage ReduxUltimate={Redux} />} /> */}
            </Route>

            <Route element={<ProtectedLayout ReduxUltimate={Redux} />} >
              <Route element={<AuthenticatedLayout ReduxUltimate={Redux} />} >
                {/* <Route path={RouteName.AuthRoute.LoginRoute} element={<LoginPage ReduxUltimate={Redux} />} /> */}
                {/* <Route path={RouteName.AuthRoute.RegisterRoute} element={<RegisterPage ReduxUltimate={Redux} />} /> */}
                {/* <Route path={RouteName.AuthRoute.ForgotPasswordRoute} element={<ForgotPasswordPage ReduxUltimate={Redux} />} /> */}
                {/* <Route path={`${RouteName.AuthRoute.ResetPasswordRoute}/:token`} element={<ResetPasswordPage ReduxUltimate={Redux} />} /> */}
              </Route>

              <Route element={<AuthorisedLayout ReduxUltimate={Redux} />} >
                <Route element={<TopbarLayout ReduxUltimate={Redux} />} >
                  {/* <Route path={RouteName.ContentRoute.TopbarRoute.ProfileRetrieveRoute} element={<ProfileRetrievePage ReduxUltimate={Redux} />} /> */}
                  {/* <Route path={RouteName.ContentRoute.TopbarRoute.ProfileUpdateRoute} element={<ProfileUpdatePage ReduxUltimate={Redux} />} /> */}
                  {/* <Route path={RouteName.ContentRoute.TopbarRoute.ProfilePasswordUpdateRoute} element={<ProfilePasswordUpdatePage ReduxUltimate={Redux} />} /> */}
                  {/* <Route path={RouteName.ContentRoute.TopbarRoute.ProfileDeleteRoute} element={<ProfileDeletePage ReduxUltimate={Redux} />} /> */}
                </Route>

                <Route element={<SidebarLayout ReduxUltimate={Redux} />} >
                </Route>
              </Route>
            </Route>
          </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
