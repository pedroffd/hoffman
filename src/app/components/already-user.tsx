import Image from 'next/image';

const AlreadytUser = () => {
  return (
    <div className="h-96 max-h-60 bg-yellow-400 flex items-center justify-center">
      {/* Adicionando classe diretamente à tag <Image> */}
      <Image
        src="/images/minitron.jpg"
        alt="Already a Medroster user?"
        placeholder="blur"
        layout="fill"
        loading="lazy"
        blurDataURL="data:/images/minitron.jpg"
        className="h-16"
      />
    </div>
  );
};

export default AlreadytUser;
