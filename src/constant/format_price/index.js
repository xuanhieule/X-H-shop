let FormatPrice = (str) => {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export default FormatPrice;
