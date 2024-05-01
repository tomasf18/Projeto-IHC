import FooterComponent from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Button, Rating, Card, Footer } from "flowbite-react";
import CardImage from "../../public/barbeiro.jpg";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";

export default function ProfessionalProfile() {
  const info = [
    "Nome",
    "Experiência",
    "Formação",
    "Certificação",
    "Especialidades",
    "Estabelecimento de trabalho",
  ];

  const trabalhos = [
    { nome: "Low Fade", imgSrc: CardImage },
    { nome: "Buzz Cut", imgSrc: CardImage },
    { nome: "Curly Mullet", imgSrc: CardImage },
    { nome: "Faux Hawk", imgSrc: CardImage },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="z-10">
          <Navbar />
        </div>
        <div
          className="flex-grow bg-gray-100 pl-8 pr-8" 
          style={{ paddingTop: "60.8px" }}
        >
          <div className="flex flex-wrap mb-8 mt-8">
            <div className="flex flex-col w-full md:w-1/2">
              <div className="mb-8 flex items-center">
                <span className="text-gray-900 text-4xl">
                  Professional Profile
                </span>
                <Button color="blue" className="px-4 py-2 ml-auto">
                  <span className="text-md">Edit Info</span>
                </Button>
              </div>
              {info.map((info, index) => (
                <span
                  key={index}
                  className={`text-gray-900 text-2xl border-b-4 mb-6 pb-6 ${
                    index === 0 ? "border-t-4 pt-6" : ""
                  }`}
                >
                  {info}
                </span>
              ))}
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0 flex items-center justify-center">
              <div>
                <Card
                  className="max-w-sm dark:bg-white dark:border-gray-200"
                  imgSrc={CardImage}
                >
                  <Rating size="md" className="mb-2">
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star filled={false} />

                    <p className="ml-2 text-sm font-medium text-gray-500">
                      4.12 of 5
                    </p>
                    <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500" />
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-900 underline hover:no-underline"
                    >
                      17 reviews
                    </a>
                  </Rating>
                  <div className="flex space-x-8 sm:mt-0 sm:justify-center">
                    <Footer.Icon
                      className="dark:hover:text-gray-900"
                      href="#"
                      icon={BsFacebook}
                    />
                    <Footer.Icon
                      className="dark:hover:text-gray-900"
                      href="#"
                      icon={BsInstagram}
                    />
                    <Footer.Icon
                      className="dark:hover:text-gray-900"
                      href="#"
                      icon={BsTwitter}
                    />
                    <Footer.Icon
                      className="dark:hover:text-gray-900"
                      href="#"
                      icon={BsPinterest}
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center border-b-4 pb-8">
              <span className="text-gray-900 text-4xl">My work</span>
            </div>
            <div className="flex flex-wrap justify-center mt-8 border-b-4 mb-8">
              {trabalhos.map((trabalho, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 pb-12"
                >
                  <Card
                    className="max-w-sm dark:bg-white dark:border-gray-200"
                    imgSrc={trabalho.imgSrc}
                  >
                    <span className="text-center text-xl">{trabalho.nome}</span>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}