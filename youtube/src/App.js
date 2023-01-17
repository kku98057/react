import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Outlet } from "react-router";
import SearchHeader from "./components/SearchHeader";
import { YoutubeAPIsProvider } from "./context/YoutubeContextApis";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <SearchHeader></SearchHeader>
      <YoutubeAPIsProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet></Outlet>
        </QueryClientProvider>
      </YoutubeAPIsProvider>
    </div>
  );
}

export default App;
