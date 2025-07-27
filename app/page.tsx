import Blocks from "@/components/animations/blocks";
import Filter from "@/components/animations/filter";
import Graph from "@/components/animations/graph";
import Footer from "@/components/footer";
import Headline from "@/components/headline";
import Logo from "@/components/icons/logo";
import Pricing from "@/components/pricing";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Headline />

      <div id="features">
        <Section>
          <Card className="grid h-full min-w-full items-center gap-8 p-6 lg:max-w-md lg:grid-cols-2">
            <div className="flex-shrink-0">
              <Blocks />
            </div>
            <div>
              <CardTitle className="flex flex-col text-2xl font-bold">
                Signal over noise
              </CardTitle>
              <CardDescription className="mt-2 text-lg">
                Our memory engine automatically identifies and extracts valuable
                context from user interactions — preferences, decisions, company
                knowledge, and more. No manual tagging, no predefined schemas —
                just clean, structured memory.
                <Button className="mt-4 w-full" disabled variant={"outline"}>
                  Coming soon
                </Button>
              </CardDescription>
            </div>
          </Card>
        </Section>

        <Section>
          <Card className="grid h-full min-w-full items-center gap-8 p-6 lg:max-w-md lg:grid-cols-2">
            <div className="lg:order-2">
              <Filter />
            </div>
            <div className="lg:order-1">
              <CardTitle className="flex flex-col text-2xl font-bold">
                Smarter prompts, fewer tokens
              </CardTitle>
              <CardDescription className="mt-2 text-lg">
                Only the most relevant information is injected into each model
                call — keeping responses accurate, personalized, and lean. We
                help you stay fast, focused, and cost-effective.
                <Button className="mt-4 w-full" disabled variant={"outline"}>
                  Coming soon
                </Button>
              </CardDescription>
            </div>
          </Card>
        </Section>

        <Section>
          <Card className="grid h-full min-w-full items-center gap-8 p-6 lg:max-w-md lg:grid-cols-2">
            <div>
              <Graph />
            </div>
            <div>
              <CardTitle className="flex flex-col text-2xl font-bold">
                Memory that grows with you
              </CardTitle>
              <CardDescription className="mt-2 text-lg">
                Whether you're serving 10 users or 10 million, our
                infrastructure is built to scale — handling memory storage,
                retrieval, and updates seamlessly. No ops overhead, no
                bottlenecks.
                <Button className="mt-4 w-full" disabled variant={"outline"}>
                  Coming soon
                </Button>
              </CardDescription>
            </div>
          </Card>
        </Section>
      </div>

      <div id="pricing" />
      <Separator className="mx-auto my-16 max-w-lg" />

      <Pricing />

      <Separator className="mx-auto my-16 max-w-lg" />

      <Section>
        <h1 className="text-center text-7xl font-bold">
          Be the first to know when we launch!
        </h1>
        <div className="mt-8 flex w-full max-w-md items-center justify-between rounded-full bg-white/10 px-4 py-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
          />
          <Button variant={"default"} className="ml-4 rounded-full">
            Join waitlist
          </Button>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
