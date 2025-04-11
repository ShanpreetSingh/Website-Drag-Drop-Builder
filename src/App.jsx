import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Box } from '@mui/material';
import ElementsPanel from './components/panels/ElementsPanel';
import Builder from './components/builder/Canvas';
import PropertiesPanel from './components/panels/PropertiesPanel';
import useBuilder from './hooks/useBuilder';

export default function App() {
  const builder = useBuilder();

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '250px 1fr 300px',
        height: '100vh',
        backgroundColor: '#fafafa'
      }}>
        <ElementsPanel />
        <Builder {...builder} />
        <PropertiesPanel {...builder} />
      </Box>
    </DndProvider>
  );
}