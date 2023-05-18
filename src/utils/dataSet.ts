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
    image: "public/Group 6.svg",
  },
  {
    id: 2,
    name: "Mobile apps development",
    isi: "To accelerate your business process",
    image: "public/Mobile apps development.svg",
  },
  {
    id: 3,
    name: "Digital product design",
    isi: "Complete digital product creations from UX prototyping to final UI designs",
    image: "public/Digital product design.svg",
  },
  {
    id: 4,
    name: "Maintenance",
    isi: "Make sure your digital environment keep online and updated",
    image: "public/Maintenance.svg",
  },
  {
    id: 5,
    name: "CMS development",
    isi: "You can update your website content yourself",
    image: "public/CMS development.svg",
  },
  {
    id: 6,
    name: "Integrated payment gateway ",
    isi: "Simplify the payment system with just one step",
    image: "public/Payment.svg",
  },
];

export default products;
