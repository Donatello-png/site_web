import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";

export function HeroPresentation() {
 
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white relative px-8 py-8 lg:mb-36">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left pt-32">
            <div className="mb-8 inline-flex items-center">
              <Typography
                color="dark"
                variant="small"
                className="flex items-center font-bold uppercase"
              >
                Donatello Peinture
              </Typography>
            </div>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 lg:mr-32 leading-tight font-black"
            >
              Ensemble, réinventons l'achat de peinture avec <span className="text-blue">Donatello Peinture</span>
            </Typography>
            <Typography variant="lead" color="blue-gray" className="lg:pr-32">
              Téléphone, papier, mails... Passons dans l'ère du digital pour fluidifier les achats de matériel de peinture.
            </Typography>
          </div>
        </div>
        <div className="hidden lg:flex">
          <img src="header.png" alt="components" className="absolute -top-10 right-0 w-1/2" />
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroPresentation;
