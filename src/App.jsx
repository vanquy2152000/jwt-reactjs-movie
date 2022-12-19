import { CssBaseline, ThemeProvider } from "@mui/material"
import { useSelector } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import MainLayout from "./components/layout/MainLayout"
import themeConfigs from "./configs/theme.configs"
import routes from "./routes/routes"
import PageWrapper from './components/common/PageWrapper';

const App = () => {
  const { themeMode } = useSelector(state => state.themeMode)

  return (
    <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
      {/* config toastify */}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnclick
        pauseOnFocusLoss
        pauseOnHover
        theme={themeMode}
      />
      {/* mui reset css */}
      <CssBaseline />

      {/* app routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {routes.map((route, index) => (
              route.index ?
                (
                  <Route
                    index
                    key={index}
                    element={route.state ? (
                      <PageWrapper state={route.state}>{route.element}</PageWrapper>
                    ) : route.element}
                  />
                ) : (
                  <Route
                    path={route.path}
                    key={index}
                    element={route.state ? (
                      <PageWrapper state={route.state}>{route.element}</PageWrapper>
                    ) : route.element}
                  />
                )
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* app routes */}
    </ThemeProvider>
  )
}

export default App
