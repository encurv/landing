import Image from "next/image";

const HeadlineImage = () => {
  return (
    <Image
      src="/headline2.jpeg"
      alt="Headline"
      width={1920}
      height={1080}
      className="h-screen w-full rounded-4xl object-cover lg:h-full"
    />
  );
};

export default HeadlineImage;