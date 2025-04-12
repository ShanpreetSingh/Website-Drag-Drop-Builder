import { Box, Button, Typography } from '@mui/material';
export default function TemplateSelector({ templates, onSelect }) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">Select Template</Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        {templates.map((template) => (
          <Button 
            key={template.id} 
            variant="outlined"
            onClick={() => onSelect(template.id)}
          >
            {template.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
}