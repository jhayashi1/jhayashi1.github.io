import {React, useState} from 'react';
import './accordion.css';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

        return(
            <div className='accordion-item'>
                <div className='accordion-title' onClick={() => setIsActive(!isActive)}>
                    <div>{title}</div>
                    <div style={{marginRight: 0, marginLeft: 'auto'}}>{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className='accordion-content'>{content}</div>}
            </div>
        );
};

const accordionData = [
    {
        title: 'COM S 309 - Software Development Practices',
        content: `Semester-long programming project with focus on management,
        testing, and maintenance. Developed using Android Studio, Springboot, and MYSQL, and
        tested with various tools such as JUnit, Espresso, CI/CD, etc.`
    },
    {
        title: 'COM S 311 - Algorithm Design and Analysis',
        content: `Evaluation of algorithm design techniques such as dynamic programming, 
        divide and conquer, greedy methods as well as analysis of runtimes using Big O,
        Big Theta, and Big Omega notation.`
    },
    {
        title: 'COM S 321 - Computer Architecture and Machine-Level Programming',
        content: `Evaluation of machine hardware such as CPU's, RAM, hard drives
        and their performance. As well as programming machine code using Assembly`
    },
    {
        title: 'COM S 327 - Advanced Programming Techniques',
        content: `Project-oriented class involving programming in C and C++ with an emphasis
        on linux concepts, memory management, testing, compiling, etc.`
    },
    {
        title: 'COM S 352 - Introduction to Operating Systems',
        content: `Evaluation of general concepts involving operating systems with some
        programming involved. Topics included processes, queues, multithreading, synchronization, 
        file systems (local and distributed), networking, cybersecurity, encryption, etc.`	
    },
    {
        title: 'COM S 363 - Introduction to Database Management Systems',
        content: `Analysis of database concepts involving entity-relationship models, relational databases 
        (DDL and SQL), indexes, queries, synchronization, runtime analysis, and programming projects
        using MYSQL and Neo4j.`
    },
    {
        title: 'COM S 472 - Principles of Artificial Intelligence',
        content: `Techniques, implementations, and applications of rational agents. 
        Currently in progress.`	
    },
    {
        title: 'COM S 487 - Network Programming, Applications, and Research Issues',
        content: `Principles of network programming including client-server and P2P networks,
        sockets, multicasting, scheduling, etc. as well as their benefits and downsides. Programming
        projects involving building networks with sockets and threads.`
    },
    {
        title: 'S E 317 - Introduction to Software Testing',
        content: `Currently in progress.`
    },
    {
        title: 'S E 319 - Construction of User Interfaces',
        content: `Designed user interfaces using HTML and Javascript and analyzed them using UML
        diagrams. Group project at the end of the semester created using HTML and Node js that was
        deployed to a server for tesing.`
    },
    {
        title: 'S E 329 - Software Project Management',
        content: `Studied project management concepts such as planning, cost estimation, risk management, etc.
        Created design documents revolving around a deliverable in the form of a website that was modeled
        using HTML and Javascript`
    },
    {
        title: 'S E 339 - Software Architecture and Design',
        content: `Evaluated different software design patterns and analysis methods. Modeled software architecture
        using context, use case, communication, and component diagrams. Small projects involving reverse engineering
        and designing extensions for open source programs.`
    },
    {
        title: 'S E 409 - Software Requirements Engineering',
        content: `Analyzing the requirements process and review when developing software projects. Working with
        Context Diagrams, Use Case Diagrams, Communication Diagrams, etc. to help identify functional and
        non-functional requirements. Currently in progress.`
    },
    {
        title: 'S E 421 - Sofware Analysis and Verification for Safety and Security',
        content: `Studied cybersecurity concepts regarding detecting vulnerabilities within complex software.
        Created control flow graphs and used Atlas software to visualize and assist in detecting vulnerabilities.`
    },
    {
        title: 'S E 491/492 - Senior Design Project',
        content: `Two semester long project. First semester involved defining requirements, design, schedule,
        etc. Second semester will involve the development of the application. Currently in progress.` 
    },
    {
        title: 'CPR E 430 - Network Protocols and Security',
        content: `Analysis of network protocols and security issues. Studying different
        networking standards such as OSI and TCP/IP model along with their advantages and disadvantages.
        Currently in progress`
    },
  ];

export {
    Accordion,
    accordionData
};