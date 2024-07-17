function Responsiveness() {
  return (
    <>
    <div
    className="lg:hidden bg-red-800 text-white sm:bg-purple-500 sm:text-center lg:bg-green-500 lg:text-left"
  >
   
   <h2>Here, we are learning Tailwind CSS with Responsiveness.</h2>
  </div>
  <div className="hidden lg:block bg-cyan-500 text-2xl text-center">
    <h3>Hello, this is Large Block and large text.</h3>
    <div className="flex justify-center">
    <img src="https://images.unsplash.com/photo-1720887236665-43caad593cdf?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" className="w-64 align-middle"/>
    </div>
  </div>
  
    </>
  
  );
}
export default Responsiveness;
