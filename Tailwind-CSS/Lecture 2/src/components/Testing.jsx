function Testing() {
  return (
    <div>
      {/* Here I'm using 3 types of font in Tailwind using font family.  */}
      <div className="mx-5 font-sans">I'm Using mx-5</div>
      <div className="mx-5 Playwrite CU, cursive">I'm Using mx-5</div>
      <div className="mx-5 font-mono">I'm Using mx-5</div>
      <div className="font-bold mx-3 my-4 text-3xl ">I'm using font bold </div>
      <span className="font-bold antialiased italic text-xl">Sourav kumar</span>
      <h4 className="inline-block text-xl">Jha</h4>
      <p className="text-left hover:text-center">
        So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers a
        strange calm came over me. I don't know if it was divine intervention or
        the kinship of all living things but I tell you Jerry at that moment, I
        was a marine biologist.
      </p>
      <div className="tracking-widest">Here I'm checking letter spacing</div>
    </div>
  );
}

export default Testing;
