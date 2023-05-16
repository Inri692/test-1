interface Product {
  id: number;
  name: string;
  isi: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Website development",
    isi: "High performance website to reach out more your potential customers",
    image: "public/Payment.svg",
  },
  {
    id: 2,
    name: "TypeScript",
    isi: "High performance website to reach out more your potential customers",
    image: "public/CMS development.svg",
  },
  {
    id: 3,
    name: "HTML5",
    isi: "High performance website to reach out more your potential customers",
    image: "public/Digital product design.svg",
  },
  {
    id: 4,
    name: "CSS3",
    isi: "High performance website to reach out more your potential customers",
    image: "public/Maintenance.svg",
  },
  {
    id: 5,
    name: "Sass",
    isi: "High performance website to reach out more your potential customers",
    image: "public/Mobile apps development.svg",
  },
  {
    id: 6,
    name: "ReactJs",
    isi: "High performance website to reach out more your potential customers",
    image: "public/Payment.svg",
  },
];

export default products;
