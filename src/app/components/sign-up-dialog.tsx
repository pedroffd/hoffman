import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function SignUpDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white w-44 h-12" size="lg">
          Sign me up
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-primary text-2xl my-2 font-normal">
            Signup to Medroster
          </DialogTitle>
          <DialogDescription>
            Please, select the best option for you:
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-row gap-4 py-4">
          <Button className="text-white w-44" size="sm" type="submit">
            DOCTOR/STAFF
          </Button>
          <Button className="text-white w-44" size="sm" type="submit">
            PHARMA
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
