import { Settings } from 'luxon';
import ReactDOM from 'react-dom/client';
import 'simplebar-react/dist/simplebar.min.css';
import App from './app';
import './i18n';
import './index.css';

Settings.defaultZone = 'Asia/Calcutta';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

