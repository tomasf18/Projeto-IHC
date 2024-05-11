import { Rating, Card, Footer } from "flowbite-react";
import CardImage from "../../../public/barbeiro.jpg";
import WorkItem from "./WorkItem";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";

export default function ProfessionalProfileComponent() {
  const info = [
    "Carlos Pereira",
    "Senior stylist and specialist for 7 years",
    "Graduated from Beauty School with a focus on hair design",
    "Certified Hairdresser from the State Board of Cosmetology",
    "Specialist in Hair and Extensions",
    "Largo do Padrão - Cabeleireiro",
  ];

  const Work = [
    { name: "Extensions"},
    { name: "Haircut"},
    { name: "Coloring"},
    { name: "Eyebrow Design"},
    { name: "Eyelash Extensions"},
    { name: "Skin Cleaning"},
    { name: "Acne Treatment"},
    { name: "Wrinkle Treatment"},
    { name: "Spot Treatment"}
  ];

  return (
    <>
      <div className="flex flex-wrap mb-8 mt-8">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="mb-8 flex items-center">
            <span className="text-gray-900 text-4xl">Professional Profile</span>
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
        <div className="flex-grow overflow-auto grid grid-cols-3 justify-items-center">
          {Work.map((item) => (
            <WorkItem key={item.name} cardImage={`https://via.placeholder.com/150`} text={item.name}/>
          ))}
        </div>
      </div>
    </>
  );
}
