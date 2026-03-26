export const formatName = (nameArray) => {
  if (!nameArray || nameArray.length === 0) return 'Unknown Patient';
  const name = nameArray[0];
  const given = name.given ? name.given.join(' ') : '';
  const family = name.family || '';
  return `${given} ${family}`.trim();
};

export const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString();
};
