interface DataCard1 {
  image: string;
  isi: string;
  name: string;
}
export const Card1 = ({ name, image, isi }: DataCard1) => {
  return (
    <div className="w-56 h-56 bg-white shadow-md rounded-xl border-2 border-black ">
      <img className="w-10 h-10 mt-2" src={image} />

      <h1 className="m-2 text-xl font-bold text-black">{name}</h1>
      <p>{isi}</p>
    </div>
  );
};

interface DataCard2 {
  image: string;
}
export const Card2 = ({ image }: DataCard2) => {
  return <img className="w-20 h-20 mt-2" src={image} />;
};
