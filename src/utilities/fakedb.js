import { toast } from "react-hot-toast";

// use local storage to manage job data
const addToDb = (id) => {
  let appliedJob = getJobApplied();
  if(appliedJob){
      let exist = appliedJob.find(job=> job === id)
      if(exist){
        toast.error('Alrady Applied! ☠️', { autoClose: 500 })
        
      }
      else{
        appliedJob.push(id);
      }
    
}
else{
    appliedJob.push(id);
  }
  localStorage.setItem("job-id", JSON.stringify(appliedJob));
};
const getJobApplied = () => {
  let appliedJob = [];

  //get the shopping job from local storage
  const storedJob = localStorage.getItem("job-id");
  if (storedJob) {
    appliedJob = JSON.parse(storedJob);
  }
  return appliedJob;
};

export { addToDb, getJobApplied };
