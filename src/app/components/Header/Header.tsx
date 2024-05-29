import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex w-full py-10">
      <div className="container flex">
        <div className="flex">
          <Image src="/logo.svg" alt="Shortly logo" width={150} height={50} />
        </div>
      </div>
    </header>
  );
};
