import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Toastify
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Radio: {
            buttonSolidCheckedBg: '#009ca9',
            buttonSolidCheckedHoverBg: '#009ca9',
            buttonSolidCheckedActiveBg: '#009ca9',
          },

          Table: {
            headerBg: '#009ca9',
            headerColor: '#fff',
            headerSortActiveBg: '#27b2bf',
            headerSplitColor: '#f0f0f0',
            headerSortHoverBg: '#27b2bf',
            bodySortBg: '#27b2bf13',
          },
        },
        token: {
          colorPrimary: '#009ca9',
          colorPrimaryHover: '#00b8c9',
        },
      }}
    >
      <Provider store={store}>
        <Toaster position="top-center" />
        <App />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
