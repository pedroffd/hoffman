import Image from 'next/image';

const AlreadyUser = () => {
  return (
    <div className="bg-card-foreground py-16">
      <div className="container px-4 md:flex md:items-center md:justify-center">
        {/* Column with the iPhone image */}
        <div className="mb-8 md:mb-0 md:mr-8">
          <Image
            src="/images/IphoneMockupMed2.png"
            alt="iPhone"
            height={402}
            width={195}
          />
        </div>

        {/* Column with text content */}
        <div className="text-center md:text-left w-6/12">
          <h3 className="text-6xl font-bold text-primary">
            Already a <span className="text-text-title">Medroster</span> user?
          </h3>

          <p className="text-xl text-text-title my-4">
            Join the community of thousands of doctors
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://itunes.apple.com/us/app/medroster/id1086724903"
              className="relative group text-white"
            >
              <div className="flex items-center space-x-2 bg-black rounded-lg py-2 px-4">
                <div>
                  <Image
                    src="/images/apple-icon.png"
                    alt="iOS App"
                    height={42}
                    width={42}
                  />
                </div>
                <div className="text-white hover:text-foreground">
                  <p className=" text-sm">Download on the</p>
                  <p className="text-xl font-bold">APP STORE</p>
                </div>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.medroster.patientdCVzdDox"
              className="relative group text-white"
            >
              <div className="flex items-center space-x-2 bg-black rounded-lg py-2 px-4">
                <div>
                  <Image
                    src="/images/android-icon.png"
                    alt="Android App"
                    height={42}
                    width={42}
                  />
                </div>
                <div className="text-white hover:text-foreground">
                  <p className="text-sm">Get it on</p>
                  <p className="text-xl font-bold">PLAY STORE</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlreadyUser;
