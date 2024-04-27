"use client";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Input } from "antd";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";
import { FaCity } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";

export default function Home() {
  const [city, setCity] = useState("");

  const handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setCity((e.target as HTMLInputElement).value);
  };

  return (
    <main className="h-screen flex justify-center items-center bg-[#c1defd]">
      <div className="flex justify-center items-center h-full">
        <Card className="w-full h-7/24 border border-black shadow-lg p-10 shadow-[#1677ff]">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-2xl text-center">Find the weather</h1>
            <TiWeatherPartlySunny size={25} />
          </div>
          <Divider />
          <div className="flex items-center justify-center">
            <p className="text-xl">Enter a city</p>
            <FaCity className="ml-2" />
          </div>
          <Input
            className="w-full mt-4"
            placeholder="City name"
            value={city}
            onChange={handleInputChange}
          />
          <div className="flex justify-center mt-4">
            <Link href={`/${city}`}>
              <Button type="primary" icon={<SearchOutlined />} >
                Search
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </main>
  );
}
