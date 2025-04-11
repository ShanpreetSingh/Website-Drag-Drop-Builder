export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  export const getElementIcon = (type) => {
    const icons = {
      text: 'T',
      image: '📷',
      button: '🔘'
    };
    return icons[type] || '❓';
  };