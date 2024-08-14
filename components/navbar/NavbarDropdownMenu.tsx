"use client";
import { List, LogOut, PlusCircle, User, User2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser } from "@/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";
export default function NavbarDropdownMenu({
  closeSheet,
}: {
  closeSheet?: () => void;
}) {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const isAdmin = user?.role === "Admin";
  const handleLogout = async () => {
    try {
      closeSheet && closeSheet();
      await dispatch(logoutUser()).unwrap();
      toast({
        duration: 2000,
        title: "Logged out successful",
      });
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <>
      {/* Collabsible menu for moblies */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div
              className="mt-5 flex cursor-pointer items-center justify-start
                gap-1 border md:hidden"
            >
              <Avatar className="size-10">
                <AvatarFallback className="dark:bg-black">
                  <User2 className="size-5" />
                </AvatarFallback>
              </Avatar>
              <div
                className={`flex ${isAdmin ? "justify-around" : "justify-start"}
                  gap-2`}
              >
                <div className="text-lg">Hi, {user?.first_name} </div>
                {isAdmin && <div className="text-orange-600">{user.role}</div>}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent
            className="flex flex-col items-start justify-start gap-6"
          >
            <Link onClick={closeSheet} href="/profile">
              <div className="flex cursor-pointer gap-1">
                <User className="mr-2 size-4" />
                <span>Profile</span>
              </div>
            </Link>

            <Link onClick={closeSheet} href="/myads">
              <div className="flex cursor-pointer gap-1">
                <List className="mr-2 size-4" />
                <span>My ads</span>
              </div>
            </Link>

            <Link onClick={closeSheet} href="/addItem">
              <div className="flex cursor-pointer gap-1">
                <PlusCircle className="mr-2 size-4" />
                <span>Add new item</span>
              </div>
            </Link>
            <Button
              onClick={handleLogout}
              className="mt-5 bg-red-600 hover:bg-red-400/70 dark:text-white"
            >
              Logout
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Dropdown menu for tablet and desktop */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            className="hidden cursor-pointer flex-col items-center
              justify-center gap-1 md:flex"
          >
            <Avatar className="size-10">
              {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
              <AvatarFallback className="dark:bg-black">
                <User2 className="size-5" />
              </AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="hidden w-56 md:block">
          <DropdownMenuLabel
            className={`flex ${isAdmin ? "justify-around" : "justify-start"}
              gap-2`}
          >
            <div>Hi, {user?.first_name} </div>
            {isAdmin && <div className="text-orange-600">{user.role}</div>}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link onClick={closeSheet} href="/profile">
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 size-4" />
                <span>Profile</span>
              </DropdownMenuItem>
            </Link>
            <Link onClick={closeSheet} href="/myads">
              <DropdownMenuItem className="cursor-pointer">
                <List className="mr-2 size-4" />
                <span>My ads</span>
              </DropdownMenuItem>
            </Link>
            <Link onClick={closeSheet} href="/addItem">
              <DropdownMenuItem className="cursor-pointer">
                <PlusCircle className="mr-2 size-4" />
                <span>Add new item</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 size-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
