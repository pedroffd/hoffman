'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import { Mail } from 'lucide-react';

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string().min(2, {
    message: 'Message content cannot be empty',
  }),
  number: z.string(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      number: '',
    },
  });

  const handleSubmit = async (data: ContactFormData) => {
    try {
      console.log(data); // Log the form data
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <div className="w-full bg-muted relative mx-auto">
      <div className="h-56 md:h-80 bg-secondary inset-0 flex items-center justify-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-white">
          Contact Us
        </h1>
      </div>

      <div className="flex justify-center container max-w-6xl relative -top-8 mb-8">
        <div className="bg-background text-text-title justify-center items-center max-w-5xl rounded-lg w-full px-4 z-10">
          <div className="flex flex-row justify-between">
            <h4 className="text-2xl font-base text-left align-middle my-auto text-primary">
              {/* bg-yellow-400 sm:bg-red-500 md:bg-green-500 lg:bg-purple-500 xl:bg-pink-500 */}
              Send us a message
            </h4>
            <Mail className="text-3xl my-8 text-foreground" size={48} />
          </div>

          <Form {...form}>
            <form
              className="flex flex-col gap-4 text-foreground 2 items-center"
              onSubmit={form.handleSubmit(handleSubmit)}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name">Your Name</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          className="text-text-title w-80 sm:w-64 md:w-80"
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
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          className="text-text-title w-80 sm:w-64 md:w-80"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="subject">Subject</FormLabel>
                      <FormControl>
                        <Input
                          id="subject"
                          className="text-text-title w-80 sm:w-64 md:w-80"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="number">Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          id="number"
                          className="text-text-title w-80 sm:w-64 md:w-80"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          className="text-text-title h-36 w-80 sm:w-[524px] md:w-[652px]
                         "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-center md:justify-end pr-4 my-4">
                <Button type="submit" className="text-white w-44 sm:w-64">
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

export default ContactPage;
