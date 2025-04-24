import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import store from './reducers/store.js';
import { BrowserRouter } from 'react-router';

store.subscribe(() => console.log(store.getState()));

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
);
