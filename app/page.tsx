"use client";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Input } from "antd";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");

  const handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setCity((e.target as HTMLInputElement).value);
  };

  return (
    <main className="h-screen flex justify-center items-center bg-blue-100">
      <div className="flex justify-center items-center h-full">
        <Card className="w-full h-7/24 border border-black shadow-lg">
          <h1 className="text-2xl text-center">Find the weather in any city!</h1>
          <Divider />
          <div>
            <p className="text-lg text-center">Enter a city name below to get the current weather.</p>
            <Input
              className="w-full mt-4"
              placeholder="City name"
              value={city}
              onChange={handleInputChange}
            />
            <div className="flex justify-center mt-4">
              <Link href={`/${city}`}>
                <Button type="primary" icon={<SearchOutlined />}>
                  Get Weather
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
