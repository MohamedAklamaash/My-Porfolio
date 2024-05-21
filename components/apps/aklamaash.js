import React, { Component } from "react";
import ReactGA from "react-ga4";

export class AboutAklamaash extends Component {
    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => {},
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        };
    }

    componentDidMount() {
        this.screens = {
            about: <About />,
            education: <Education />,
            skills: <Skills />,
            projects: <Projects />,
            resume: <Resume />,
        };

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({
            hitType: "pageview",
            page: `/${screen}`,
            title: "Custom Title",
        });

        this.setState({
            screen: this.screens[screen],
            active_screen: screen,
        });
    };

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    };

    renderNavLinks = () => {
        return (
            <>
                <div
                    id="about"
                    tabIndex="0"
                    onFocus={this.changeScreen}
                    className={
                        (this.state.active_screen === "about"
                            ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
                            : " hover:bg-gray-50 hover:bg-opacity-5 ") +
                        " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
                    }
                >
                    <img
                        className=" w-3 md:w-4"
                        alt="about vivek"
                        src="./themes/Yaru/status/about.svg"
                    />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">
                        About Me
                    </span>
                </div>
                <div
                    id="education"
                    tabIndex="0"
                    onFocus={this.changeScreen}
                    className={
                        (this.state.active_screen === "education"
                            ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
                            : " hover:bg-gray-50 hover:bg-opacity-5 ") +
                        " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
                    }
                >
                    <img
                        className=" w-3 md:w-4"
                        alt="vivek' education"
                        src="./themes/Yaru/status/education.svg"
                    />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">
                        Education
                    </span>
                </div>
                <div
                    id="skills"
                    tabIndex="0"
                    onFocus={this.changeScreen}
                    className={
                        (this.state.active_screen === "skills"
                            ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
                            : " hover:bg-gray-50 hover:bg-opacity-5 ") +
                        " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
                    }
                >
                    <img
                        className=" w-3 md:w-4"
                        alt="vivek' skills"
                        src="./themes/Yaru/status/skills.svg"
                    />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div
                    id="projects"
                    tabIndex="0"
                    onFocus={this.changeScreen}
                    className={
                        (this.state.active_screen === "projects"
                            ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
                            : " hover:bg-gray-50 hover:bg-opacity-5 ") +
                        " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
                    }
                >
                    <img
                        className=" w-3 md:w-4"
                        alt="vivek' projects"
                        src="./themes/Yaru/status/projects.svg"
                    />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">
                        Projects
                    </span>
                </div>
                <div
                    id="resume"
                    tabIndex="0"
                    onFocus={this.changeScreen}
                    className={
                        (this.state.active_screen === "resume"
                            ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
                            : " hover:bg-gray-50 hover:bg-opacity-5 ") +
                        " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
                    }
                >
                    <img
                        className=" w-3 md:w-4"
                        alt="vivek's resume"
                        src="./themes/Yaru/status/download.svg"
                    />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    };

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div
                    onClick={this.showNavBar}
                    className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
                >
                    <div className=" w-3.5 border-t border-white"></div>
                    <div
                        className=" w-3.5 border-t border-white"
                        style={{ marginTop: "2pt", marginBottom: "2pt" }}
                    ></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div
                        className={
                            (this.state.navbar
                                ? " visible animateShow z-30 "
                                : " invisible ") +
                            " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
                        }
                    >
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutAklamaash;

export const displayAboutAklamaash = () => {
    return <AboutAklamaash />;
};

function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img
                    className="w-full"
                    src="./images/logos/bitmoji.png"
                    alt="Mohamed Aklamaash Logo"
                />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>
                    My name is{" "}
                    <span className="font-bold">Mohamed Aklamaash</span> ,
                </div>
                <div className="font-normal ml-1">
                    I'm a{" "}
                    <span className=" text-blue-500 font-bold">
                        Software Engineer!
                    </span>
                </div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">
                    I'm a <span className=" font-medium">Graduate Student</span>{" "}
                    currently pursuing Masters in Data Science,now I'm looking
                    for full-time software engineering roles! ( Hit me up{" "}
                    <a
                        className="text-underline"
                        href="mailto:aklamaash1754@gmail.com"
                    >
                        <u>@aklamaash1754@gmail.com</u>
                    </a>{" "}
                    :) )
                </li>
                <li className=" mt-3 list-building">
                    {" "}
                    I enjoy building awesome softwares that solve practical
                    problems.
                </li>
                <li className=" mt-3 list-time">
                    {" "}
                    When I am not coding my next project, I like to spend my
                    time exploring new places , playing chess ♟️ or watching{" "}
                    <a
                        href="https://www.youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        Mr. Beast's videos.
                    </a>
                </li>
                <li className=" mt-3 list-star">
                    {" "}
                    And I also have interest in DevOps,Deep Learning & Computer
                    Vision!
                </li>
            </ul>
        </>
    );
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        PSG College of Technology
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">
                        2022 - 2027
                    </div>
                    <div className=" text-sm md:text-base">
                        Msc.Data Science
                    </div>
                    <div className="text-sm text-gray-300 font-bold mt-1">
                        CGPA &nbsp; 8.0/10
                    </div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 12<sup>th</sup> (TN State Board)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">
                        2020 - 2022
                    </div>
                    <div className=" text-sm md:text-base">
                        Maths, Physics, Chemistry
                    </div>
                    <div className="text-sm text-gray-300 font-bold mt-1">
                        Percentage&nbsp; 92%
                    </div>
                </li>
            </ul>
        </>
    );
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages &
                    frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>
                        {" "}
                        My areas of expertise are{" "}
                        <strong className="text-ubt-gedit-orange">
                            Full Stack Development,Docker & Kubernetes{" "}
                        </strong>
                    </div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">
                    Languages & Tools
                </div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">
                    Frameworks & Libraries
                </div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img
                            className="m-1"
                            src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A"
                            alt="aklamaash javascript"
                        />
                        <img
                            className="m-1"
                            src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white"
                            alt="aklamaash c++"
                        />
                        <img
                            className="m-1"
                            src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff"
                            alt="aklamaash python"
                        />

                        <img
                            title="yes it's a language!"
                            className="m-1"
                            src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff"
                            alt="aklamaash HTML"
                        />
                        <img
                            src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff"
                            alt="aklamaash git"
                            className="m-1"
                        />
                        <img
                            src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff"
                            alt="aklamaash firebase"
                            className="m-1"
                        />
                        <img
                            src="https://camo.githubusercontent.com/8396abd667a0eca7d28cdb29ec63b6bf29a7854c7c3d467e6ece648c7e9b81e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646f636b65722d2532333064623765642e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d646f636b6572266c6f676f436f6c6f723d7768697465"
                            alt="aklamaash docker"
                            className=" h-[21px] m-1 "
                        />
                        <img
                            src="https://camo.githubusercontent.com/6a27246b26019bcac46de66c61b2cc9aff668d43e6d9b8db76801280df8fce93/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e67696e782d2532333030393633392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e67696e78266c6f676f436f6c6f723d7768697465"
                            alt="aklamaash firebase"
                            className="h-[21px] m-1"
                        />
                        <img
                            src="https://camo.githubusercontent.com/46da2c537428d5163a38512194e2110805271a7cc12b54e85cea9c5f53030336/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4157532d2532334646393930302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d616d617a6f6e2d617773266c6f676f436f6c6f723d7768697465"
                            alt="aklamaash firebase"
                            className="h-[21px] m-1"
                        />
                        <img
                            src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white"
                            alt="aklamaash firebase"
                            className="h-[21px] m-1"
                        />
                        <img
                            src="https://img.shields.io/badge/Microservices-0078D4?style=flat&logo=microservices&logoColor=white"
                            alt="aklamaash firebase"
                            className="h-[21px] m-1"
                        />
                        <img
                            src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white"
                            alt="aklamaash typescript"
                            className="h-[21px] m-1"
                        />
                        <img
                            src="https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white"
                            alt="aklamaash Go"
                            className="h-[21px] m-1"
                        />
                        <img
                            src="https://img.shields.io/badge/Rust-000000?style=flat&logo=rust&logoColor=white"
                            alt="aklamaash firebase"
                            className="h-[21px] m-1"
                        />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img
                            className=" m-1"
                            src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff"
                            alt="aklamaash next"
                        />
                        <img
                            className=" m-1"
                            src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff"
                            alt="aklamaash react"
                        />
                        <img
                            className="m-1 h-[21px]"
                            src="https://camo.githubusercontent.com/8632f4c1ca3e44c8896d1d2babd3f5229cb0d5d78f459db7d7ed6fd2aa581ea5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4772617068514c2d4531303039383f7374796c653d666f722d7468652d6261646765266c6f676f3d6772617068716c266c6f676f436f6c6f723d7768697465"
                        />
                        <img
                            className="m-1"
                            src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"
                            alt="aklamaash tailwind css"
                        />
                        <img
                            src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff"
                            alt="aklamaash node.js"
                            className="m-1"
                        />

                        <img
                            className="m-1"
                            src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white"
                            alt="aklamaash redux"
                        />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span>{" "}
                    <img
                        className=" inline ml-1"
                        src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff"
                        alt="aklamaash linux"
                    />{" "}
                    <span>!</span>
                </li>
            </ul>
        </>
    );
}

function Projects() {
    const project_list = [
        {
            name: "Time it (Live Streaming App) ",
            date: "Mar 2024",
            link: "https://github.com/MohamedAklamaash/TimeItLive/tree/main",
            description: ["A real time video streaming app "],
            domains: ["typescript", "next-js", "tailwindcss", "Docker"],
        },
        {
            name: "Voice Your Opinion",
            date: "Dec 2023",
            link: "https://github.com/MohamedAklamaash/Voice_Ur_Opinion",
            description: [
                "Multiple people can join into a room with a specific topic and can share their opinions.",
            ],
            domains: ["typescript", "node js", "react js", "tailwindcss"],
        },
        {
            name: "Not a Social Media App",
            date: "Nov 2024",
            link: "https://github.com/MohamedAklamaash/Mern-Social-Media-App",
            description: [
                "This app lets users chat with any other person in our platform and it users to share posts and let other people comment it. ",
            ],
            domains: ["typescript", "node js", "react js", "tailwindcss"],
        },
        {
            name: "Sketch book",
            date: "Feb 2024",
            link: "https://github.com/MohamedAklamaash/SketchBook",
            description: ["Users can mould their imaginations into drawings. "],
            domains: ["typescript", "next-js", "tailwindcss", "Docker"],
        },
        {
            name: "UbuntuOS Portfolio",
            date: "May 2024",
            link: "",
            description: [
                "Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js & tailwind CSS",
            ],
            domains: ["javascript", "next.js", "tailwindcss"],
        },
    ];

    const tag_colors = {
        javascript: "yellow-300",
        firebase: "red-600",
        firestore: "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        flutter: "blue-400",
        dart: "blue-500",
        "react-native": "purple-500",
        html5: "pink-600",
        sass: "pink-400",
        tensorflow: "yellow-600",
        django: "green-600",
        python: "green-200",
        "codeforces-api": "gray-300",
        tailwindcss: "blue-300",
        "next.js": "purple-600",
    };

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
           

            {project_list.map((project, index) => {
                const projectNameFromLink = project.link.split("/");
                const projectName =
                    projectNameFromLink[projectNameFromLink.length - 1];
                return (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex w-full flex-col px-4"
                    >
                        <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                            <div className="flex flex-wrap justify-between items-center">
                                <div className="flex justify-center items-center">
                                    <div className=" text-base md:text-lg mr-2">
                                        {project.name.toLowerCase()}
                                    </div>
                                    <iframe
                                        src={`https://ghbtns.com/github-btn.html?user=vivek9patel&repo=${projectName}&type=star&count=true`}
                                        frameBorder="0"
                                        scrolling="0"
                                        width="150"
                                        height="20"
                                        title={
                                            project.name.toLowerCase() + "-star"
                                        }
                                    ></iframe>
                                </div>
                                <div className="text-gray-300 font-light text-sm">
                                    {project.date}
                                </div>
                            </div>
                            <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                {project.description.map((desc, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="list-disc mt-1 text-gray-100"
                                        >
                                            {desc}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                {project.domains
                                    ? project.domains.map((domain, index) => {
                                          const borderColorClass = `border-${tag_colors[domain]}`;
                                          const textColorClass = `text-${tag_colors[domain]}`;

                                          return (
                                              <span
                                                  key={index}
                                                  className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}
                                              >
                                                  {domain}
                                              </span>
                                          );
                                      })
                                    : null}
                            </div>
                        </div>
                    </a>
                );
            })}
        </>
    );
}
function Resume() {
    return (
        <iframe
            className="h-full w-full"
            src="dummyresume.pdf"
            title="vivek patel resume"
            frameBorder="0"
        ></iframe>
    );
}
