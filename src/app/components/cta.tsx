import { Button } from '@/components/ui/button';
const CTA = () => {
  return (
    <div
      className="flex h-40 bg-gradient-to-b from-accent to-accent-foreground items-center
    justify-center"
    >
      <h4
        className="text-secondary text-2xl sm:w-10/12 lg:w-full
      lg:mx-12 text-center leading-10 "
      >
        Bring your office to the future of communication.
        <Button className="text-secondary ml-2 sm:w-44 md:ml-4" size="lg">
          I'M READY!
        </Button>
      </h4>
    </div>
  );
};

export default CTA;
