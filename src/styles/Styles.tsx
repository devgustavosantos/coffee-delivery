import { ToastContainer } from 'react-toastify';

import { Global } from './global.styles';
import { Reset } from './reset.styles';

import 'react-toastify/dist/ReactToastify.css';

export function Styles() {
  return (
    <>
      <Reset />
      <Global />
      <ToastContainer
        position={'bottom-right'}
        autoClose={5000}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    </>
  );
}
