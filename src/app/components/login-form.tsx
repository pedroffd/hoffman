import { useState } from 'react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function LoginForm() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const handleLogin = () => {
    // Lógica de login aqui
    closeDialog();
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="text-white w-24" size="sm" onClick={openDialog}>
            Login
          </Button>
        </DialogTrigger>
        <DialogContent className="w-96 sm:w-full sm:max-w-[425px] ">
          <DialogHeader>
            <DialogTitle className="text-primary text-2xl my-4 font-normal">
              Login to Medroster
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className=" items-center gap-4">
              <Input
                id="name"
                placeholder="Email"
                className="col-span-3 text-text-primary"
              />
            </div>
            <div className="items-center gap-4">
              <Input
                id="username"
                placeholder="Password"
                className="col-span-3 text-text-primary"
              />
            </div>
          </div>
          <DialogFooter className="flex justify-between items-end">
            <Button className="text-white w-24" size="sm" type="submit">
              Login
            </Button>
            <Link
              href={'https://staging.medroster.com/users/password/new'}
              className="text-primary py-2 hover:text-primary text-lg hover:underline-offset-2 underline"
            >
              Forgot Password?
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
