


import Home from "./routes/Home"
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
 

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false} 
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover={false}
              theme="light"
            />
         <Home/>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
