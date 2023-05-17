import { Card1 } from "../components/Card";
import { Card2 } from "../components/Card";
import { Card3 } from "../components/Card";
import { Card4 } from "../components/Card";
import Footer from "../components/Footer";

import Layout from "../components/Layout";
import gambar1 from "../assets/gambar1.jpeg";
import dot1 from "../assets/Group 3.png";
import dot2 from "../assets/Group 32.png";

import softwares from "../utils/dataSoftware";
import clients from "../utils/dataClient";
import products from "../utils/dataSet";
import techs from "../utils/dataTech";

const Home = () => {
  return (
    <Layout>
      <div className="relative mb-10">
        <div className="flex">
          <div className="flex-col w-2/5 ">
            <div className="pt-20 absolute left-1/3 mx-9">
              <img src={dot1} alt="dot1" />
            </div>

            <div className="flex flex-col z-40 absolute left-52 top-36 ">
              <button className="rounded-none text-6xl border border-black bg-white h-24 font-bold">
                Build or scale up
              </button>
              <h1 className="text-5xl  mt-5">your development tim</h1>
              <div className="flex flex-row mt-5">
                <div className="h-1 bg-[#FFCE07] mt-5 w-24 "></div>
                <p className="mt-2 mx-4 text-lg">in weeks, not months</p>
              </div>

              <button className="rounded-full bg-[#FFCE07] w-44 h-14 font-bold m-2 border border-black mt-5">
                Book now
              </button>
            </div>
          </div>
          <div className="flex w-3/5 ">
            <div className="flex flex-col ">
              <img src={gambar1} alt="gambar" className="z-10 mb-8" />
              <div className="absolute bottom-0 left-2/4 mx-20">
                <img src={dot2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid justify-items-center text-[#C4C4C4]">
          <p>complete package</p>
        </div>
        <div className="grid justify-items-center text-[#272727]">
          <div className="text-3xl font-black">
            From product design to software continuous delivery
          </div>
        </div>
        <div className="grid grid-cols-3 justify-items-center gap-5 mt-5 mx-32">
          {products.map((item) => (
            <Card1
              key={item.id}
              image={item.image}
              name={item.name}
              isi={item.isi}
            />
          ))}
        </div>
        <div className="grid grid-cols-6 mx-28 mt-16 justify-items-center gap-10">
          {techs.map((items) => (
            <Card2 key={items.id} image={items.image} />
          ))}
        </div>
      </div>
      <div className="bg-[#272727] h-56 text-white ">
        <div className="grid justify-items-center text-[#FFCE07] text-2xl m-6 font-bold pt-5">
          <h1>Our Progress Comes With a Collabration Between</h1>
          <span>Creativity, Ideas, and Technology</span>
        </div>
        <div className="grid grid-cols-3 justify-items-center">
          <div className="flex flex-col ">
            <div className="text-5xl">1000+</div>
            <div className="">desains</div>
          </div>
          <div className="flex flex-col ">
            <div className="text-5xl">30+</div>
            <div className="">products</div>
          </div>
          <div className="flex flex-col ">
            <div className="text-5xl">58+</div>
            <div className="">web development</div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid justify-items-center text-[#C4C4C4] mt-10">
          <p>portfolio</p>
        </div>
        <div className="grid justify-items-center text-[#272727] text-3xl font-bold drop-shadow-2xl">
          <h1 className="">The software that we build</h1>
          <span>takes our clients to next level</span>
        </div>
        <div className="grid grid-cols-3 justify-items-center mt-8 mx-28 ">
          {softwares.map((item) => (
            <Card3
              key={item.id}
              image={item.image}
              judul={item.judul}
              name={item.name}
              isi={item.isi}
            />
          ))}
        </div>
        <div className="grid justify-items-center text-black m-10">
          <button className="rounded-full bg-[#FFCE07] w-44 h-16 font-bold">
            Learn more
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="grid justify-items-center text-[#C4C4C4]">
          <p>Testimonials</p>
        </div>
        <div className="grid justify-items-center text-[#272727] text-4xl font-bold drop-shadow-2xl static">
          <div className="absolute">
            <h1 className="">What clients love in working</h1>
            <span className="grid justify-items-center">
              with Albatech Team
            </span>
          </div>
        </div>
        <div className="bg-[url('./public/bg.jpeg')] h-screen bg-no-repeat bg-contain bg-center static">
          <div className="absolute left-32 top-36 ">
            <p className="text-[#272727] text-4xl font-bold">Amazing people</p>
            <p className="text-[#272727] text-2xl w-1/2">
              "They are people who are not only following the tasks, but can
              work as a team. Together."
            </p>
            <div className="flex flex-row ">
              <div className="w-14 h-14 rounded-full bg-[#C4C4C4]"></div>
              <div className="flex flex-col mx-5">
                <p>Matthijs Plest</p>
                <p className="text-[#C4C4C4]">COO at WietaaltWat</p>
              </div>
            </div>
          </div>
          <div className="inline-block absolute right-0 top-1/4">
            <p className="text-[#272727] text-sm font-bold">Amazing people</p>
            <p className="text-[#272727] text-sm w-1/2">
              "They are people who are not only following the tasks, but can
              work as a team. Together."
            </p>

            <div className="flex flex-col text-sm mt-4">
              <p>Matthijs Plest</p>
              <p className="mt-2 text-[#C4C4C4]">COO at WietaaltWat</p>
            </div>
          </div>
          <div className="absolute left-36 top-1/2 ">
            <p className="text-[#272727] text-sm font-bold">Amazing people</p>
            <p className="text-[#272727] text-sm w-1/2">
              "They are people who are not only following the tasks, but can
              work as a team. Together."
            </p>

            <div className="flex flex-col text-sm mt-4">
              <p>Matthijs Plest</p>
              <p className="mt-2 text-[#C4C4C4]">COO at WietaaltWat</p>
            </div>
          </div>
          <div className="absolute right-20 top-2/4 ">
            <p className="text-[#272727] text-5xl font-bold">
              Partnership approach
            </p>
            <p className="text-[#272727] text-2xl w-96">
              "We felt like we had a true partner throughout the process. They
              wew clearly interested on our long -term success."
            </p>
            <div className="flex flex-row ">
              <div className="w-14 h-14 rounded-full bg-[#C4C4C4]"></div>
              <div className="flex flex-col mx-5">
                <p>Matthijs Plest</p>
                <p className="text-[#C4C4C4]">COO at WietaaltWat</p>
              </div>
            </div>
          </div>
          <div className="absolute left-1/4 top-3/4 ">
            <p className="text-[#272727] text-sm font-bold">Amazing people</p>
            <p className="text-[#272727] text-sm w-1/2">
              "They are people who are not only following the tasks, but can
              work as a team. Together."
            </p>

            <div className="flex flex-col text-sm mt-4">
              <p>Matthijs Plest</p>
              <p className="mt-2 text-[#C4C4C4]">COO at WietaaltWat</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 mx-28 justify-items-center gap-1 mt-4">
        {clients.map((items) => (
          <Card4 key={items.id} image={items.image} />
        ))}
      </div>
      <div className="grid justify-center w-full m-8">
        <div className="flex flex-row gap-4">
          <div className="w-4 h-4 rounded-full bg-[#FFCE07] justify-center text-center"></div>
          <div className="w-4 h-4 rounded-full bg-[#C4C4C4] justify-center text-center"></div>
          <div className="w-4 h-4 rounded-full bg-[#C4C4C4] justify-center text-center"></div>
        </div>
      </div>
      <div className="bg-[#FFCE07] text-black h-56 mx-20 rounded-xl grid justify-items-center">
        <p className="text-lg mt-6">Is software important for your business</p>
        <p className="text-4xl ">Build it with Albatech</p>
        <button className="rounded-full bg-[#FFCE07] w-44 h-14 font-bold m-2 border border-black">
          Consultant now
        </button>
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
