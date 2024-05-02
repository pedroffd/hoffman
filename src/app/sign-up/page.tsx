'use client';
import React, { useState } from 'react';
import Link from 'next/link';
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
import { PasswordInput } from '../components/password-input';

const signupSchema = z
  .object({
    first_name: z.string(),
    last_name: z.string(),
    type: z.string().optional(),
    email: z.string().email(),
    confirmEmail: z.string().email().min(1, { message: 'Required' }),
    password: z.string().min(1, {
      message: 'Required',
    }),
    confirmPassword: z.string().min(1, { message: 'Required' }),
    phone_number: z.string(),
    npi: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type SignUPFormData = z.infer<typeof signupSchema>;

const SignUpPage = () => {
  const [selectedType, setSelectedType] = useState('doctor');
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      first_name: '',
      email: '',
      type: selectedType,
      phone_number: '',
      npi: '',
      last_name: '',
      password: '',
      confirmPassword: '',
      confirmEmail: '',
    },
  });

  const { toast } = useToast();

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    form.setValue('type', type); // Update form value for type
  };

  const handleSubmit = async (data: SignUPFormData) => {
    try {
      console.log(data); // Log the form data
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <div className="bg-background text-text-title justify-center items-center max-w-3xl rounded-lg w-full px-4 z-10 my-6 shadow-lg container">
      <div className="flex flex-row items-center text-center align-middle mx-auto justify-center">
        <h4 className="text-2xl font-base  align-middle  text-text-primary my-8 border-b border-solid-2 border-primary">
          Doctor/Staff Registration
        </h4>
      </div>

      <Form {...form}>
        <form
          className="flex flex-col gap-4 text-foreground 2 items-center"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <div className="flex flex-col sm:flex-row gap-4">
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
                      className="w-80 sm:w-64 md:w-80"
                      placeholder="Last name"
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
              name="confirmEmail"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="confirm_email"
                      type="email"
                      className="w-80 sm:w-64 md:w-80"
                      placeholder="Confirm email"
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PasswordInput
                      id="password"
                      className="w-80 sm:w-64 md:w-80"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PasswordInput
                      id="confirm_password"
                      className="w-80 sm:w-64 md:w-80"
                      placeholder="Confirm password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <ButtonGroup
            selectedType={selectedType}
            onChange={handleTypeChange}
          />

          {selectedType === 'doctor' && ( // Render these fields only if type is 'doctor'
            <>
              <FilterCombobox placeholder="Specialty" options={specialties} />
              <FilterCombobox placeholder="Title" options={titles} />
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
            </>
          )}

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

          <Button
            type="submit"
            className="text-white w-80"
            variant="secondary"
            onClick={() => {
              toast({
                description: 'Your message was sent',
              });
            }}
          >
            Continue
          </Button>
        </form>
      </Form>
      <div className="flex flex-col gap-2 justify-center items-center my-4">
        <p>or if you're a vendor</p>
        <Link className="text-secondary hover:underline" href="google.com">
          go to Vendor registration
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
