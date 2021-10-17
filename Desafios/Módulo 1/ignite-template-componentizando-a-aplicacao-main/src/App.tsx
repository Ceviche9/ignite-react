import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import { MoviesProviders } from './hook/useContext';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() { 

  return (
    <MoviesProviders>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </MoviesProviders>
  )
}