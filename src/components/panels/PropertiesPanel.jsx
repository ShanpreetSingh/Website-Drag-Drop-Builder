import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { Box, Typography } from '@mui/material';
import * as Yup from 'yup';

const textSchema = Yup.object().shape({
  content: Yup.string().required('Required'),
  styles: Yup.object().shape({
    fontSize: Yup.string(),
    color: Yup.string()
  })
});

export default function PropertiesPanel({ selectedElement, updateElement }) {
  if (!selectedElement) {
    return (
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography>Select an element to edit</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2, overflowY: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Properties
      </Typography>
      
      <Formik
        initialValues={selectedElement}
        validationSchema={textSchema}
        onSubmit={(values) => updateElement(selectedElement.id, values)}
      >
        <Form>
          {selectedElement.type === 'text' && (
            <>
              <Field
                component={TextField}
                name="content"
                label="Text Content"
                multiline
                rows={4}
                fullWidth
                margin="normal"
              />
              <Field
                component={TextField}
                name="styles.color"
                label="Text Color"
                fullWidth
                margin="normal"
              />
            </>
          )}
        </Form>
      </Formik>
    </Box>
  );
}