import { Routes, Route } from "react-router-dom";
import {
  BrowsePage,
  CartPage,
  CatalogPage,
  HomePage,
  LspProfile,
  LspRegistrationPage,
  MainPage,
  NotFoundPage,
  OrderDetailPage,
  ProfilePage,
  SignInPage,
  SignUpPage,
} from "./pages";
import { useAuthPersist } from "./hooks";
import { LoadingAnimation, Toast } from "./components";
import { PrivateRoute } from "./routes/privateRoutes"

function App() {
  useAuthPersist()
  return (
    <>
      <LoadingAnimation />
      <Toast/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lsp/:lspId" element={<MainPage />} />
        <Route path="/browse-lsp" element={<BrowsePage />} />
        <Route path="/cart" element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        } />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/lsp-registration" element={<LspRegistrationPage />} />
        <Route path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          } />
        <Route path="/profile/orders"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          } />
        <Route path="/profile/address"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          } />

        <Route path="/orderDetails/:orderId"
          element={
            <PrivateRoute>
              <OrderDetailPage />
            </PrivateRoute>
          } />
          
        <Route path="/createCatalog"
          element={
            <PrivateRoute>
              <CatalogPage />
            </PrivateRoute>
          } />

        <Route path="/lsp-profile"
          element={
            <PrivateRoute>
              <LspProfile />
            </PrivateRoute>
          } />
           <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
}

export default App;
