import { toast } from "react-hot-toast";

// use local storage to manage cart data
const addToDb = id => {
  let jobApplied = getShoppingCart();
  // add quantity
  const quantity = jobApplied[id];
  if (!quantity) {
      jobApplied[id] = 1;
  }
  else {
      const newQuantity = quantity + 1;
      jobApplied[id] = newQuantity;
      toast.error('alrady added')
  }
  localStorage.setItem('job-id', JSON.stringify(jobApplied));
}



const getShoppingCart = () => {
  let jobApplied = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('job-id');
  if (storedCart) {
      jobApplied = JSON.parse(storedCart);
  }
  return jobApplied;
}



export {
  addToDb,
  getShoppingCart,
}