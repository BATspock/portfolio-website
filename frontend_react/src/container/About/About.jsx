import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
import { Chrono } from "react-chrono";
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
// import ReactTooltip from 'react-tooltip';
import './About.scss';
// import { urlFor, client } from '../../client';
import { client } from '../../client'
// import { HiLogout } from 'react-icons/hi';
import Card from 'react-bootstrap/Card';
const About = () => {
  const [experiences, setExperiences] = useState([]);
  // const [skills, setSkills] = useState([]);

  const items = [
    {
      title: 'MAY 2023 - PRESENT',
      cardTitle: 'Software Development Engineer Intern',
      url: 'https://www.amazon.jobs/en/teams/PXT-Solutions',
      cardSubtitle: 'Amazon, Seattle, Washington, USA',
      media: {
        type: 'IMAGE',
        source: {
          url:
            images.amazon
          // 'https://v.fastcdn.co/u/f8c127f9/56461827-0-1.png',
        },
      },
      // cardSubtitle: `Lieutenant General Arthur Percival and staff on their way to the Singapore Ford factory to negotiate the island’s surrender with General Yamashita`,
      cardDetailedText: `▪ Design data pipeline on native AWS (NAWS) to automate the extraction and modeling of sprint execution data.
      ▪ Pipeline creation using AWS services such as Lambda, Redshift, CloudWatch, etc., for data analysis and data visualization`,
    },
    {
      title: 'JAN 2023 - PRESENT',
      cardTitle: 'Graduate Research Assistant',
      url: 'https://digitallibrary.usc.edu/',
      cardSubtitle: 'USC Libraries, Los Angeles, California, USA',
      media: {
        type: 'IMAGE',
        source: {
          url:
            images.USCLibraries
          // 'https://v.fastcdn.co/u/f8c127f9/56461827-0-1.png',
        },
      },
      // cardSubtitle: `Lieutenant General Arthur Percival and staff on their way to the Singapore Ford factory to negotiate the island’s surrender with General Yamashita`,
      cardDetailedText: `▪ Research and experiment with the latest machine learning and artificial intelligence tools to automate processes for USC Libraries and evaluate for biases in the results of Large Language Models \n
      ▪ Automated srt creation for video files on AWS cloud using OpenAI whisper and pyannote audio \n
      ▪ Created dataset for underrepresented groups and designed a ChatGPT based chatbot on the dataset using lama-indexing and langchain\n
      ▪ Helped to perform a contrastive study on the performance of publicly available Large Language Models (LLMs) with custom-designed chatbots to understand how biases seep into LLMs`,
    },
    {
      title: 'SEP 2022 - PRESENT',
      cardTitle: 'Machine Learning Student Worker',
      url: 'https://digitallibrary.usc.edu/',
      cardSubtitle: 'USC Libraries, Los Angeles, California, USA',
      media: {
        type: 'IMAGE',
        source: {
          url:
            images.USCLibraries
          // 'https://v.fastcdn.co/u/f8c127f9/56461827-0-1.png',
        },
      },
      // cardSubtitle: `Lieutenant General Arthur Percival and staff on their way to the Singapore Ford factory to negotiate the island’s surrender with General Yamashita`,
      cardDetailedText: `▪ Design and develop systems that automate manual tasks with the help of machine learning tools\n
      ▪ Developed computer vision based end to end pipeline to identify and obfuscate sensitive data from video files, cutting labor hours by more than 50%  \n
      ▪ Leveraged OpenAI Whisper Tool and created software pipeline to transcribe videos and generate corresponding srt files using speaker diarization`,
    },
    {
      title: 'SEP 2022 - DEC 2022',
      cardTitle: 'Grader for BUAD 311 (Operations Management)',
      url: 'https://classes.usc.edu/term-20221/course/dso-562/',
      cardSubtitle: 'USC Marshall School of Business, Los Angeles, California, USA',
      media: {
        type: 'IMAGE',
        source: {
          url:
            images.USCMarshalllogo
          // 'https://v.fastcdn.co/u/f8c127f9/56461827-0-1.png',
        },
      },
      // cardSubtitle: `Lieutenant General Arthur Percival and staff on their way to the Singapore Ford factory to negotiate the island’s surrender with General Yamashita`,
      cardDetailedText: `▪ Worked as a grader for BUAD 311 (Operations Management) under Prof. Adel Javanmard, Associate Professor, Data Sciences and Operations, and Prof. Andrew Daw, Assistant Professor of Data Sciences and Operations`,
    },
    {
      title: 'MAR 2022 - MAY 2022',
      cardTitle: 'Grader for DSO 562 (Fraud Analytics)',
      url: 'https://classes.usc.edu/term-20221/course/dso-562/',
      cardSubtitle: 'USC Marshall School of Business, Los Angeles, California, USA',
      media: {
        type: 'IMAGE',
        source: {
          url:
            images.USCMarshalllogo
          // 'https://v.fastcdn.co/u/f8c127f9/56461827-0-1.png',
        },
      },
      // cardSubtitle: `Lieutenant General Arthur Percival and staff on their way to the Singapore Ford factory to negotiate the island’s surrender with General Yamashita`,
      cardDetailedText: `▪ Worked as a grader for DSO 562 (Fraud Analytics) under Stephen Coggeshall, Adjunct Professor of Data Sciences.`,
    },
    {
      title: 'OCT 2021-NOV 2021',
      cardTitle: 'Software Engineering Consultant, Bangalore, India',
      url: 'http://visionempowertrust.in/',
      media: {
        name: 'vision empower logo',
        source: {
          // url: 'https://images.yourstory.com/cs/images/companies/VisionEmpower-1652686388499.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff'
          url: images.ve
        },
        type: 'IMAGE',
      },
      cardSubtitle: `Vision Empower`,
      cardDetailedText: `
    ▪ Migrated organization’s MOOC (Massive Open Online Courses) backend server to AWS EC2 (Ubuntu)\n
    ▪ Automated content upload process to improve scalability using python and open edX. This helped the organization to expand to 10 regional schools for the visually impaired and receive donations in excess of 85,000 USD from Microsoft\n
    ▪ Co-led development of a proof of concept Amazon Alexa skill. Backend APIs built using NodeJS, hosted skill as AWS Lambda function
  `,
    },
    {
      title: 'MAR 2021-JUN 2021',
      cardTitle: 'Consulting Engineer II, Bangalore, India',
      url: 'https://www.cisco.com/c/en_in/index.html',
      media: {
        source: {
          // url: 'http://logo-logos.com/2016/10/Cisco_logo.png'
          url: images.cisco
        },
        type: 'IMAGE',
      },
      cardSubtitle: `Cisco Systems, Inc.`,
      cardDetailedText: `
  ▪ Developed dashboards to display live telemetry data from multiple routers leveraging gRPC, influxDB, Grafana, and dockers\n
  ▪ Co-led development of a Natural Language Processing tool to reduce time taken for manual bug scrubbing process\n
  ▪ Created a fast and scalable algorithm to resolve non-transitive nature of cosine similarity\n
  ▪ Developed the code in python and deployed using dockers on global Cisco internal test servers. Tool resolved more than 70% of bugs and decreased bug processing time by 80%`,
    },
    {
      title: 'JUL 2019-FEB 2021',
      cardTitle: 'Consulting Engineer, Bangalore, India',
      url: 'https://www.cisco.com/c/en_in/index.html',
      cardSubtitle: `Cisco Systems, Inc.`,
      media: {
        source: {
          // url: "https://pearlharborwarbirds.com/wp-content/uploads/2016/09/Awesome-Color-Photos-of-the-Attack-on-Pearl-Harbor-1.jpg",
          // url: 'http://logo-logos.com/2016/10/Cisco_logo.png',
          url: images.cisco
        },
        type: 'IMAGE',
        // name: 'Pearl Harbor',
      },
      cardDetailedText: `
  ▪ Reproduced and tested enterprise network solutions for Goldman Sachs. Performed Operating System upgrades and automated testing using ROBOT framework to identify bugs and test new features for network deployments. Team's efforts led to subscription renewals worth more than 100,000 USD and contributed close to 5% of entire team’s revenue\n 
     
  
  ▪ Created custom text corpus for cisco bug scrubbing process, used various vectorization techniques for tokenization and data preparation
  `,
    },

    {
      title: 'JAN 2019-MAY 2019',
      cardTitle: 'Reserach Intern, Bangalore, India',
      url: 'https://www.iiitb.ac.in/',
      cardSubtitle: 'International Institute of Information Technology, Bangalore (IIITB)',
      media: {
        type: 'IMAGE',
        source: {
          url:
            images.iiit
          // 'https://v.fastcdn.co/u/f8c127f9/56461827-0-1.png',
        },
      },
      // cardSubtitle: `Lieutenant General Arthur Percival and staff on their way to the Singapore Ford factory to negotiate the island’s surrender with General Yamashita`,
      cardDetailedText: `▪ Developed an unsupervised texture-based image segmentation algorithm called TextonsSeg. \n
  ▪ Open-sourced and deployed the algorithm on the global python repository (PyPi). \n
  ▪ Worked to convert 2D diagrams to 3D tactile models\n
  ▪ Published a paper based on the texture based image segmentation algorithm devised during the research work in the International Journal of Engineering and Future Technology`,
    },
    {
      title: 'MAY 2018-JUL 2018',
      cardTitle: 'Consultant, Bangalore, India',
      url: 'https://www.ugamsolutions.com/',
      cardSubtitle: 'Ugam Analytics',
      media: {
        type: 'IMAGE',
        source: {
          // url: 'https://financialit.net/sites/default/files/a4_ugam_merkle_logo-01.jpg',
          url: images.ug
          // 'https://th.bing.com/th/id/R.366be3216fca32c7b9b5711ab21a9c33?rik=Qyk99ZhGRy4yaw&riu=http%3a%2f%2fphotos.prnewswire.com%2fprnfull%2f20140428%2f81412&ehk=UmGhnTA0fTagwb0WJFlKu4AiLw9viN8vHVSXbQLn9GI%3d&risl=&pid=ImgRaw&r=0',
        },
      },
      // cardSubtitle: `The American aircraft carrier USS Yorktown under Japanese attack during the battle of Midway`,
      cardDetailedText: `▪ Developed full stack web app with OpenCV-based backend for SKU detection, worked with Siamese Long Short Term Memory (LSTM) for semantic text comparison`,
    },
    {
      title: 'JUN 2017-JUL 2017',
      cardTitle: 'Research Intern, Noida, India',
      url: 'https://www.pitneybowes.com/us',
      cardSubtitle: `Pitney Bowes`,
      media: {
        type: 'IMAGE',
        source: {
          url:
            images.pitney
          // 'https://www.pitneybowes.com/content/dam/pitneybowes/us/en/100/pitney-bowes-100-logo/pb_100_year_wordmark_horizontal_lockup_color.png',
          // 'https://www.hopinto.co.uk/media/1277/logo.jpg',
        },
      },
      cardDetailedText: `
  ▪ Worked with Recurrent Neural Networks (RNNs) to check their performance on Named Entity Recognition (NER) problem\n
  
  ▪ Worked on fine tuning of hyper parameters of RNN and LSTM models`,
    },
  ];

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    // const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    // client.fetch(skillsQuery).then((data) => {
    //   setSkills(data);
    // });

  }, []);

  return (
    <>
      <h2 className="head-text">About Me</h2>

      <div className="app__skills-container">

        <div>
          <Card>
            <div className="imageincard">

              <Card.Img variant="top" src="https://viterbischool.usc.edu/wp-content/uploads/2021/04/Main-USC-Viterbi-Logo-480x160-1.png" />
            </div>
            <Card.Body>
              <Card.Text>
                <br></br>
                <h3>Graduate Student</h3>
                <br></br>
                <h4>January 2022 - Present</h4>
                <br></br>
                <h4>Los Angeles, California, USA</h4>
                <br></br>
                <div clas='cardtext'>
                  Currently pursuing a Master in Computer Science with a specialization in Aritifcial Intelligence from University of Southern Califronia, Viterbi School of Engineering. Relevant course work includes Analysis of Algorithms,
                  Introduction to Artificial Intelligence, Machine Learning, Mathematics of High Dimensional Data, Natural Language Processing, Computer Vision and Deep Learning.
                </div>

              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="app__skills-container">
        <div>
          <Card>
            <div className="imageincard">

              <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/d/d2/R.V._College_of_Engineering_logo.png" />
            </div>
            <Card.Body>
              <Card.Text>
                <br></br>
                <h3>Undergraduate Degree in Computer Science and Engineering </h3>
                <br></br>
                <h4>August 2015 - July 2019</h4>
                <br></br>
                <h4>Bangalore, Karnataka, India</h4>
                <br></br>
                <div class='cardtext'>
                  Completed my Bachelor of Engineering degree in Computer Science and Engineering, from R.V. College of Engineering, India. I was an active student member, Image Processing lead and Team Captain of Autonomous Unmanned Aerial Vehicle
                  Club of R.V. College of Engineering - Project Jatayu, 2018.
                </div>

              </Card.Text>
            </Card.Body>
          </Card>
        </div>

      </div>
      <br></br>
      <h2 className="head-text">My Timeline</h2>
      <div className="app__skills-container">
        {/* style={{ width: '500px', height: '950px' }}> */}
        <Chrono items={items} mode="VERTICAL" hideControls='true' mediaHeight={100} />
      </div>

    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
