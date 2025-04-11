import { useState } from 'react';

const useBuilder = () => {
  const [elements, setElements] = useState([]);
  const [selectedElementId, setSelectedElementId] = useState(null);

  const addElement = (type, sectionId) => {
    const newElement = {
      id: `el-${Date.now()}`,
      type,
      sectionId,
      ...(type === 'text' && { 
        content: 'New Text', 
        styles: { 
          color: '#000000',
          fontSize: '16px'
        } 
      }),
      ...(type === 'image' && { 
        src: '', 
        alt: '', 
        styles: { 
          width: '100%' 
        } 
      }),
      ...(type === 'button' && { 
        text: 'Button', 
        styles: { 
          backgroundColor: '#1976d2',
          color: '#ffffff'
        } 
      })
    };
    setElements([...elements, newElement]);
    setSelectedElementId(newElement.id);
    return newElement;
  };

  const updateElement = (id, updates) => {
    setElements(elements.map(el => 
      el.id === id ? { ...el, ...updates } : el
    ));
  };

  const selectElement = (id) => {
    setSelectedElementId(id);
  };

  return {
    elements,
    selectedElement: elements.find(el => el.id === selectedElementId),
    addElement,
    updateElement,
    selectElement,
    selectedElementId
  };
};

export default useBuilder;