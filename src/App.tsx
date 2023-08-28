import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./router/mainRouter";
import { Provider } from "react-redux";
import { store } from "./global/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
const App = () => {
  return (
    <div>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <RouterProvider router={mainRoute} />
        </Provider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
