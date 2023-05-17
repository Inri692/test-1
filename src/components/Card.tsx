interface DataCard1 {
  image: string;
  isi: string;
  name: string;
}
export const Card1 = ({ name, image, isi }: DataCard1) => {
  return (
    <div className="w-full h-44 bg-white shadow-md rounded-lg border-2 border-[#C4C4C4] ">
      <img className="m-4 w-10 h-10 mt-2" src={image} />

      <h1 className="m-4 text-xl font-bold text-[#FFCE07]">{name}</h1>
      <p className="m-4">{isi}</p>
    </div>
  );
};

interface DataCard2 {
  image: string;
}
export const Card2 = ({ image }: DataCard2) => {
  return <img className="w-24 h-24" src={image} />;
};

interface DataCard3 {
  image: string;
  isi: string;
  name: string;
  judul: string;
}
export const Card3 = ({ name, image, isi, judul }: DataCard3) => {
  return (
    <div className="w-80 h- bg-white shadow-md rounded-xl border-2 border-[#C4C4C4]  ">
      <img className="w-full h-52 " src={image} />
      <div className="m-3">
        <p className="text-[#C4C4C4] ">{judul}</p>
        <h1 className="text-xl font-bold text-[#FFCE07]">{name}</h1>
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
