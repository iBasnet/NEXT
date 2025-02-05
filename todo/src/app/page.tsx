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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/hooks/use-toast";
import { IoMdTrash } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"


export default function page() {

  let sampleTodo = {
    id: Date.now(),
    desc: "Learn NEXT.js thoroughly 〽️",
  }

  const [todos, setTodos] = useState([sampleTodo]);
  const [inputValue, setInputValue] = useState('');

  const { toast } = useToast()

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      toast({
        title: "⚠️ Something went wrong!",
        description: "🏹 Input cannot be empty.",
      })
      return;
    }

    setTodos(prevArr => [...prevArr, { id: Date.now(), desc: inputValue }]);
    setInputValue('');
  }

  const deleteTodo = (id: number) => {
    setTodos(prevArr => prevArr.filter(todo => todo.id !== id));
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
                <Card className="flex items-center">
                  <CardContent className="flex items-center justify-left p-6">
                    <p>{index + 1}. {todo.desc}</p>
                  </CardContent>
                  <div className="absolute right-6 flex items-center gap-1 opacity-90"
                  >

                    <Dialog>
                      <DialogTrigger asChild>
                        <span className="cursor-pointer"><FaEdit size="1.15rem" /></span>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input
                              id="name"
                              defaultValue="Pedro Duarte"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                              Username
                            </Label>
                            <Input
                              id="username"
                              defaultValue="@peduarte"
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <span className="cursor-pointer"><IoMdTrash size="1.3rem" /></span>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            ToDo and remove it from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deleteTodo(todo.id)}
                          >Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                  </div>
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
