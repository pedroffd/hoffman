import Image from 'next/image';

const AlreadyUser = () => {
  return (
    <div className="z-10 h-80 max-h-72 flex items-center justify-center relative inset-0">
      <div className="z-20">
        <h3 className="text-4xl font-bold text-center mx-8 pb-10 text-white">
          Already a Medroster User?
        </h3>

        <div className="flex text-center items-center justify-center space-x-2">
          <a
            href="https://itunes.apple.com/us/app/medroster/id1086724903"
            className="relative group textwhite hover:text-card-foreground"
          >
            <div className="absolute inset-0 bg-destructive rounded-full opacity-40 hover:opacity-20 border hover:border-2 border-accent-foreground hover:border-secondary"></div>

            <div className="flex items-center space-x-2  bg-transparent rounded-full py-2 px-4">
              <div>
                <Image
                  src="/images/apple-icon.png"
                  alt="iOS App"
                  height={32}
                  width={32}
                />
              </div>
              <div className=" text-white hover:text-foreground">
                <p className="font-bold text-base">DOWNLOAD</p>
                <p className="text-xs">FROM APP STORE</p>
              </div>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.medroster.patientdCVzdDox"
            className="relative group textwhite hover:text-card-foreground"
          >
            <div className="absolute inset-0 bg-destructive rounded-full opacity-40 hover:opacity-20 border border-accent-foreground hover:border-secondary"></div>

            <div className="flex items-center space-x-2  bg-transparent rounded-full py-2 px-4">
              <div>
                <Image
                  src="/images/apple-icon.png"
                  alt="iOS App"
                  height={32}
                  width={32}
                />
              </div>
              <div className=" text-white hover:text-foreground">
                <p className="font-bold text-base">DOWNLOAD</p>
                <p className="text-xs">FROM PLAY STORE</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <Image
        src="/images/minitron.jpg"
        alt="Already a Medroster user?"
        placeholder="blur"
        layout="fill"
        loading="lazy"
        blurDataURL="data:/images/minitron.jpg"
      />
    </div>
  );
};

export default AlreadyUser;
