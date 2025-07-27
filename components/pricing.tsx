"use client";

import { Separator } from "@radix-ui/react-separator";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardTitle, CardDescription } from "./ui/card";

const Pricing = () => {
  return (
    <>
      <motion.div
        className="container mx-auto my-16 max-w-4xl px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-center text-4xl font-bold">Pricing</h1>
      </motion.div>
      <motion.div
        className="mx-auto flex max-w-7xl flex-col gap-4 px-8 lg:flex-row"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {[
          {
            title: "Hobby",
            price: "Free",
            features: [
              "Up to 10,000 memories",
              "1,000 API calls per month",
              "Unlimited end users",
            ],
            button: "Start for free",
          },
          {
            title: "Starter",
            price: "$10/month",
            features: [
              "Up to 50,000 memories",
              "10,000 API calls per month",
              "Unlimited end users",
            ],
            button: "Subscribe now",
          },
          {
            title: "Pro",
            price: "$100/month",
            features: [
              "Unlimited memories",
              "50,000 API calls per month",
              "Unlimited end users",
            ],
            button: "Subscribe now",
          },
        ].map((plan, idx) => (
          <Card
            key={plan.title}
            className="container mx-auto flex max-w-lg flex-1 flex-col p-6 lg:max-w-sm"
            style={{ minHeight: "500px" }}
          >
            <CardTitle className="text-3xl font-bold lg:text-start">
              <h1 className="text-4xl font-bold lg:text-4xl">{plan.title}</h1>
              <h2 className="text-2xl font-normal text-gray-400 lg:text-2xl">
                {plan.price}
              </h2>
              <Separator className="mt-4" />
            </CardTitle>
            <CardDescription className="flex flex-1 flex-col text-lg">
              <span>
                {idx === 0
                  ? "Our free plan is perfect for individuals and small teams looking to explore the power of memory in AI applications."
                  : idx === 1
                    ? "Our starter plan is ideal for small businesses and teams ready to leverage memory in their AI applications."
                    : "Ideal for growing teams and businesses, our Pro plan offers advanced features and higher limits to support your AI applications."}
              </span>
              <ul className="mt-4 list-disc pl-6 text-white">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="flex-1" />
              <Button className="mt-6 w-full" disabled>
                {plan.button}
              </Button>
            </CardDescription>
          </Card>
        ))}
      </motion.div>
    </>
  );
};

export default Pricing;
