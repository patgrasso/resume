const yaml = require('yaml');
const fs = require('fs');

const pugConfigYAML = fs.readFileSync('pug.config.yaml').toString();
const locals = yaml.parse(pugConfigYAML);

function contactInfo() {
  var privateContactInfo = {};
  try {
    privateContactInfo = require('./contact-info.json');
  } catch (e) {}

  return {
    ...publicContactInfo,
    ...privateContactInfo,
  };
}

const publicContactInfo = {
  phone: "732-856-1724",
  email: "patgra123@gmail.com",
  github: "patgrasso",
};

module.exports = {
  locals: {
    contact: contactInfo(),
    ...locals,
  },
};
/*
    education: [
      {
        school: "Stevens Institute of Technology",
        graduationDate: "May 2018",
        degree: "M.S. in Cybersecurity",
        gpa: 3.67,
        roles: [],
      },
      {
        school: "Stevens Institute of Technology",
        graduationDate: "May 2017",
        degree: "B.S. in Computer Science and Mathematics Minor",
        gpa: 3.40,
        roles: [
          {
            title: "Teaching Assistant",
            startDate: "Feb 2015",
            endDate: "Dec 2017",
            description: "Algorithms, Concurrent Prog., Operating Systems, Team Prog. & Problem Solving",
          },
        ],
      },
    ],
    experience: [
      {
        company: "IBM",
        roles: [
          {
            title: "Software Engineer - TradeLens",
            startDate: "August 2018",
            description: [
              "Collaborated with Maersk to build an event processing system capable of tracking the state of shipments and intermodal shipping containers with information provided by several large ocean transport companies.",
              "Designed and implemented a generic, role-based, hierarchical access control system inspired by AWS IAM, Google Cloud IAM, and Open Policy Agent in order to enforce complex data access rules for TradeLens.",
              // TODO: convey that I worked on almost all parts of the product
              // and got a good understanding of problem domain as a result
              //
              // TODO: add something about researching EDIFACT and shipping
              // domain
              "Worked with stakeholders to design and develop a notification system built with Twilio and Sendgrid.",
              "Used Kubernetes and Helm to orchestrate application deployments.",
              "Participated in IBM's Golang developer community and led team education sessions on Golang.",
            ],
          },
          {
            title: "Software Engineering Intern - Extreme Blue",
            startDate: "May",
            endDate: "August 2017",
            description: [
              "Architected and implemented an identity management solution that uses a combination of biometrics and other factors to securely authenticate individuals.",
              "Created and delivered a pitch to over 50 executives at IBM's corporate headquarters in Armonk, NY."
            ],
          },
        ],
      },
      {
        company: "iCIMS",
        roles: [
          {
            title: "Software Developer Intern",
            startDate: "June",
            endDate: "August 2015",
            description: [
              "Designed and implemented a system to automate merges, saving each developer an average of 4 hours/week.",
              "Created a user-friendly web interface for the system using EmberJS and Material Design Lite.",
            ],
          },
          {
            title: "Software Development Engineer in Test (SDET) Intern",
            startDate: "June",
            endDate: "August 2014",
            description: [
              "Implemented a system which aligns automation tests, unit tests, and QA tests within a test case management suite, saving QA technicians hours of manually entering test case information.",
            ],
          },
        ],
      },
    ],
    projects: [
      {
        name: "TaylorFit",
        description: "Worked closely with a client and 3 other students to build an isomorphic web app for analyzing data using multivariate polynomial regression.",
      },
      {
        name: "SemNet",
        description: "Create a program to model semantic networks by parsing natural lanaguage.",
      },
    ],
  },
  */
