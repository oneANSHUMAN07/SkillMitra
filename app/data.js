/* SkillMitra — curated demo data. Deterministic, no external APIs. */
window.SM_DATA = (function(){
  const LEVELS = ['None','Beginner','Intermediate','Advanced'];

  const student = {
    name:'Anshuman', fullName:'Anshuman Mishra', initials:'AM',
    email:'anshuman.mishra@student.kiit.ac.in',
    college:'KIIT University, Bhubaneswar', degree:'B.Tech', branch:'Computer Science & Engineering', semester:'6',
    goal:'data-analyst',
    interests:['Data Analytics','Artificial Intelligence'],
    skills:['Python','Excel','C'],
    resume:'Anshuman_Mishra_Resume.pdf',
    joined:'July 2026',
  };

  const roles = {
    'data-analyst':{
      id:'data-analyst', title:'Data Analyst', icon:'bar-chart-3',
      summary:'Turns raw data into decisions — querying databases, analysing trends and communicating findings through dashboards.',
      demand:'High demand', entry:'₹4.5 – 8 LPA', openings:'12,400+ entry-level roles',
      required:[
        {skill:'SQL', level:3, weight:'Core', why:'Querying and joining data from relational databases is a daily task.'},
        {skill:'Python', level:3, weight:'Core', why:'Cleaning, transforming and analysing data with pandas.'},
        {skill:'Excel', level:2, weight:'Core', why:'Quick analysis, pivot tables and stakeholder-friendly reports.'},
        {skill:'Statistics', level:2, weight:'Core', why:'Hypothesis testing, distributions and reading results correctly.'},
        {skill:'Power BI', level:2, weight:'Important', why:'Building interactive dashboards for business teams.'},
      ],
      tools:['MySQL / PostgreSQL','pandas','Power BI','Excel'],
    },
    'web-developer':{
      id:'web-developer', title:'Web Developer', icon:'code-2',
      summary:'Builds and ships responsive, accessible web applications from interface to API.',
      demand:'High demand', entry:'₹4 – 9 LPA', openings:'18,900+ entry-level roles',
      required:[
        {skill:'HTML & CSS', level:3, weight:'Core', why:'The foundation of every interface you build.'},
        {skill:'JavaScript', level:3, weight:'Core', why:'Interactivity, state and logic in the browser.'},
        {skill:'React', level:2, weight:'Core', why:'Component-based UIs used across most product teams.'},
        {skill:'Git', level:2, weight:'Important', why:'Collaboration and version control on real codebases.'},
        {skill:'REST APIs', level:2, weight:'Important', why:'Connecting frontends to data and services.'},
      ],
      tools:['VS Code','React','Node.js','Git'],
    },
    'ai-ml-engineer':{
      id:'ai-ml-engineer', title:'AI/ML Engineer', icon:'cpu',
      summary:'Designs, trains and deploys machine-learning models that solve real product problems.',
      demand:'Growing fast', entry:'₹6 – 14 LPA', openings:'6,800+ entry-level roles',
      required:[
        {skill:'Python', level:3, weight:'Core', why:'The working language of ML research and production.'},
        {skill:'Linear Algebra', level:2, weight:'Core', why:'Underpins how models represent and transform data.'},
        {skill:'Machine Learning', level:3, weight:'Core', why:'Model selection, training and evaluation.'},
        {skill:'Statistics', level:2, weight:'Core', why:'Understanding uncertainty, bias and model metrics.'},
        {skill:'SQL', level:2, weight:'Important', why:'Pulling training data from production systems.'},
      ],
      tools:['PyTorch','scikit-learn','Jupyter','Docker'],
    },
    'ui-ux-designer':{
      id:'ui-ux-designer', title:'UI/UX Designer', icon:'pen-tool',
      summary:'Researches user needs and designs clear, usable product experiences.',
      demand:'Steady demand', entry:'₹4 – 8 LPA', openings:'5,200+ entry-level roles',
      required:[
        {skill:'User Research', level:2, weight:'Core', why:'Grounding design decisions in real user needs.'},
        {skill:'Figma', level:3, weight:'Core', why:'The industry-standard tool for interface design.'},
        {skill:'Interaction Design', level:2, weight:'Core', why:'Designing flows, states and feedback.'},
        {skill:'Visual Design', level:2, weight:'Important', why:'Typography, layout and colour for clarity.'},
        {skill:'Prototyping', level:2, weight:'Important', why:'Testing ideas before they are built.'},
      ],
      tools:['Figma','Maze','Notion','FigJam'],
    },
  };

  // Student's current skill levels (0-3). SQL can be upgraded by assessment.
  const baseLevels = { Python:3, Excel:2, C:2, SQL:1, Statistics:1, 'Power BI':0 };

  const roadmap = [
    { id:'sql', n:'01', title:'SQL Fundamentals', skill:'SQL', time:'3 weeks · ~18 hrs', gained:'SQL → Intermediate',
      desc:'SELECT, filtering, JOINs, GROUP BY and subqueries on real datasets.', baseProgress:45,
      resources:4, topics:['SELECT & WHERE','JOINs','GROUP BY & HAVING','Subqueries','Window functions (intro)'] },
    { id:'statistics', n:'02', title:'Statistics for Data Analysis', skill:'Statistics', time:'3 weeks · ~15 hrs', gained:'Statistics → Intermediate',
      desc:'Descriptive stats, distributions, sampling and hypothesis testing in Python.', baseProgress:0,
      resources:4, topics:['Descriptive statistics','Probability & distributions','Sampling','Hypothesis testing','Correlation vs causation'] },
    { id:'powerbi', n:'03', title:'Power BI', skill:'Power BI', time:'2 weeks · ~12 hrs', gained:'Power BI → Intermediate',
      desc:'Data modelling, DAX basics and building a stakeholder-ready dashboard.', baseProgress:0,
      resources:3, topics:['Power Query','Data modelling','DAX basics','Visual best practices','Publishing reports'] },
    { id:'project', n:'04', title:'Data Analytics Project', skill:'Applied', time:'2 weeks · ~20 hrs', gained:'Portfolio-ready project',
      desc:'Apply SQL, statistics and Power BI on Student Performance Analytics.', baseProgress:0,
      resources:1, topics:['Problem framing','Data pipeline','Analysis','Dashboard','Write-up'] },
    { id:'final', n:'05', title:'Career Readiness Assessment', skill:'Validation', time:'90 minutes', gained:'Verified Data Analyst readiness',
      desc:'A combined assessment across all core skills for your target role.', baseProgress:0,
      resources:0, topics:['SQL','Python','Statistics','Power BI','Case study'] },
  ];

  const resources = {
    sql:{
      title:'SQL Fundamentals', why:'SQL is one of the key missing skills for your target career. 9 out of 10 Data Analyst roles list it as a core requirement.',
      outcome:'Write multi-table queries confidently and answer business questions directly from a database.',
      items:[
        {id:'r1', type:'Course', icon:'graduation-cap', title:'SQL for Data Analysis: From Zero to JOINs', provider:'SkillMitra Academy', difficulty:'Beginner', duration:'6 hrs · 24 lessons', progress:70, lessons:['Relational databases','SELECT & WHERE','Sorting & limiting','Aggregate functions','JOINs explained','GROUP BY & HAVING']},
        {id:'r2', type:'Video', icon:'play-circle', title:'Understanding JOINs Visually', provider:'Data with Priya', difficulty:'Beginner', duration:'42 min', progress:100, lessons:['INNER JOIN','LEFT / RIGHT JOIN','Self joins']},
        {id:'r3', type:'Article', icon:'file-text', title:'Writing Readable SQL: A Style Guide for Analysts', provider:'SkillMitra Notes', difficulty:'Beginner', duration:'12 min read', progress:0, lessons:['Naming','Formatting','CTEs']},
        {id:'r4', type:'Practice', icon:'terminal-square', title:'30 SQL Problems on a College Dataset', provider:'SkillMitra Practice', difficulty:'Intermediate', duration:'4 hrs · 30 problems', progress:20, lessons:['Filtering (8)','Aggregation (10)','JOINs (8)','Subqueries (4)']},
      ]
    },
    statistics:{
      title:'Statistics for Data Analysis', why:'Statistics helps you interpret results correctly — a core expectation in analyst interviews.',
      outcome:'Summarise data, test hypotheses and explain uncertainty in plain language.',
      items:[
        {id:'s1', type:'Course', icon:'graduation-cap', title:'Statistics Essentials with Python', provider:'SkillMitra Academy', difficulty:'Beginner', duration:'5 hrs · 20 lessons', progress:0, lessons:['Mean, median, spread','Distributions','Sampling','Hypothesis tests']},
        {id:'s2', type:'Video', icon:'play-circle', title:'p-values Without the Confusion', provider:'StatQuest-style explainer', difficulty:'Beginner', duration:'28 min', progress:0, lessons:['Null hypothesis','p-values','Errors']},
        {id:'s3', type:'Article', icon:'file-text', title:'Correlation Is Not Causation: 6 Real Examples', provider:'SkillMitra Notes', difficulty:'Beginner', duration:'9 min read', progress:0, lessons:[]},
        {id:'s4', type:'Practice', icon:'terminal-square', title:'A/B Test Analysis Workbook', provider:'SkillMitra Practice', difficulty:'Intermediate', duration:'3 hrs', progress:0, lessons:[]},
      ]
    },
    powerbi:{
      title:'Power BI', why:'Power BI is listed in most entry-level analyst roles for building dashboards that business teams use.',
      outcome:'Model data and publish an interactive dashboard from scratch.',
      items:[
        {id:'p1', type:'Course', icon:'graduation-cap', title:'Power BI for Beginners', provider:'SkillMitra Academy', difficulty:'Beginner', duration:'5 hrs · 18 lessons', progress:0, lessons:['Power Query','Modelling','DAX basics']},
        {id:'p2', type:'Video', icon:'play-circle', title:'Designing Dashboards People Actually Read', provider:'Viz Lab', difficulty:'Beginner', duration:'35 min', progress:0, lessons:[]},
        {id:'p3', type:'Practice', icon:'terminal-square', title:'Build a Sales Dashboard', provider:'SkillMitra Practice', difficulty:'Intermediate', duration:'3 hrs', progress:0, lessons:[]},
      ]
    },
  };

  const projects = [
    { id:'student-performance-analytics', title:'Student Performance Analytics', difficulty:'Beginner', skills:['SQL','Excel'], duration:'1–2 weeks', recommended:true, match:94,
      overview:'Analyse semester results for 1,200 students to find what drives performance across subjects and attendance.',
      problem:'A college academic office wants to understand why pass rates vary across departments. They have exam scores, attendance and course data in separate tables — but no one has connected them.',
      outcome:'A set of SQL queries, an Excel summary and a short insight report with 5 data-backed recommendations for the academic office.',
      learn:['Design a normalised schema','Write JOINs across 4 tables','Aggregate and rank results','Present insights clearly'],
      milestones:[
        {t:'Design database', d:'Plan tables for students, courses, scores and attendance with keys.'},
        {t:'Import dataset', d:'Load the provided CSV files and validate row counts.'},
        {t:'Write SQL queries', d:'Answer 8 guided business questions using JOINs and GROUP BY.'},
        {t:'Analyse performance', d:'Find patterns between attendance, subject and outcomes.'},
        {t:'Create insights', d:'Summarise 5 recommendations in a one-page report.'},
      ],
      dataset:'students.csv · courses.csv · scores.csv · attendance.csv (1,200 rows)'},
    { id:'sales-dashboard', title:'Sales Dashboard', difficulty:'Intermediate', skills:['SQL','Power BI'], duration:'2 weeks', match:81,
      overview:'Build an interactive regional sales dashboard for a D2C retail brand with monthly targets.',
      problem:'A growing retail brand tracks sales in spreadsheets. Leadership needs one dashboard to see revenue, top products and regional performance against targets.',
      outcome:'A published Power BI dashboard backed by SQL views, with drill-downs by region and product.',
      learn:['Create SQL views for reporting','Model data in Power BI','Write basic DAX measures','Design for decision-makers'],
      milestones:[
        {t:'Explore the data', d:'Profile orders, products and regions.'},
        {t:'Build SQL views', d:'Create clean reporting views.'},
        {t:'Model in Power BI', d:'Set up relationships and measures.'},
        {t:'Design dashboard', d:'Revenue, targets and product views.'},
        {t:'Present findings', d:'Record a 3-minute walkthrough.'},
      ],
      dataset:'orders.csv · products.csv · regions.csv (18,000 rows)'},
    { id:'customer-analytics', title:'Customer Analytics', difficulty:'Intermediate', skills:['Python','SQL'], duration:'2–3 weeks', match:77,
      overview:'Segment customers of a food-delivery app by behaviour and identify who is likely to churn.',
      problem:'A food-delivery startup is losing repeat customers. They want to understand customer segments and early signs of churn.',
      outcome:'A Jupyter notebook with RFM segmentation, churn indicators and a recommendation memo.',
      learn:['Query order history with SQL','RFM segmentation in pandas','Visualise cohorts','Communicate churn risk'],
      milestones:[
        {t:'Extract data', d:'Pull order history with SQL.'},
        {t:'Clean & prepare', d:'Handle missing and duplicate records.'},
        {t:'Segment customers', d:'Build RFM scores in pandas.'},
        {t:'Analyse churn', d:'Compare retained vs churned cohorts.'},
        {t:'Write memo', d:'Share 3 retention recommendations.'},
      ],
      dataset:'customers.csv · orders.csv (42,000 rows)'},
  ];

  const completedProjects = [
    {title:'Movie Ratings Explorer', skills:['Python','pandas'], date:'Aug 2026', score:'Reviewed · 4.5/5'},
    {title:'Hostel Expense Tracker', skills:['Excel'], date:'Jun 2026', score:'Reviewed · 4/5'},
  ];

  const questions = [
    {q:'Which clause is used to filter rows after aggregation?', o:['WHERE','HAVING','ORDER BY','LIMIT'], a:1},
    {q:'What does a LEFT JOIN return?', o:['Only matching rows from both tables','All rows from the right table','All rows from the left table, with matches from the right','Only non-matching rows'], a:2},
    {q:'Which query counts the students in each department?', o:['SELECT COUNT(*) FROM students;','SELECT dept, COUNT(*) FROM students GROUP BY dept;','SELECT dept FROM students WHERE COUNT(*);','SELECT DISTINCT COUNT(dept) FROM students;'], a:1},
    {q:'You need the top 5 scores from the scores table. Which is correct?', o:['SELECT score FROM scores ORDER BY score DESC LIMIT 5;','SELECT TOP score FROM scores 5;','SELECT score FROM scores LIMIT 5 ORDER BY score;','SELECT MAX(5) FROM scores;'], a:0},
    {q:'Which keyword removes duplicate values from a result?', o:['UNIQUE','DISTINCT','DIFFERENT','SINGLE'], a:1},
    {q:'What will  SELECT AVG(marks) FROM results WHERE marks IS NOT NULL;  return?', o:['Average of all marks including NULLs as 0','Average of non-null marks','Count of non-null marks','An error'], a:1},
    {q:'A primary key must be…', o:['Unique and not null','Unique but can be null','A text column','Shared across tables'], a:0},
    {q:'Which JOIN returns only rows with matches in both tables?', o:['FULL OUTER JOIN','LEFT JOIN','INNER JOIN','CROSS JOIN'], a:2},
    {q:'What is a subquery?', o:['A query that deletes rows','A query nested inside another query','A stored backup of a table','A type of index'], a:1},
    {q:'Which function returns the number of characters in a string in most SQL dialects?', o:['SIZE()','COUNT()','LENGTH()','CHARS()'], a:2},
  ];

  const activity = [
    {icon:'check-circle-2', tone:'green', t:'Completed Python Assessment', s:'Scored 9/10 · Python validated at Advanced', when:'2 days ago'},
    {icon:'book-open-check', tone:'green', t:'Completed Excel Module', s:'Pivot Tables & Lookups', when:'4 days ago'},
    {icon:'play', tone:'blue', t:'Started SQL Fundamentals', s:'Lesson 9 of 24 · JOINs explained', when:'5 days ago'},
    {icon:'folder-kanban', tone:'amber', t:'Project recommendation received', s:'Student Performance Analytics · 94% match', when:'1 week ago'},
  ];

  const notifications = [
    {icon:'folder-kanban', tone:'amber', t:'New project matched to your goal', s:'Student Performance Analytics', when:'2h', to:'/projects/student-performance-analytics'},
    {icon:'clipboard-check', tone:'blue', t:'SQL Fundamentals Assessment is unlocked', s:'10 questions · ~15 min', when:'1d', to:'/assessment'},
    {icon:'trending-up', tone:'green', t:'Your readiness went up by 6%', s:'After completing the Excel module', when:'4d', to:'/career-readiness'},
  ];

  const institution = {
    name:'KIIT University · School of Computer Engineering',
    students:428, avgReadiness:61, avgDelta:7, activeLearners:356, validated:1184,
    gaps:[{s:'SQL',n:42},{s:'Communication',n:31},{s:'Python',n:26},{s:'Statistics',n:22},{s:'Power BI',n:19}],
    goals:[{g:'Data Analyst',n:138},{g:'Web Developer',n:121},{g:'AI/ML Engineer',n:104},{g:'UI/UX Designer',n:65}],
    trend:[48,50,51,54,55,57,59,61],
    trendLabels:['Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'],
    cohorts:[
      {c:'B.Tech CSE · Sem 6', n:142, r:66, p:71},
      {c:'B.Tech CSE · Sem 4', n:118, r:54, p:58},
      {c:'B.Tech IT · Sem 6', n:96, r:63, p:67},
      {c:'MCA · Sem 2', n:72, r:58, p:62},
    ],
  };

  const industry = {
    org:'Northwind Analytics Pvt. Ltd.', role:'Data Analyst',
    skills:[{s:'SQL',l:'Advanced'},{s:'Python',l:'Advanced'},{s:'Excel',l:'Intermediate'},{s:'Power BI',l:'Intermediate'}],
    matches:24, near:61,
    posted:[
      {t:'Retail Footfall Analysis', type:'Real-world project', apps:38, status:'Open'},
      {t:'Data Analyst Intern · 6 months', type:'Internship', apps:112, status:'Open'},
      {t:'Churn Signals Challenge', type:'Real-world project', apps:21, status:'Reviewing'},
    ],
  };

  return { LEVELS, student, roles, baseLevels, roadmap, resources, projects, completedProjects, questions, activity, notifications, institution, industry };
})();
