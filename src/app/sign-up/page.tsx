'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import FilterCombobox from '@/app/components/filter-combobox';
import { specialties, titles } from '@/mockedData';
import ButtonGroup from '@/components/ui/button-group';

const contactSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string().min(2, {
    message: 'Message content cannot be empty',
  }),
  phone_number: z.string(),
  npi: z.string(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const SignUpPage = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: '',
      email: '',
      subject: '',
      message: '',
      phone_number: '',
      npi: '',
      last_name: '',
    },
  });
  const { toast } = useToast();
  const handleSubmit = async (data: ContactFormData) => {
    try {
      console.log(data); // Log the form data
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <div className="w-full bg-muted relative mx-auto">
      <div className="flex justify-center container max-w-6xl relative my-4">
        <div
          className="bg-background text-text-title justify-center items-center max-w-5xl rounded-lg w-full px-4 z-10 
        shadow-lg"
        >
          <div className="flex flex-row items-center text-center align-middle mx-auto justify-center">
            <h4 className="text-2xl font-base  align-middle  text-text-primary my-8 border-b border-solid-2 border-primary">
              {/* bg-yellow-400 sm:bg-red-500 md:bg-green-500 lg:bg-purple-500 xl:bg-pink-500 */}
              Doctor/Staff Registration
            </h4>
          </div>

          <Form {...form}>
            <form
              className="flex flex-col gap-4 text-foreground 2 items-center"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="first_name"
                        className="w-80 sm:w-64 md:w-80"
                        placeholder="First name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="last_name"
                        className=" w-80 sm:w-64 md:w-80"
                        placeholder="Last name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        className=" w-80 sm:w-64 md:w-80"
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="phone_number"
                        className=" w-80 sm:w-64 md:w-80"
                        placeholder="Mobile Phone (optional)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="npi"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="npi"
                        className=" w-80 sm:w-64 md:w-80"
                        placeholder="NPI #"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FilterCombobox placeholder="Specialty" options={specialties} />
              <FilterCombobox placeholder="Title" options={titles} />
              <ButtonGroup />
              <div className="flex justify-center md:justify-end pr-4 my-4">
                <Button
                  type="submit"
                  className="text-white w-44 sm:w-64"
                  onClick={() => {
                    toast({
                      description: 'Your message was sent',
                    });
                  }}
                >
                  Talk to us
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
