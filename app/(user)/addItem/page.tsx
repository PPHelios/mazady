"use client";
import ImagesUploader from "@/components/ImagesUploader";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BottomGradient } from "@/components/ui/FormElements";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Textarea } from "@/components/ui/textarea";
import DatePicker from "@/components/DatePicker";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { addNewItem } from "@/lib/features/addItem/addItemSlice";

const formSchema = z.object({
  item_name: z.string().min(10).max(20),
  item_desc: z.string().min(20).max(2000),
  item_price: z.preprocess(
    (val) => {
      if (val === "") {
        return null; // Treat empty string as null
      }
      return val;
    },
    z.union([
      z.string().refine(() => 0, {
        message: "Field is required",
      }),
      z.coerce.number().int().gte(1).lte(1000000000),
    ]),
  ),
  category: z.union([
    z.string().refine(() => "", {
      message: "Field is required",
    }),
    z.literal("cars"),
    z.literal("art"),
    z.literal("electronics"),
    z.literal("fashion"),
    z.literal("sports"),
    z.literal("home"),
    z.literal("other"),
  ]),
  item_expiration_date: z.date().min(new Date()),
  images: z.array(z.any()).min(1).max(5),
});

function AddItem() {
  const [resError, setResError] = React.useState("");
  const { user } = useAppSelector((state) => state.auth);
  const { loading } = useAppSelector((state) => state.addItem);
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setResError("");
      const formData = new FormData();
      formData.append("item_name", values.item_name);
      formData.append("item_price", values.item_price.toString());
      formData.append("item_desc", values.item_desc);
      formData.append("category", values.category);
      formData.append("owner", user?._id);
      formData.append(
        "item_expiration_date",
        values.item_expiration_date.toISOString(),
      );
      if (values.images) {
        values.images.forEach((file) => {
          formData.append("images", file);
        });
      }
      await dispatch(addNewItem(formData)).unwrap();
      // console.log(response);
      router.push("/");
    } catch (err: any) {
      setResError(err.message);
      console.log(err);
    }
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      item_name: "",
      item_desc: "",
      item_price: "",
      category: "",
      item_expiration_date: new Date(),
      images: [],
    },
  });
  return (
    <main>
      <div
        className="mx-auto mt-8 w-full max-w-md rounded-none bg-white p-4
          shadow-input dark:bg-black md:rounded-2xl md:p-8"
      >
        <h1
          className="text-center text-xl font-bold text-neutral-800
            dark:text-neutral-200"
        >
          Add a new item
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="my-8 flex flex-col justify-start gap-8"
          >
            <FormField
              control={form.control}
              name="item_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ad title</FormLabel>
                  <FormControl>
                    <Input
                      id="item_name"
                      placeholder="Item name"
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
              name="item_desc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Item description</FormLabel>
                  <FormControl>
                    <Textarea
                      id="item_desc"
                      placeholder="Enter item description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="item_price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Item price</FormLabel>
                  <FormControl>
                    <Input
                      id="item_price"
                      placeholder="Item price"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select item category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="cars">Cars</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="fashion">Fashion</SelectItem>
                      <SelectItem value="home">Home</SelectItem>
                      <SelectItem value="sports">Sports Equipments</SelectItem>
                      <SelectItem value="art">Art</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="item_expiration_date"
              render={({ field: { onChange, value } }) => (
                <FormItem>
                  <FormLabel>Ad. expiration date</FormLabel>
                  <FormControl>
                    <div className="flex items-center justify-center">
                      <DatePicker date={value} setDate={onChange} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="images"
              render={({ field: { onChange, value } }) => (
                <FormItem>
                  <FormLabel>Item images</FormLabel>
                  <FormControl>
                    <div className="flex items-center justify-center">
                      <ImagesUploader images={value} setImages={onChange} />
                    </div>
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
                Add Item &rarr;
              </div>
            </Button>
            <BottomGradient />
          </form>
        </Form>
      </div>
    </main>
  );
}

export default AddItem;
