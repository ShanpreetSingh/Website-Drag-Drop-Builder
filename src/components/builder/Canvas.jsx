import { useDrop } from 'react-dnd';
import Section from './Section';
import { Box, Typography } from '@mui/material';
import template from '../../templates/default.json';

export default function Canvas({ elements = [], addElement }) {
  const [{ canDrop }, drop] = useDrop(() => ({
    accept: 'ELEMENT',
    drop: (item) => addElement(item.type, 'main'),
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <Box
      ref={drop}
      sx={{
        backgroundColor: canDrop ? '#f0f0f0' : 'white',
        p: 2,
        border: '1px dashed #ccc',
        overflowY: 'auto'
      }}
    >
      {template.sections.map((section) => (
        <Section
          key={section.id}
          section={section}
          elements={elements.filter(el => el.sectionId === section.id)}
        />
      ))}
      {elements.length === 0 && (
        <Typography color="textSecondary">
          Drag elements here
        </Typography>
      )}
    </Box>
  );
}