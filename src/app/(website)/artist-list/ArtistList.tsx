import ArtistCard from "./ArtistCard";

export default function ArtistList() {
  const artists = [
    {
      id : 1,
      name: "Rayne",
      role: "Singer • Songwriter",
      price: 249,
      image: "/musick/luna.webp", // replace with real image
      audio: "/musick/musick-9.mp3", // replace with real audio
    },
    {
      id : 2,
      name: "Damian",
      role: "Singer • Songwriter",
      price: 209,
      image: "/musick/rayno.webp",
      audio: "/musick/musick-10.mp3", // replace with real audio
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto my-14  rounded-lg shadow-sm divide-y">
      {artists.map((artist, i) => (
        <ArtistCard key={i} {...artist} />
      ))}
    </div>
  );
}