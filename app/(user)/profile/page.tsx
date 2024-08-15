"use client";
import LoaderComponent from "@/components/LoaderComponent";
import { User2 } from "lucide-react";
import React from "react";

const getProfileData = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/profile`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!data.ok) {
    const errorData = await data.json();
    console.log(errorData);
    throw new Error(errorData.message);
  }
  return data.json();
};

function Profile() {
  const [userData, setUserData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { user } = await getProfileData();
        console.log(user);
        setUserData(user);
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
        setError(err.message);
        console.log(err);
      }
    };
    if (userData === null) {
      fetchData();
    }
  }, [userData]);
  return (
    <main className="mt-5 flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-bold md:text-5xl">User Profile</h1>
      {loading && <LoaderComponent />}
      {error && <h1>{error}</h1>}
      {userData && (
        <div
          className="mt-5 flex flex-col items-center justify-center gap-5
            rounded-md border-2 p-8 text-2xl md:p-12"
        >
          <div
            className="mb-5 flex items-center justify-center rounded-full
              border-2 p-5"
          >
            <User2 className="size-20 text-orange-500" />
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <p className="font-bold">
              First name:{" "}
              <span className="font-normal">{userData.first_name}</span>
            </p>
            <p className="font-bold">
              Last name:{" "}
              <span className="font-normal">{userData.last_name}</span>
            </p>
            <p className="font-bold">
              Email: <span className="font-normal">{userData.email}</span>
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Profile;
