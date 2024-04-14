import Image from 'next/image';
import Link from 'next/link';

const AlreadyUser = () => {
  return (
    <div className="bg-card-foreground py-16">
      <div className="container px-4 md:flex md:items-center md:justify-center">
        {/* Column with the iPhone image */}
        <div className="mb-8 md:mb-0 md:mr-8 text-center">
          <Image
            src="/images/IphoneMockupMed2.png"
            alt="iPhone"
            height={402}
            width={195}
            className="mx-auto" // Adicionando classe para centralizar horizontalmente
          />
        </div>

        {/* Column with text content */}
        <div className="text-center md:text-start md:w-6/12">
          <h3 className="text-6xl font-bold text-primary">
            Already a <span className="text-text-title">Medroster</span> user?
          </h3>

          <p className="text-xl text-text-title my-4">
            Join the community of thousands of doctors
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center sm:space-x-4">
            <Link
              href="https://itunes.apple.com/us/app/medroster/id1086724903"
              className="relative group text-white"
            >
              <div className="flex items-center space-x-2 bg-black rounded-lg py-2 px-4 w-52 h-16 my-1">
                <div>
                  <Image
                    src="/images/apple-icon.png"
                    alt="iOS App"
                    height={42}
                    width={42}
                  />
                </div>
                <div className="text-white hover:text-foreground text-start">
                  <p className="text-sm">Download on the</p>
                  <p className="text-xl font-bold">APP STORE</p>
                </div>
              </div>
            </Link>

            <Link
              href="https://play.google.com/store/apps/details?id=com.medroster.patientdCVzdDox"
              className="relative group text-white"
            >
              <div className="flex items-center space-x-2 bg-black rounded-lg py-2 px-4 w-52 h-16 my-1">
                <div>
                  <Image
                    src="/images/android-icon.png"
                    alt="Android App"
                    height={42}
                    width={42}
                  />
                </div>
                <div className="text-white hover:text-foreground text-start">
                  <p className="text-sm">Get it on</p>
                  <p className="text-xl font-bold">PLAY STORE</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlreadyUser;
