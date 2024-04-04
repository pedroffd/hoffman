import { Button } from '@/components/ui/button';
const CTA = () => {
  return (
    <div
      className="flex h-40 bg-gradient-to-b from-accent to-accent-foreground items-center
    justify-center"
    >
      <h4
        className="text-secondary text-2xl w-10/12 lg:w-full 
      lg:mx-14 text-center leading-10 "
      >
        Bring your office to the future of communication.
        <Button
          className="text-secondary w-4/12 ml-2 md:ml-0 md:w-44 lg:ml-2"
          size="lg"
        >
          I'M READY!
        </Button>
      </h4>
    </div>
  );
};

export default CTA;
