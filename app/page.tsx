import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Headphones, Camera, Zap, Github, Linkedin, Mail, ArrowRight } from "lucide-react"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-xl">Volodymyr</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="#interests"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Interests
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/VSTimeless" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/vstimeless/" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:Shchuryshyn@protonmail.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm Volodymyr
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Electrical Engineering student passionate about technology, books, podcasts, fitness, and
                    photography.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#projects">View My Projects</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:Shchuryshyn@protonmail.com" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                      Get in Touch
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full overflow-hidden border-4 border-primary">
                  <Image
                    src={`${basePath}/placeholder.jpg`}
                    alt="Volodymyr"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm an Electrical Engineering student with a passion for innovation and technology.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Education & Skills</h3>
                  <p className="text-muted-foreground">
                    Currently pursuing a degree in Electrical Engineering with a focus on embedded systems and signal
                    processing.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Circuit Design</Badge>
                    <Badge>PCB Layout</Badge>
                    <Badge>Embedded Systems</Badge>
                    <Badge>MATLAB</Badge>
                    <Badge>Python</Badge>
                    <Badge>C/C++</Badge>
                    <Badge>FPGA Programming</Badge>
                    <Badge>Signal Processing</Badge>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Professional Goals</h3>
                  <p className="text-muted-foreground">
                    I aim to specialize in renewable energy systems and smart grid technologies, contributing to
                    sustainable solutions for our future energy needs.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Current Focus</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Developing skills in power electronics</li>
                    <li>Learning about renewable energy integration</li>
                    <li>Exploring IoT applications in energy management</li>
                    <li>Building projects that combine hardware and software solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of my electrical engineering projects and technical work.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Solar Power Monitoring System</CardTitle>
                  <CardDescription>IoT-based solution for monitoring solar panel performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={`${basePath}/project-placeholder.svg`}
                      alt="Solar Power Monitoring System"
                      width={400}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">Arduino</Badge>
                    <Badge variant="outline">IoT</Badge>
                    <Badge variant="outline">Renewable Energy</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#" className="flex items-center justify-center">
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Smart Home Energy Management</CardTitle>
                  <CardDescription>System for optimizing home energy consumption</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={`${basePath}/project-placeholder.svg`}
                      alt="Smart Home Energy Management"
                      width={400}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">Raspberry Pi</Badge>
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#" className="flex items-center justify-center">
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Wireless Power Transfer</CardTitle>
                  <CardDescription>Experimental setup for wireless energy transmission</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={`${basePath}/project-placeholder.svg`}
                      alt="Wireless Power Transfer"
                      width={400}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline">Circuit Design</Badge>
                    <Badge variant="outline">Electromagnetics</Badge>
                    <Badge variant="outline">Power Electronics</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#" className="flex items-center justify-center">
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section id="interests" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Interests</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Beyond engineering, here are some of my passions and hobbies.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-3">
              <a href="/interests/reading" className="rounded-lg border bg-card text-card-foreground shadow-sm transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <Card>
                  <CardHeader>
                    <BookOpen className="h-8 w-8 mb-2" />
                    <CardTitle>Reading</CardTitle>
                    <CardDescription>Science fiction, technical books, and biographies</CardDescription>
                  </CardHeader>
                </Card>
              </a>
              <a href="/interests/podcasts" className="rounded-lg border bg-card text-card-foreground shadow-sm transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <Card>
                  <CardHeader>
                    <Headphones className="h-8 w-8 mb-2" />
                    <CardTitle>Podcasts</CardTitle>
                    <CardDescription>Tech news, engineering discussions, and science podcasts</CardDescription>
                  </CardHeader>
                </Card>
              </a>
              <a href="/interests/photography" className="rounded-lg border bg-card text-card-foreground shadow-sm transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <Card>
                  <CardHeader>
                    <Camera className="h-8 w-8 mb-2" />
                    <CardTitle>Photography</CardTitle>
                    <CardDescription>Landscape and architectural photography</CardDescription>
                  </CardHeader>
                </Card>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4 lg:col-span-2">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Location</h3>
                  <p className="text-muted-foreground">
                    Based in Vancouver, B.C., available for remote work and international collaborations.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Availability</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Open to freelance projects</li>
                    <li>Available for internships</li>
                    <li>Interested in research collaborations</li>
                    <li>Looking for mentorship opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js and Tailwind CSS. The source code is available on{" "}
            <Link href="https://github.com/VSTimeless" className="font-medium underline underline-offset-4">
              GitHub
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}
