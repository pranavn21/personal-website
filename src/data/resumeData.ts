const resumeData = {
  name: "Pranav Nair",
  email: "pranavnair65@gmail.com",
  github: "pranavn21",
  linkedin: "pranavnair2002",
  education: [
    {
      school: "The University of Texas at Dallas",
      location: "Richardson, TX",
      degree: "Bachelor of Science in Computer Science with Honors",
      gpa: "3.83/4.0",
      dates: "Aug 2020 - May 2024",
      coursework: [
        "Computer Architecture",
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Design",
        "Machine Learning"
      ]
    }
  ],
  skills: {
    languages: ["C#", "Java", "C++", "Python", "C", "SQL", "JavaScript", "Lua", "Verilog", "Bash scripting"],
    database: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB"],
    ai_ml: ["Matplotlib", "Pandas", "scikit-learn"],
    framework: ["Angular", "ASP.NET", "React", "FastAPI"],
    security_tools: ["Redgate", "Dynatrace", "BurpSuite", "Kali Linux tools", "Metasploit"],
    cloud_other: ["AWS", "Azure", "Jira", "Bitbucket", "Git", "Gradle"]
  },
  experience: [
    {
      company: "Deloitte Tax LLP",
      location: "Dallas, TX",
      title: "Software Engineer II",
      dates: "Jul 2024 - Present",
      bullets: [
        "Software Engineer for the Internet Partnership Allocation and Compliance System (iPACS™) K1A Investor tax solution for investment firms.",
        "Used ASP.NET Core, SQL Server, Angular to provide CI/CD software development through maintenance and bug fixes.",
        "Pioneered automated testing by implementing Tricentis Tosca for end-to-end frontend validation and xUnit for unit tests, establishing the project's first test automation framework from scratch to improve coverage and reduce regressions.",
        "Utilized Azure DevOps to deploy pipeline releases for continuous build developments to the iPACS software.",
        "Selected as an Onboarding Advisor to guide new hires and interns through their first 3 months, delivering structured mentorship, resource navigation, and recurring check-ins to accelerate ramp-up and team integration."
      ]
    },
    {
      company: "Charles Schwab",
      location: "Jersey City, NJ",
      title: "Software Engineer Intern",
      dates: "Jun 2023 - Aug 2023",
      bullets: [
        "Independently designed, programmed, and rigorously tested a Java application to strengthen security measures for a leading vendor collaborating with Schwab, resulting in a 23% increase in zero-day vulnerability detection.",
        "Developed RESTful API calls to efficiently retrieve security-related data and execute commands through a command-line interface (CLI), resulting in a 30% reduction in backend dependency.",
        "Implemented an algorithm for data pre-processing and the selection of important data fields, increased the data quality by 25%, and streamlined the seamless transmission of Points of Interest (POI) data to a Confluence server dashboard."
      ]
    },
    {
      company: "Brown & Brown Insurance Inc.",
      location: "Daytona Beach, FL",
      title: "IT Intern",
      dates: "Jun 2022 - Aug 2022",
      bullets: [
        "Architected and deployed a web application, using JavaScript, Articulate Storyline, and Adobe Illustrator within an Agile framework, to automate the new hire onboarding process of 3k employees per year.",
        "Engineered SQL queries in conjunction with PowerBI to analyze and extract valuable business insights from complex datasets, resulting in an 18% increase in operational efficiency through data automation."
      ]
    }
  ],
  projects: [
    {
      name: "Security Vulnerabilities Detection",
      dates: "Sep 2022 - Dec 2022",
      tech: ["Linux", "ERLKing", "Joern", "C", "C++"],
      bullets: [
        "Applied the ERLKing vulnerability scanner to identify software vulnerabilities by pinpointing Points of Interest (POIs) in the source code, identifying at least 3 security concerns per data point.",
        "Transformed code into Code Property Graphs (CPG) used DWARF memory layout data to generate a log file.",
        "Methodically cross-referenced 125 POIs in the C++ source code using the ERLKing vulnerability scanner, filtering out false positives, and pinpointing vulnerabilities with precision."
      ]
    },
    {
      name: "Intelligent Password Estimator",
      dates: "Feb 2022 - May 2022",
      tech: ["Python", "OpenAI GPT-3", "YAKE!"],
      bullets: [
        "Programmed Python to collect, clean, and preprocess 1M data rows from web scrapping, improving the accuracy by 10%.",
        "Implemented a keyword extractor to identify popular keywords within the dataset.",
        "Leveraged the GPT-3 machine learning model to generate passwords using 15k popular keywords, resulting in a 35% improvement in guess accuracy."
      ]
    }
  ],
  leadership: [
    {
      role: "Director of ACM Research",
      org: "Association for Computer Machinery (ACM) UTD"
    }
  ],
  honors: [
    "Best Research Project Award: ACM Research",
    "Outstanding Performance Award: CodePath Cybersecurity",
    "Collegium V Honors: The University of Texas at Dallas",
    "Academic Excellence Award: The University of Texas at Dallas"
  ]
};

export default resumeData; 