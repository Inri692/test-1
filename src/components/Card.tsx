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

interface DataCard3 {
  image: string;
  isi: string;
  name: string;
  judul: string;
}
export const Card3 = ({ name, image, isi, judul }: DataCard3) => {
  return (
    <div className="w-96 h-96 bg-white shadow-md rounded-xl border-2 border-[#FFCE07]  ">
      <img className="w-full h-52 " src={image} />
      <div className="m-3">
        <p className="text-[#C4C4C4] ">{judul}</p>
        <h1 className="text-xl font-bold text-black">{name}</h1>
        <p>{isi}</p>
      </div>
    </div>
  );
};

interface DataCard4 {
  image: string;
}
export const Card4 = ({ image }: DataCard4) => {
  return <img className="w-44 h-44 mt-2" src={image} />;
};
