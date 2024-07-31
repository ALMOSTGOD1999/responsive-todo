"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Reorder } from "framer-motion";
import { SortableContext } from "@dnd-kit/sortable";

export default function homePage() {
  const [items, setItems] = useState([]);
  const [activeItems, setActiveItems] = useState(null);
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white border-r">
        <div className="flex items-center p-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JG</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <div className="text-lg font-semibold">Joe Gardner</div>
            <Button variant="ghost" size="sm" className="mt-1">
              <SunIcon className="w-4 h-4" />
              <ChevronRightIcon className="w-4 h-4 ml-2" />
            </Button>

            <Button variant="ghost" size="sm" className="mt-1 bg-slate-200">
              Logout
            </Button>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <HomeIcon className="w-5 h-5 mr-2" />
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <ClipboardIcon className="w-5 h-5 mr-2" />
            Boards
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <SettingsIcon className="w-5 h-5 mr-2" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <UsersIcon className="w-5 h-5 mr-2" />
            Teams
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <BarChartIcon className="w-5 h-5 mr-2" />
            Analytics
          </Button>
        </nav>
        <Button variant="default" className="w-full mt-4  bg-violet-800">
          <PlusIcon className="w-5 h-5 mr-2" />
          Create new task
        </Button>
        <Button variant="ghost" className="w-full mt-80 bg-slate-200">
          <DownloadIcon className="w-5 h-5 mr-2" />
          Download the app
        </Button>
      </aside>
      <main className="flex-1 p-6 bg-gray-50">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Good morning, Joe!</h1>
          <Button variant="ghost">
            Help & feedback
            <CircleHelpIcon className="w-5 h-5 ml-2" />
          </Button>
        </header>
        {/* card items starts from here */}
        <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Introducing tags</CardTitle>
              <CardDescription>
                Easily categorize and find your notes by adding tags. Keep your
                workspace clutter-free and efficient.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Share Notes Instantly</CardTitle>
              <CardDescription>
                Effortlessly share your notes with others via email or link.
                Enhance collaboration with quick sharing options.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Access Anywhere</CardTitle>
              <CardDescription>
                Sync your notes across all devices. Stay productive whether
                you're on your phone, tablet, or computer.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="flex items-center justify-between mb-6">
          <Input type="text" placeholder="Search" className="w-full max-w-md" />
          <div className="flex items-center space-x-2">
            <Button variant="ghost">Calendar view</Button>
            <Button variant="ghost">Automation</Button>
            <Button variant="ghost">Filter</Button>
            <Button variant="ghost">Share</Button>
            <Button variant="default" className=" bg-violet-700">
              Create new
              <PlusIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
        {/* from here starts draggable contents */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>To do</CardTitle>
              <ListIcon className="w-5 h-5" />
            </CardHeader>
            <CardContent>
              <Card
                draggable="true"
                setActiveItems={setActiveItems}
                className="mb-4"
              >
                <CardHeader>
                  <CardTitle>Implement User Authentication</CardTitle>
                  <Badge variant="destructive">Urgent</Badge>
                </CardHeader>
                <CardContent>
                  <p>
                    Develop and integrate user authentication using email and
                    password.
                  </p>
                  <p>2024-08-15</p>
                  <p>1 hr ago</p>
                </CardContent>
              </Card>
              <Button
                variant="ghost"
                className="w-full text-white bg-slate-700 "
              >
                Add new
                <PlusIcon className="w-5 h-5 mr-2" />
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>In progress</CardTitle>
              <ListIcon className="w-5 h-5" />
            </CardHeader>
            <CardContent>
              <Card
                draggable="true"
                setActiveItems={setActiveItems}
                className="mb-4"
              >
                <CardHeader>
                  <CardTitle>Design Home Page UI</CardTitle>
                  <Badge variant="warning" className="bg-yellow-400">
                    Medium
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p>
                    Develop and integrate user authentication using email and
                    password.
                  </p>
                  <p>2024-08-16</p>
                  <p>2 hrs ago</p>
                </CardContent>
              </Card>
              <Card
                draggable="true"
                setActiveItems={setActiveItems}
                className="mb-4"
              >
                <CardHeader>
                  <CardTitle>Conduct User Feedback Survey</CardTitle>
                  <Badge variant="success" className="bg-green-400">
                    Low
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p>
                    Collect and analyze user feedback to improve app features.
                  </p>
                  <p>2024-08-05</p>
                  <p>3 hrs ago</p>
                </CardContent>
              </Card>
              <Button
                variant="ghost"
                className="w-full text-white bg-slate-700 "
              >
                Add new
                <PlusIcon className="w-5 h-5 mr-2" />
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Under review</CardTitle>
              <ListIcon className="w-5 h-5" />
            </CardHeader>
            <CardContent>
              <Card
                draggable="true"
                setActiveItems={setActiveItems}
                className="mb-4"
              >
                <CardHeader>
                  <CardTitle>Integrate Cloud Storage</CardTitle>
                  <Badge variant="destructive">Urgent</Badge>
                </CardHeader>
                <CardContent>
                  <p>
                    Enable cloud storage for note backup and synchronization.
                  </p>
                  <p>2024-08-20</p>
                  <p>2 days ago</p>
                </CardContent>
              </Card>
              <Button
                variant="ghost"
                className="w-full text-white bg-slate-700 "
              >
                Add new
                <PlusIcon className="w-5 h-5 mr-2" />
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Finished</CardTitle>
              <ListIcon className="w-5 h-5" />
            </CardHeader>
            <CardContent>
              <Card draggable="true" className="mb-4">
                <CardHeader>
                  <CardTitle>Test Cross-browser Compatibility</CardTitle>
                  <Badge variant="warning" className="bg-yellow-400">
                    Medium
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p>
                    Ensure the app works seamlessly across different web
                    browsers.
                  </p>
                  <p>2024-07-30</p>
                  <p>4 days ago</p>
                </CardContent>
              </Card>
              <Button
                variant="ghost"
                className="w-full text-white bg-slate-700 "
              >
                Add new
                <PlusIcon className="w-5 h-5 mr-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CircleHelpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ListIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
