import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { Box, CssBaseline, useMediaQuery } from '@mui/material';
import ElementsPanel from './components/panels/ElementsPanel';
import Builder from './components/builder/Canvas';
import PropertiesPanel from './components/panels/PropertiesPanel';
import useBuilder from './hooks/useBuilder';

const BackendProvider = ({ children }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const backend = isMobile ? TouchBackend : HTML5Backend;
  
  return (
    <DndProvider backend={backend} options={{ enableMouseEvents: true }}>
      {children}
    </DndProvider>
  );
};

export default function App() {
  const builder = useBuilder();

  return (
    <>
      <CssBaseline />
      <BackendProvider>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '250px 1fr 300px' },
          height: '100vh'
        }}>
          <ElementsPanel />
          <Builder {...builder} />
          <PropertiesPanel {...builder} />
        </Box>
      </BackendProvider>
    </>
  );
}