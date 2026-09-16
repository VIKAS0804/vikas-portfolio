import { portfolioProjects } from "@/data/projects";

const profileOverview = `
Vikas Neriyanuru is a software engineer and MS in Computer Science candidate at
Northeastern University in Boston. He is currently a Software Developer Intern
at Superstars and a Graduate Teaching Assistant at Northeastern University's
Khoury College of Computer Sciences, where he supports more than 60 students.

Previously, Vikas worked as a Software Development Engineer at Jio Platforms
from August 2021 through December 2023. His work included enterprise platforms
serving more than 400,000 employees, automation that reduced manual processing
by 40 percent, query optimization that improved performance by 25 percent, more
than 100 code reviews, and mentoring three junior engineers. Earlier experience
includes software development at Inspectinity, cloud architecture at Aspire
Vision Tech, and a machine learning internship at Verzeo.

Education and certifications:
* MS in Computer Science at Northeastern University, January 2025 to May 2027
* AWS Academy Graduate, Cloud Architecting
* AWS Academy Graduate, Cloud Foundations

Core technologies include Java, Python, JavaScript, TypeScript, SQL, React,
React Native, Expo, Node.js, Spring Boot, FastAPI, Flask, PostgreSQL, AWS,
Google Cloud, Docker, Kubernetes, GitHub Actions, machine learning, MLOps,
microservices, and system design.

Public links:
* Portfolio: https://vikasneriyanuru.com
* GitHub: https://github.com/VIKAS0804
* LinkedIn: https://www.linkedin.com/in/vikas-neriyanuru/
* Resume: https://vikasneriyanuru.com/pdf/vikas-resume.pdf
`;

const projectKnowledge = portfolioProjects
  .map(
    (project) => `
Project: ${project.name}
Status: ${project.status}
Category: ${project.category}
Summary: ${project.summary}
Problem: ${project.problem}
Implementation: ${project.implementation}
Highlights: ${project.highlights.join(" ")}
Architecture: ${project.architecture.join(" ")}
Stack: ${project.stack.join(", ")}
Links: ${project.links.map((link) => `${link.label}: ${link.href}`).join("; ")}
`
  )
  .join("\n");

export const profileAssistantKnowledge = `${profileOverview}\n${projectKnowledge}`;

export type AssistantHistoryMessage = {
  role: "user" | "assistant";
  content: string;
};

const fallbackAnswers = [
  {
    terms: ["contact", "email", "linkedin", "github", "reach"],
    answer:
      "You can reach Vikas through the Contact section, connect with him on LinkedIn, or explore his work on GitHub. Those links are available from the Explore bar and desktop icons.",
  },
  {
    terms: ["education", "university", "degree", "northeastern", "student"],
    answer:
      "Vikas is pursuing an MS in Computer Science at Northeastern University from January 2025 through May 2027. He is also a Graduate Teaching Assistant at Khoury, supporting more than 60 students through instruction, office hours, debugging, and feedback.",
  },
  {
    terms: ["experience", "work", "jio", "superstars", "career"],
    answer:
      "Vikas is currently a Software Developer Intern at Superstars and a Graduate Teaching Assistant at Khoury. Previously, he was a Software Development Engineer at Jio Platforms, where he worked on enterprise platforms serving more than 400,000 employees and improved automation and system performance. Open Experience for the complete timeline.",
  },
  {
    terms: ["skill", "technology", "stack", "language", "cloud"],
    answer:
      "Vikas works across Java, Python, JavaScript, TypeScript, React, React Native, Node.js, Spring Boot, FastAPI, PostgreSQL, AWS, Google Cloud, Docker, and MLOps tooling. His projects apply these skills to full stack products, cloud systems, applied machine learning, IoT, and Bitcoin infrastructure.",
  },
  {
    terms: ["impulse", "fintech", "coach", "plaid", "spending"],
    answer:
      "Impulse Coach turns transaction data into impulse spending signals and practical safe to spend guidance. It combines Expo, Plaid, Supabase Edge Functions, PostgreSQL, and user scoped Row Level Security, with a complete demo path that does not require bank credentials.",
  },
  {
    terms: ["thinkstruct", "patent", "search", "semantic"],
    answer:
      "ThinkStruct is a hybrid patent search system with semantic retrieval, structured filters, multiple result granularities, Reciprocal Rank Fusion, evaluation tools, and evidence grounded claim charting. Its production design uses PostgreSQL, pgvector, HNSW, workers, and object storage, and the repository maintains a 154 test suite.",
  },
  {
    terms: ["moodsync", "music", "spotify", "audio"],
    answer:
      "MoodSync is a mood adaptive music player that maps a continuous energy control to music from a listener's Spotify library. It uses a React Native client, FastAPI, local audio feature extraction with librosa, catalog matching, and PostgreSQL caching.",
  },
  {
    terms: ["iot", "shipment", "sensor", "mqtt", "temperature", "humidity"],
    answer:
      "The Shipment IoT Dashboard monitors shipment temperature and humidity through secure MQTT telemetry. Its architecture includes a React Native client, a device simulator, a Cloud Run ingestion API, Firestore history, and Pub/Sub routing events.",
  },
  {
    terms: ["ticketforge", "ticket", "mlops", "devops"],
    answer:
      "TicketForge is an AI assisted DevOps ticket assignment platform built as an end to end MLOps system. It includes Airflow pipelines, model training and serving, FastAPI, Astro, DVC, MLflow, Terraform, Google Cloud deployment, monitoring, and promotion gates.",
  },
  {
    terms: ["tribunal", "bitcoin", "htlc", "hackathon"],
    answer:
      "Tribunal is a Bitcoin native marketplace where AI agents sell services using HTLC escrow, on chain reputation, and commit reveal dispute resolution. It combines Next.js, Bitcoin Script, bitcoinjs-lib, Bitcoin Core regtest, an indexer, and a staked jury service.",
  },
  {
    terms: ["project", "built", "portfolio", "best", "favorite"],
    answer:
      "Vikas currently features six projects: Impulse Coach, ThinkStruct, MoodSync, the Shipment IoT Dashboard, TicketForge, and Tribunal. They span mobile fintech, semantic search, audio intelligence, cloud IoT, MLOps, and Bitcoin systems. Open Featured Projects to compare them or ask me about one by name.",
  },
  {
    terms: ["resume", "cv"],
    answer:
      "Vikas's resume is available from the Resume icon on the desktop or the Explore bar at the top. It provides a focused view of his experience, education, projects, and technical background.",
  },
];

export function answerFromPortfolio(question: string) {
  const normalized = question.toLowerCase();
  const match = fallbackAnswers.find(({ terms }) =>
    terms.some((term) => normalized.includes(term))
  );

  return (
    match?.answer ??
    "I can help you explore Vikas's projects, experience, education, skills, or contact information. Try asking what he is building now, which project uses machine learning, or what he worked on at Jio Platforms."
  );
}

const projectAliases: Record<string, string[]> = {
  "fintech-coach": ["impulse", "fintech", "coach", "plaid", "spending"],
  thinkstruct: ["thinkstruct", "patent", "semantic search"],
  moodsync: ["moodsync", "mood sync", "spotify", "music player"],
  "iot-dashboard": ["shipment", "iot", "sensor dashboard", "mqtt"],
  ticketforge: ["ticketforge", "ticket forge", "mlops"],
  tribunal: ["tribunal", "bitcoin marketplace", "htlc", "zoro"],
};

function findProject(text: string) {
  const normalized = text.toLowerCase();
  const projectId = Object.entries(projectAliases).find(([, aliases]) =>
    aliases.some((alias) => normalized.includes(alias))
  )?.[0];

  return portfolioProjects.find((project) => project.id === projectId);
}

function projectFromConversation(
  question: string,
  history: AssistantHistoryMessage[]
) {
  const directMatch = findProject(question);
  if (directMatch) return directMatch;

  const previousMessages = [...history].reverse();
  for (const message of previousMessages) {
    const match = findProject(message.content);
    if (match) return match;
  }

  return null;
}

function answerProjectQuestion(
  question: string,
  history: AssistantHistoryMessage[]
) {
  const normalized = question.toLowerCase();
  const project = projectFromConversation(question, history);
  if (!project) return null;

  if (/stack|technolog|language|built with|tools/.test(normalized)) {
    return `${project.name} uses ${project.stack.join(", ")}. Its architecture includes ${project.architecture[0].toLowerCase()} and ${project.architecture[1].toLowerCase()}.`;
  }

  if (/architect|system|work|implement|under the hood/.test(normalized)) {
    return `${project.implementation} The main pieces are ${project.architecture.join("; ")}.`;
  }

  if (/problem|why|purpose|solve/.test(normalized)) {
    return `${project.problem} ${project.summary}`;
  }

  if (/highlight|feature|interesting|special|achievement/.test(normalized)) {
    return `${project.name} stands out for three things: ${project.highlights
      .slice(0, 3)
      .join(" ")}`;
  }

  if (/status|finished|complete|active|current/.test(normalized)) {
    return `${project.name} is listed as “${project.status}.” ${project.summary}`;
  }

  if (/link|github|repo|source|open/.test(normalized)) {
    return `${project.name} is available here: ${project.links
      .map((link) => `${link.label}: ${link.href}`)
      .join(". ")}`;
  }

  return `${project.summary} ${project.implementation} Ask about its stack, architecture, highlights, or repository if you want to go deeper.`;
}

export function answerProfileQuestion(
  question: string,
  history: AssistantHistoryMessage[] = []
) {
  const trimmed = question.trim();
  if (!trimmed) {
    return "Ask me about Vikas's projects, experience, skills, or education.";
  }

  const projectAnswer = answerProjectQuestion(trimmed, history);
  return projectAnswer ?? answerFromPortfolio(trimmed);
}
