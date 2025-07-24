import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

function FeatureCard({ icon, title, children }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        {icon}
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          color="blue-gray"
          className="px-8 font-normal text-gray-700"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon1.png" />
    ),
    title: "Pour les micro entrepreneurs",
    description:
      "Obtenez les prix réservés aux PME. Profitez de la puissance de notre plateforme pour développer votre activité.",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon2.png" />
    ),
    title: "Pour les petites entreprises",
    description:
      "Grâce à notre plate-forme, économisez sur le prix de vos fournitures. Vous avez des réductions chez vos fournisseurs habituels ? Nous en avons aussi !",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon3.png" />
    ),
    title: "Pour les magasins",
    description:
      "Vous en avez assez de devoir préparer toutes les commandes à l'ouverture du magasin ? Nous vous aidons à planifier le retrait des commandes.",
  }
];

export function FeatureLanding() {
  return (
    <section className="px-4 mt-12">
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureLanding;
