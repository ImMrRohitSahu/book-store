import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import BookContextProvider from "./contexts/BookContext";
import PageRoute from "./routes/PageRoute";
function App() {
  return (
    <BookContextProvider>
      <AppHeader />
      <PageRoute />
    </BookContextProvider>
  );
}

export default App;
