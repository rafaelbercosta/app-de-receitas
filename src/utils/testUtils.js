import { MemoryRouter } from 'react-router-dom';

function RouterWrapper({ children }) {
  return (
    <MemoryRouter>
      {children}
    </MemoryRouter>
  );
}

export default RouterWrapper;
