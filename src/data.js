// Single source of truth for every word on the site.
// Edit here; the sections only render what is in this file.

export const profile = {
  name: 'Krishna Gupta',
  first: 'Krishna',
  last: 'Gupta',
  role: 'AI Engineer & Data Scientist',
  tagline: 'I build AI that ships — voice agents, RAG systems and fine-tuned LLMs that real people use every day.',
  now: 'AI Developer at Rayi Fintech',
  location: 'Indore · Sri City, India',
  email: 'krishna.gpt607@gmail.com',
  github: 'https://github.com/Krishna-ctrl1',
  githubUser: 'Krishna-ctrl1',
  linkedin: 'https://linkedin.com/in/krishnagpt',
  huggingface: 'https://huggingface.co/krish060705',
  summary:
    'B.Tech (Honors) CSE student specialising in Data Science at IIIT Sri City, with three publications across IEEE and Springer. ' +
    'I work across the full path from data to production: retrieval, fine-tuning, evaluation, streaming voice, and the cloud plumbing that keeps it fast and reliable.',
};

export const stats = [
  { value: 3, suffix: '', label: 'Peer-reviewed publications', sub: 'IEEE IoT-J · IEEE EMR · Springer' },
  { value: 9.02, suffix: '', decimals: 2, label: 'CGPA at IIIT Sri City', sub: 'B.Tech (Honors), Data Science' },
  { value: 100, suffix: '+', label: 'Students mentored', sub: 'as GDG AI/ML Lead' },
  { value: 10, suffix: '', label: 'Languages my voice agent speaks', sub: 'at Rayi Fintech' },
];

export const ticker = [
  'Now — AI Developer @ Rayi Fintech',
  'Streaming voice AI in 10 Indian languages',
  'Lead, Student Satellite Club',
  'IEEE Internet of Things Journal',
  'Llama-3 fine-tuned for satellite engineering',
  'GDG AI/ML Lead',
  'Global Game Jam 2026',
  'BoxBox: F1 pit stops priced like options',
];

export const experience = [
  {
    company: 'Rayi Fintech',
    title: 'AI Developer',
    date: 'Jun 2026 — Present',
    place: 'Onsite',
    current: true,
    summary: 'Building Rayi’s voice-first AI investing assistant, live at ai.rayi.app.',
    bullets: [
      'Rebuilt the real-time voice pipeline with streaming speech-to-text and text-to-speech, so answers start speaking while they are still being written.',
      'Voice and chat that understand and reply in 10 Indian languages, with safety rules so numbers and fund facts come from data, never from the model’s memory.',
      'Shipped CAS portfolio analysis: tax-loss harvesting, look-through stock concentration, fund overlap and fund quality versus category peers.',
      'Built daily mutual-fund, benchmark and market data pipelines and a real-account layer that reads customers’ live portfolios, goals and baskets.',
      'Cut answer latency with server-side card rendering, caching and smarter model routing across Claude on Bedrock and DeepSeek.',
    ],
    stack: ['Python', 'AWS Lambda', 'Bedrock', 'DynamoDB', 'Next.js', 'WebSockets', 'Sarvam', 'EventBridge'],
  },
  {
    company: 'Rayi Fintech',
    title: 'AI Developer Intern',
    date: 'Jun 2025 — Aug 2025',
    place: 'Remote',
    bullets: [
      'Built an LLM-based financial analytics system that pulls real-time APIs for insights across several financial domains.',
      'Designed validation pipelines that reduced hallucination rates by 15–20%.',
      'Tuned prompt workflows for domain constraints, making answers more consistent and accurate.',
    ],
    stack: ['LLMs', 'Prompt Engineering', 'Real-time APIs', 'Evaluation'],
  },
  {
    company: 'OntuneAI',
    title: 'Software Engineering Intern',
    date: 'May 2025 — Jun 2025',
    place: 'Hybrid',
    bullets: [
      'Prompt engineering and R&D to make LLM-driven systems more robust.',
      'Evaluated model behaviour under edge cases and domain-specific constraints.',
    ],
    stack: ['LLMs', 'R&D', 'Evaluation'],
  },
];

export const projectFilters = ['All', 'LLM & Agents', 'ML & Research', 'Vision & Robotics', 'Full-stack', 'Fun'];

export const projects = [
  {
    title: 'BoxBox',
    kicker: 'F1 pit strategy priced like an option',
    category: 'ML & Research',
    year: '2026',
    featured: true,
    link: 'https://github.com/Krishna-ctrl1/BoxBox',
    demo: 'https://box-box-sand.vercel.app/',
    description:
      'Learns tyre wear from two seasons of real F1 timing data, simulates the rest of a race 2,000 times at once, and prices the pit stop like an American option (Longstaff–Schwartz). Rivals cover undercuts at measured rates, and head-to-head duels are solved for their Nash equilibrium. Live site with replays, odds and a pit-window slider for every 2024 race.',
    metrics: [
      { k: '0.66 s', v: 'lap-time error (baseline 1.14 s)' },
      { k: '93%', v: 'favourite won (leader 79%)' },
      { k: '+0.47', v: 'places vs teams’ pit calls (in-model)' },
    ],
    tags: ['Monte Carlo', 'Optimal Stopping', 'Bayesian', 'Game Theory', 'React'],
  },
  {
    title: 'OrbitAI',
    kicker: 'Domain LLM for satellite engineering',
    category: 'LLM & Agents',
    year: '2025',
    featured: true,
    link: 'https://github.com/Krishna-ctrl1/OrbitAI',
    description:
      'Llama-3-8B fine-tuned with LoRA on a dataset built from 10+ aerospace standards and manuals. It gets the 6 kg 3U CubeSat limit from CDS Rev 14.1 right where the base model says 4 kg.',
    metrics: [
      { k: '3.18 → 2.23', v: 'training loss' },
      { k: '50–60%', v: 'less memory (GGUF q4)' },
      { k: '100+', v: 'eval test cases' },
    ],
    tags: ['Llama-3-8B', 'LoRA', 'Unsloth', 'GGUF', 'Ollama'],
  },
  {
    title: 'FinAssist',
    kicker: 'RAG financial advisory agent',
    category: 'LLM & Agents',
    year: '2025',
    featured: true,
    link: 'https://github.com/Krishna-ctrl1/finassist-chatbot',
    description:
      'A financial assistant that handles typo-laden questions, routes intents, runs what-if CAGR scenarios, compares funds and answers from the user’s own portfolio.',
    metrics: [
      { k: '30–40%', v: 'lower latency' },
      { k: '20–25%', v: 'better retrieval precision' },
    ],
    tags: ['RAG', 'Vector Search', 'MCP', 'Node.js', 'MongoDB'],
  },
  {
    title: 'AML Investigation Swarm',
    kicker: 'Agentic anti-money-laundering',
    featured: true,
    category: 'LLM & Agents',
    year: '2026',
    link: 'https://github.com/Krishna-ctrl1/aml-investigation-swarm',
    description:
      'A Gemini agent investigates transactions by calling risk-history and sanctions tools that live on an isolated FastMCP server, so the model never sees raw credentials.',
    tags: ['Gemini', 'FastMCP', 'FastAPI', 'Docker', 'SSE'],
  },
  {
    title: 'Autonomous Research Agent',
    kicker: 'Plans, searches, critiques, writes',
    category: 'LLM & Agents',
    year: '2025',
    link: 'https://github.com/Krishna-ctrl1/Research_Agent',
    description:
      'A LangGraph agent on local Llama 3 that plans a topic, searches the web, critiques itself and writes a full report, served by FastAPI and deployed to AWS App Runner through CI/CD.',
    tags: ['LangGraph', 'LangChain', 'Ollama', 'FastAPI', 'AWS'],
  },
  {
    title: 'Myoelectric Distillation',
    kicker: 'Low-latency prosthetic control',
    category: 'ML & Research',
    year: '2026',
    featured: true,
    link: 'https://github.com/Krishna-ctrl1/Active-Knowledge-Distillation-for-Low-Latency-Myoelectric-Prosthetic-Control-',
    description:
      'A small student model distilled from a large teacher reads EMG signals into gestures at edge-device speed. It is validated leave-one-subject-out, explained with SHAP and drives a PyBullet robot-arm digital twin.',
    tags: ['PyTorch', 'Knowledge Distillation', 'NinaPro DB5', 'SHAP', 'PyBullet'],
  },
  {
    title: 'Robust Canvas Bot',
    kicker: 'Semantic-aware robotic drawing',
    featured: true,
    category: 'Vision & Robotics',
    year: '2026',
    link: 'https://github.com/Krishna-ctrl1/Robust-Canvas-Bot',
    description:
      'A robot drawing pipeline that repairs a photo first (Zero-DCE low-light, Wiener deblur), routes text and objects separately, shades with MiDaS depth and draws safely with a 6-DOF arm in PyBullet.',
    metrics: [
      { k: '+2.26 dB', v: 'PSNR on low light' },
      { k: '90%+', v: 'routing accuracy' },
    ],
    tags: ['MiDaS', 'Zero-DCE', 'EasyOCR', 'PyBullet'],
  },
  {
    title: 'Customer Segmentation Engine',
    kicker: 'Mixed-data clustering app',
    category: 'Full-stack',
    year: '2026',
    link: 'https://github.com/Krishna-ctrl1/Mixed-Data-Customer-Segmentation-Engine',
    description:
      'Upload any customer CSV and it picks K-Prototypes, K-Means or K-Modes based on the column types, then shows PCA maps and personas. Built with React, Express and a Python engine.',
    tags: ['React', 'Express', 'scikit-learn', 'K-Prototypes'],
  },
  {
    title: 'DRAKZ',
    kicker: 'Modular AI financial ecosystem',
    category: 'Full-stack',
    year: '2024',
    link: 'https://github.com/Krishna-ctrl1/DRAKZ-1',
    description:
      'A full-stack money hub with asset tracking, an AI advisor chatbot, ML stock recommendations and JWT-secured services.',
    tags: ['Full-stack', 'JWT', 'ML Recommendations'],
  },
  {
    title: 'HN Trend & Sentiment',
    kicker: 'Live NLP dashboard',
    category: 'ML & Research',
    year: '2026',
    link: 'https://github.com/Krishna-ctrl1/-Live-API-Trend-Sentiment-Analyzer',
    demo: 'https://live-api-trend-sentiment-analyzer.streamlit.app/',
    description:
      'Pulls live Hacker News stories, scores headline sentiment with VADER and charts sentiment against upvotes and trending keywords.',
    tags: ['NLTK', 'Streamlit', 'Plotly', 'Pandas'],
  },
  {
    title: 'Judas Protocol',
    kicker: 'Global Game Jam 2026',
    category: 'Fun',
    year: '2026',
    link: 'https://github.com/Krishna-ctrl1/JudasProtocol',
    description:
      'A psychological horror shooter where the engine itself loses its sanity. It has a custom GLSL glitch shader and reality switching, built in Godot 4 in one weekend.',
    tags: ['Godot 4', 'GLSL', 'Game Jam'],
  },
  {
    title: 'ERP Bot',
    kicker: 'Hugging Face Space',
    category: 'Fun',
    year: '2024',
    link: 'https://github.com/Krishna-ctrl1/erp-chatbot',
    demo: 'https://huggingface.co/spaces/krish060705/erpbot',
    description: 'An early chatbot for ERP questions, deployed as a public Hugging Face Space.',
    tags: ['Python', 'Hugging Face'],
  },
];

export const research = [
  {
    title: 'Quantum Machine Learning in IoT Networks',
    venue: 'IEEE Engineering Management Review',
    year: '2026',
    status: 'Published',
    doi: '10.1109/EMR.2026.3698824',
    url: 'https://doi.org/10.1109/EMR.2026.3698824',
    abstract:
      'A review of QML in IoT networks: architectures, opportunities and limits, including scalability, compute, privacy and real-world deployment.',
  },
  {
    title: 'Machine Learning for Industry 5.0: A Survey',
    venue: 'IEEE Internet of Things Journal',
    year: '2025',
    status: 'Published',
    doi: '10.1109/JIOT.2025.3604413',
    url: 'https://doi.org/10.1109/JIOT.2025.3604413',
    abstract:
      'A survey of ML in Industry 5.0, covering scalability, data distribution and robustness, written with researchers from IIT Mandi, FinThrive (USA) and Sister Nivedita University.',
  },
  {
    title: 'Quantum Machine Learning for Industry 5.0',
    venue: 'Springer Nature',
    year: '2025',
    status: 'Published',
    doi: '10.1007/978-3-031-87837-4_7',
    url: 'https://doi.org/10.1007/978-3-031-87837-4_7',
    abstract:
      'Quantum-enhanced learning frameworks for cyber-physical systems, and how feasible hybrid quantum-classical models are at scale.',
  },
];

export const skills = [
  { group: 'Generative AI', items: ['LLM Fine-Tuning', 'LoRA / QLoRA', 'RAG', 'Agents', 'LangGraph', 'LangChain', 'MCP', 'Prompt Engineering', 'Evaluation'] },
  { group: 'Machine Learning', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'Transformers', 'Knowledge Distillation', 'Anomaly Detection', 'SHAP'] },
  { group: 'Voice & Realtime', items: ['Streaming STT', 'Streaming TTS', 'WebSockets', 'Multilingual NLP', 'Latency Tuning'] },
  { group: 'Cloud & MLOps', items: ['AWS Lambda', 'Bedrock', 'DynamoDB', 'EventBridge', 'Docker', 'Kubernetes', 'MLflow', 'GitHub Actions'] },
  { group: 'Backend & Web', items: ['FastAPI', 'Node.js', 'REST APIs', 'Next.js', 'React', 'Vector Databases'] },
  { group: 'Languages & Data', items: ['Python', 'SQL', 'JavaScript', 'R', 'Pandas', 'Power BI', 'Feature Engineering'] },
];

export const leadership = [
  {
    title: 'Lead',
    org: 'Student Satellite Club, IIIT Sri City',
    date: 'Nov 2025 — Present',
    points: [
      'Leading a cross-functional team on satellite system design with AI-driven analysis tools.',
      'Driving domain-specific LLM systems for satellite engineering (see OrbitAI).',
    ],
  },
  {
    title: 'AI/ML & Data Science Lead',
    org: 'Google Developer Groups, IIIT Sri City',
    date: 'Aug 2025 — Present',
    points: [
      'Ran AI/ML workshops and project mentorship for 100+ students.',
      'Designed and taught sessions on LLMs, RAG pipelines and deployment.',
    ],
  },
];

export const education = {
  school: 'Indian Institute of Information Technology, Sri City',
  degree: 'B.Tech (Honors) in Computer Science and Engineering',
  spec: 'Specialisation in Data Science',
  date: '2023 — 2027',
  cgpa: '9.02 / 10',
  place: 'Sri City, Andhra Pradesh',
};
