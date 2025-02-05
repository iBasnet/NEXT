"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react";


export default function page() {

  const [todos, setTodos] = useState(["Learn NEXT.js thoroughly 〽️"]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setTodos(prevArr => [...prevArr, inputValue])
    setInputValue('');
  }

  return (
    <main className="min-h-screen mt-20"
      style={{ scale: '1.1' }}
    >
      <form onSubmit={handleSubmit}
        className="flex w-full max-w-sm items-center space-x-2 mx-auto my-12">
        <Input type="text" placeholder="What's on your mind?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit" className="bg-indigo-700 hover:bg-indigo-800 text-slate-200 transition-all ease-in-out duration-300 px-6">PUSH</Button>
      </form>
      {/* ### */}
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-full max-w-sm mx-auto my-20"
      >
        <CarouselContent className="-mt-1 h-[260px]">
          {todos.map((todo, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-left p-6">
                    <p>{index + 1}. {todo}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main >
  )
}
