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
import { Avatar, AvatarFallback } from "./ui/avatar";
import { logoutUser } from "@/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export default function NavbarDropdownMenu() {
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const isAdmin = user?.role === "Admin";
  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      toast({
        title: "Logged out successful",
      });
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <>
      {isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className="flex cursor-pointer flex-col items-center
                justify-center gap-1"
            >
              <Avatar className="size-10">
                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                <AvatarFallback className="dark:bg-black">
                  <User2 className="size-5" />
                </AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel
              className={`flex ${isAdmin ? "justify-around" : "justify-start"}
                gap-2`}
            >
              <div>Hi, {user?.first_name} </div>
              {isAdmin && <div className="text-orange-600">{user.role}</div>}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href="/profile">
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 size-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/myads">
                <DropdownMenuItem className="cursor-pointer">
                  <List className="mr-2 size-4" />
                  <span>My ads</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/addItem">
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
      ) : (
        <div className="flex flex-row items-center justify-center gap-5">
          <Link href="/login">
            <Button
              className="bg-orange-600 hover:bg-orange-400/70 dark:text-white"
            >
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              variant="secondary"
              className="dark:bg-black dark:hover:bg-slate-800"
            >
              Signup
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
