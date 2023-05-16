interface Software {
  id: number;
  image: string;
  name: string;
  isi: string;
  judul: string;
}
const softwares: Software[] = [
  {
    id: 1,
    judul: "Mobile apps",
    name: "ILIOS app (B2B E-commerce)",

    isi: "Has unique selling point where not all companies ofter applications for sales, data collection and management",
    image: "public/software/Rectangle 1914.png",
  },
  {
    id: 2,
    judul: "Website development",
    name: "Home and Living",
    isi: "Albatech helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Home and Living",
    image: "public/software/Rectangle 1914.png",
  },
  {
    id: 3,
    judul: "Website development",
    name: "HIPPO",
    isi: "Albatech help to create e-commerce and company profile for Hippo's Website with realtime transaction and integration with Payment Gateway to accept multi payment.",
    image: "public/software/Rectangle 1914.png",
  },
];

export default softwares;
