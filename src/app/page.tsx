import Box from "@/components/Box";

export default function Home() {
  return (
    <Box styles="-translate-x-full opacity-0">
      <>
      <section className="w-5/6 my-4 mx-auto">
          <h1 className="text-3xl text-center my-2">About</h1>
          <p>Rick and Morty is an American animated science fiction show created by <a className="font-semibold underline">Justin Roiland</a> and <a className="font-semibold underline">Dan Harmon</a> for <a className="font-semibold underline">Cartoon Network</a>&apos;s nighttime programming block <a className="font-semibold underline">Adult Swim</a>.The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick&apos;s flying saucer.</p>
          <p>The series addresses the insignificance of human existence as compared to the size of the universe, with no recognizable divine presence, as described by <a className="font-semibold underline">Lovecraft</a>&apo;s philosophy of <a className="font-semibold underline">cosmicism</a>.</p>
      </section>
      <section className="w-5/6 my-4 mx-auto">
          <h1 className="text-3xl text-center my-2">Reception</h1>
          <p><span className="italic">Rick and Morty</span> has been met with critical acclaim since its release, holding an average approval rating of 90% on Rotten Tomatoes for the entire series and The A.V club gave it an &quot;A-&quot;.The show received praises from the likes of The New York Times, San Francisco Chronicle and Variety.</p>
      </section>
      <section className="w-5/6 my-4 mx-auto">
        <h1 className="text-3xl text-center my-2">Comedic Style</h1>
        <p>The general gist of the show is the juxtaposition of two conflicting secenarios, an extremely selfish and albeit smart grandfather dragging his grandson along for interdimensional adventures and intercut family drama.Co-creator <a className="font-semibold underline">Dan Harmon</a> had described as being a combination of <a className="underline text-emerald-700">The Simpsons</a> and <a className="underline text-emerald-700">Futurama</a>.</p>
        <p>The show has won 10 awards across its airing time and has definitely left an impact in today&apo;s generation in terms of comedy and storytelling.</p>
      </section>
      </>
    </Box>
  );
}
