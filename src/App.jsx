import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Box, CssBaseline } from '@mui/material';
import ElementsPanel from './components/panels/ElementsPanel';
import Builder from './components/builder/Canvas';
import PropertiesPanel from './components/panels/PropertiesPanel';
import Header from './components/Header';
import useBuilder from './hooks/useBuilder';

export default function App() {
  const builder = useBuilder();

  return (
    <>
      <CssBaseline />
      <DndProvider backend={HTML5Backend}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          bgcolor: '#f8fafc'
        }}>
          <Header />
          <Box sx={{
            display: 'flex',
            flex: 1,
            p: 3,
            gap: 3
          }}>
            <ElementsPanel />
            <Builder {...builder} />
            <PropertiesPanel {...builder} />
          </Box>
        </Box>
      </DndProvider>
    </>
  );
}