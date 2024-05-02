'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { APP_NAME } from '@/utils/config';

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
            {`Signup to ${APP_NAME}`}
          </DialogTitle>
          <DialogDescription>
            Please, select the best option for you:
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-row gap-4 py-4">
          <Button className="text-white w-44" size="sm" type="submit">
            <Link href="/sign-up">DOCTOR/STAFF</Link>
          </Button>
          <Button className="text-white w-44" size="sm" type="submit">
            PHARMA
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
