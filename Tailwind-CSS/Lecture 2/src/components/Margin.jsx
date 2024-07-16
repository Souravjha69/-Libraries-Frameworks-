function Margin() {
  return (
    <>
      <div className="blur-sm">Here we are checking margin</div>
      <div className="-mt-8 bg-sky-300 mb-4">Checking negative Margin</div>
      {/* In this navigation Menu I've learnt Spacing */}
      <nav>
        <ul className="flex space-x-2 hover:space-x-8">
          <li></li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Comin soon..</li>
        </ul>
      </nav>

      {/* Here I'm learning border Radius  */}
      <div className="bg-red-400 w-80 p-4 text-white font-bold rounded-full mx-3 my-3 text-center border-4 border-green-400">
        Here checking the border
      </div>
      <div className="bg-red-400 w-80 p-4 text-white font-bold rounded-none mx-3 my-3 text-center">
        Here checking the border
      </div>
      <div className="divide-y divide-gray-400 hover:divide-y-8">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
    </>
  );
}
export default Margin;
