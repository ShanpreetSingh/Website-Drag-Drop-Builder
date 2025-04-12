import { useDrop } from 'react-dnd';
import { Box, Typography } from '@mui/material';
import Section from './Section';
import template from '../../templates/default.json';

export default function Canvas({ elements = [], addElement, selectElement }) {
  const [{ canDrop }, drop] = useDrop(() => ({
    accept: 'ELEMENT',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      addElement(item.type, 'main', offset);
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <Box
      ref={drop}
      sx={{
        backgroundColor: canDrop ? 'action.hover' : 'background.paper',
        p: 2,
        overflowY: 'auto',
        position: 'relative'
      }}
    >
      {template.sections.map((section) => (
        <Section
          key={section.id}
          section={section}
          elements={elements.filter(el => el.sectionId === section.id)}
          onSelect={selectElement}
        />
      ))}
      
      {elements.length === 0 && (
        <Box sx={{ textAlign: 'center', pt: 10 }}>
          <Typography variant="body1" color="text.secondary">
            Drag elements here to begin
          </Typography>
        </Box>
      )}
    </Box>
  );
}