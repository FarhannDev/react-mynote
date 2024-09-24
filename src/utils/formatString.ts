const formatString: (input: string) => string = (input: string): string => {
  return input.toLowerCase().replace(/\s+/g, '-');
};

export default formatString;
