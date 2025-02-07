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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"


export default function page() {

  let sampleTodo = {
    id: Date.now(),
    desc: "Learn NEXT.js thoroughly 〽️",
    isComplete: false,
  }

  let todo = {
    id: Date.now(),
    desc: "Zod + Prisma + MongoDB",
    isComplete: false,
  }

  const [todos, setTodos] = useState([sampleTodo]);
  const [inputValue, setInputValue] = useState('');
  const [isEditOpen, setIsEditOpen] = useState(false);

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

    setTodos(prevArr => [...prevArr, {
      id: Date.now(),
      desc: inputValue,
      isComplete: false
    }]);
    setInputValue('');
  }

  const deleteTodo = (id: number) => {
    setTodos(prevArr => prevArr.filter(todo => todo.id !== id));
  }

  const handleEditIcon = (id: number) => {

    setIsEditOpen(true);

    const currentTodo = todos.find(todo => todo.id === id);

    if (!currentTodo) {
      toast({
        title: "⚠️ Something went wrong!",
        description: "🏹 Todo not found.",
      })
      return;
    }

    setInputValue(currentTodo.desc);
  }

  const handleEditSave = (id: number) => {

    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, desc: inputValue } : todo
      )
    );

    setIsEditOpen(false);
    setInputValue('');
  }

  const handleSwitch = (id: number) => {

    setTodos((prevTodos) => (
      prevTodos.map((todo) => (
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      ))
    ))
  }

  const handleSelect = ({ id, value }: { id: number, value: string }) => {

    setTodos((prevTodos) => (
      prevTodos.map((todo) => (
        todo.id === id ? { ...todo, isComplete: value === 'yes' ? true : false } : todo
      ))
    ))

  }

  return (
    <main className="min-h-screen mt-20"
      style={{ scale: '1.1' }}
    >
      <form onSubmit={handleSubmit}
        className="flex w-full max-w-sm items-center space-x-2 mx-auto my-12">
        <Input type="text" placeholder="What's on your mind?"
          value={isEditOpen ? '' : inputValue}
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
                    <p><span className="select-none">{index + 1}.</span> <span style={todo.isComplete ? { textDecoration: 'line-through' } : {}}>{todo.desc}</span></p>
                  </CardContent>
                  <div className="absolute right-2 flex items-center opacity-90 -space-x-2"
                  >

                    <div className="flex gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                              <DialogTrigger asChild>
                                <span
                                  className="cursor-pointer"
                                  onClick={() => handleEditIcon(todo.id)}
                                // title="Edit"
                                ><FaEdit size="1.15rem" />
                                </span>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                  <DialogTitle>Edit ToDo</DialogTitle>
                                  <DialogDescription>
                                    Make changes to your ToDo here. Click save when you're done.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                      Description
                                    </Label>
                                    <Input
                                      id="name"
                                      value={inputValue}
                                      className="col-span-3"
                                      onChange={(e) => setInputValue(e.target.value)}
                                    />
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                      Completed?
                                    </Label>
                                    <Select onValueChange={(value) => handleSelect({ id: todo.id, value })}>
                                      <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Select a status" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectGroup>
                                          <SelectItem value="yes">Yes</SelectItem>
                                          <SelectItem value="no">No</SelectItem>
                                        </SelectGroup>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button
                                    onClick={() => handleEditSave(todo.id)}
                                  >Save changes</Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Edit</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <span
                                  className="cursor-pointer"
                                // title="Delete"
                                ><IoMdTrash size="1.3rem" />
                                </span>
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
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Delete</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <div className="-rotate-90"
                      style={{ rotate: '180deg' }}
                    >
                      <Switch
                        checked={todo.isComplete}
                        onCheckedChange={() => handleSwitch(todo.id)}
                      />
                    </div>

                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel >
    </main >
  )
}
