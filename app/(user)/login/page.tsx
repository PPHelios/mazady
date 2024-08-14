"use client";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
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
import { BottomGradient } from "@/components/ui/FormElements";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/features/auth/authSlice";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email().min(2).max(20),
  password: z.string().min(2).max(20),
});

export const dynamic = "force-dynamic";

export default function Login() {
  const [resError, setResError] = React.useState("");
  const dispatch = useAppDispatch();
  const { loading, isLoggedIn } = useAppSelector((state) => state.auth);
  const { toast } = useToast();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await dispatch(loginUser(values)).unwrap();
      toast({
        duration: 2000,
        title: "Login successful",
        description: `Welcome back ${response.first_name} ${response.last_name}`,
      });
      // console.log(response);
      router.push("/");
    } catch (err: any) {
      setResError(err);
      console.log(err);
    }
  };
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "test@ko.com",
      password: "koko123",
    },
  });
  // console.log(loading, user, isLoggedIn);
  return (
    <main
      className="mx-auto mt-8 w-full max-w-md rounded-none bg-white p-4
        shadow-input dark:bg-black md:rounded-2xl md:p-8"
    >
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to Mazady
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Login to enjoy mazady
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="my-8">
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
                <FormDescription>
                  This is your public display name.
                </FormDescription>
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
                  The password must be 6 characters minimum and contain at least
                  one number.
                </FormDescription>
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
              Login &rarr;
            </div>
          </Button>
          <BottomGradient />
        </form>
      </Form>
      <div
        className="my-8 h-px w-full bg-gradient-to-r from-transparent
          via-neutral-300 to-transparent dark:via-neutral-700"
      />
    </main>
  );
}
