import Image from "next/image";

const HeadlineImage = () => {
  return (
    <Image
      src="/encurv-logo_AI_memory_engine_interface_for_Gen_AI_applications_and_assistants.jpeg"
      alt="AI tools for Gen AI apps, AI assistants, memory engine, and AI for businesses."
      width={1920}
      height={1080}
      className="h-screen w-full rounded-4xl object-cover lg:h-full"
    />
  );
};

export default HeadlineImage;