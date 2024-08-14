"use client";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { BottomGradient } from "@/components/ui/FormElements";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { signupUser } from "@/lib/features/auth/authSlice";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z
  .object({
    firstName: z.string().min(2).max(20),
    lastName: z.string().min(2).max(20),
    email: z.string().email().min(2).max(20),
    password: z
      .string()
      .min(2)
      .max(20)
      .refine(
        (value) =>
          /^(?!.*[\s])(?=.*[a-z ء-ي A-Z])(?=.*[0-9 ٠-۹]).{6,20}$/.test(value),
        { message: "Not a valid password" },
      ),
    rePassword: z.string().min(2).max(20),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Password doesn't match",
    path: ["password"], // path of error
  });
export default function Signup() {
  const [resError, setResError] = React.useState("");
  const dispatch = useAppDispatch();
  const { loading, isLoggedIn } = useAppSelector((state) => state.auth);
  const { toast } = useToast();
  const router = useRouter();
  const onSubmit = async ({
    firstName,
    lastName,
    email,
    password,
    rePassword,
  }: z.infer<typeof formSchema>) => {
    try {
      await dispatch(
        signupUser({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          rePassword,
        }),
      ).unwrap();
      toast({
        duration: 2000,
        title: "Signup successful",
        description: `Welcome ${firstName} ${lastName}`,
      });
      router.push("/");
      // console.log(response);
    } catch (err: any) {
      console.log(err);
      setResError(err);
    }

    // router.push("/");
  };
  // console.log(loading, user, isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "dfsdf",
      lastName: "dfsd",
      email: "test@ko.com",
      password: "koko123",
      rePassword: "koko123",
    },
  });
  return (
    <main
      className="mx-auto mt-8 w-full max-w-md rounded-none bg-white p-4
        shadow-input dark:bg-black md:rounded-2xl md:p-8"
    >
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to Mazady
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Signup a new account to enjoy mazady
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="my-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input
                    id="firstName"
                    placeholder="First name"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input
                    id="lastName"
                    placeholder="Last name"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    placeholder="example@mazady.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    id="password"
                    placeholder="••••••••"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Password must be 6 characters minimum and contain at least one
                  number.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    id="rePassword"
                    placeholder="••••••••"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {resError && <div className="mt-10 text-red-500">{resError}</div>}
          <Button
            disabled={loading}
            className="group/btn relative mt-2 block h-10 w-full rounded-md
              bg-orange-600 text-white
              shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
              hover:bg-orange-400/70
              dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            <div className="flex items-center justify-center">
              {loading && <Loader2 className="mr-2 size-4 animate-spin" />}
              Signup &rarr;
            </div>
          </Button>
          <BottomGradient />
        </form>
      </Form>
    </main>
  );
}
