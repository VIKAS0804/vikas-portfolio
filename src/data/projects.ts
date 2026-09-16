export type PortfolioProject = {
  id: string;
  name: string;
  desktopTitle: string;
  icon: string;
  status: string;
  category: string;
  summary: string;
  problem: string;
  implementation: string;
  highlights: string[];
  architecture: string[];
  stack: string[];
  links: Array<{ label: string; href: string }>;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "fintech-coach",
    name: "Impulse Coach",
    desktopTitle: "Fintech Coach",
    icon: "/png/controll.png",
    status: "Active build",
    category: "Mobile fintech · Behavioral analytics",
    summary:
      "A mobile coaching app that turns synced transaction data into understandable impulse-spending signals and practical safe-to-spend guidance.",
    problem:
      "Most financial dashboards explain where money went after the fact. Impulse Coach focuses on the moment between seeing a pattern and making the next decision, helping users recognize merchant loops, spend sprees, category spikes, and high-ticket purchases.",
    implementation:
      "The product combines a mobile-first Expo interface with authenticated Plaid transaction sync, Supabase Edge Functions, and a PostgreSQL model protected by Row Level Security. It also includes a complete mock-data path so the coaching experience can be evaluated without paid services or bank credentials.",
    highlights: [
      "Built a dashboard for discretionary spending, safe-to-spend guidance, recent transactions, and coaching signals.",
      "Designed strict user-scoped database access with Supabase Auth and PostgreSQL Row Level Security.",
      "Implemented Plaid link-token creation, encrypted token exchange, transaction synchronization, and insight generation in edge functions.",
      "Added web and native Plaid Link launchers plus an entirely free desktop demo path.",
    ],
    architecture: [
      "Expo and React Native client for web, iOS, and Android development",
      "Supabase Auth and authenticated Edge Function calls",
      "Plaid Sandbox or live account connection for transaction ingestion",
      "PostgreSQL with composite indexes and per-user RLS policies",
    ],
    stack: ["Expo", "React Native", "TypeScript", "Plaid", "Supabase", "PostgreSQL"],
    links: [
      { label: "View GitHub repository", href: "https://github.com/VIKAS0804/fintech-coach-app" },
    ],
  },
  {
    id: "thinkstruct",
    name: "ThinkStruct Patent Search",
    desktopTitle: "ThinkStruct",
    icon: "/png/search.png",
    status: "Completed case study",
    category: "Applied ML · Search systems",
    summary:
      "A hybrid patent-search system that combines semantic retrieval, structured filters, multiple result granularities, and an at-scale pgvector architecture.",
    problem:
      "Patent researchers need more than keyword matching. They need to combine technical meaning with classification, title, abstract, claim, and paragraph constraints while still receiving explainable, ranked results.",
    implementation:
      "ThinkStruct provides patent, claim, and paragraph-level retrieval; optimized hybrid filtering; RRF re-ranking; evaluation and fine-tuning tooling; evidence-grounded claim charting; and a system design for scaling the same retrieval model to more than ten million patents.",
    highlights: [
      "Implemented semantic retrieval with a sentence-transformer backend and a robust offline TF-IDF plus SVD fallback.",
      "Built patent, claim, and paragraph search modes with shared filtering behavior.",
      "Added Reciprocal Rank Fusion, evaluation tooling, claim charting, and benchmark comparisons.",
      "Documented a PostgreSQL and pgvector production architecture with ingestion, replication, monitoring, and cost considerations.",
      "Maintains a 154-test suite with automated offline CI verification.",
    ],
    architecture: [
      "Flask web layer backed by a framework-independent search service",
      "Pluggable dense-embedding or offline LSA vector generation",
      "Hybrid metadata filtering before similarity calculation",
      "Production design using PostgreSQL, pgvector, HNSW, workers, and object storage",
    ],
    stack: ["Python", "Flask", "NumPy", "scikit-learn", "PostgreSQL", "pgvector"],
    links: [
      { label: "View GitHub repository", href: "https://github.com/VIKAS0804/ThinkStruct-assessment" },
    ],
  },
  {
    id: "moodsync",
    name: "MoodSync",
    desktopTitle: "MoodSync",
    icon: "/png/mymusic.png",
    status: "Active build",
    category: "Audio intelligence · Mobile",
    summary:
      "A mood-adaptive music player that maps a continuous 1–100 energy slider to tracks from the listener's own Spotify library.",
    problem:
      "Searching and scrolling through playlists is awkward while driving or exercising, and Spotify no longer exposes audio-analysis features to new third-party applications. MoodSync needed a simple interaction and an independent way to understand the sound of each track.",
    implementation:
      "MoodSync matches Spotify tracks to Apple Music or iTunes preview clips, extracts audio features locally, scores their energy through a transparent model, and caches both features and results. Playback is handed to Spotify with a preview fallback, respecting the platform's licensing boundaries.",
    highlights: [
      "Created a one-control interface that treats mood as a continuous range instead of a playlist folder.",
      "Built a DSP pipeline with librosa for loudness, onset, spectral, percussive, tonal, and related audio features.",
      "Linked Spotify and Apple catalogs through ISRC with a confidence-discounted iTunes fallback.",
      "Added PostgreSQL caching, Spotify OAuth with PKCE, device pairing, and a credential-free demo library.",
      "Designed the scoring model to be inspectable and replaceable with learned weights as corrections accumulate.",
    ],
    architecture: [
      "Expo Router mobile client with a mood slider and Spotify playback handoff",
      "FastAPI service for authentication, synchronization, scoring, and selection",
      "Apple Music or iTunes previews processed by a local DSP pipeline",
      "PostgreSQL feature cache with optional S3 preview storage",
    ],
    stack: ["React Native", "Expo", "FastAPI", "Python", "librosa", "Spotify", "PostgreSQL"],
    links: [
      { label: "View GitHub repository", href: "https://github.com/VIKAS0804/Moodsync" },
    ],
  },
  {
    id: "iot-dashboard",
    name: "Shipment IoT Dashboard",
    desktopTitle: "IoT Dashboard",
    icon: "/png/network.png",
    status: "Live backend",
    category: "IoT · Mobile · Google Cloud",
    summary:
      "A mobile condition-monitoring system for shipment temperature and humidity, backed by MQTT, Cloud Run, Firestore, and Pub/Sub.",
    problem:
      "Packaging and logistics teams need an understandable way to observe storage and transit conditions before humidity or temperature becomes visible product damage.",
    implementation:
      "The React Native client subscribes to TLS-secured MQTT topics with QoS 1, displays incoming telemetry and risk guidance, and forwards readings to a deployed Cloud Run service. The backend persists the reading to Firestore and emits a compact Pub/Sub event for downstream routing.",
    highlights: [
      "Implemented secure WebSocket MQTT subscriptions for temperature, humidity, connection status, and Last Will behavior.",
      "Built a device simulator that publishes realistic external telemetry over MQTT TLS.",
      "Added a live Cloud Run ingestion service with Firestore persistence and Pub/Sub event publication.",
      "Used Expo Secure Store for Keychain and Keystore-backed device configuration.",
      "Framed the system around packaging, storage, and mold-risk monitoring rather than generic home automation.",
    ],
    architecture: [
      "React Native monitoring client connected to a public MQTT broker",
      "External simulator representing a physical sensor or edge gateway",
      "Cloud Run API for validated telemetry ingestion",
      "Firestore history plus Pub/Sub routing events",
    ],
    stack: ["React Native", "TypeScript", "MQTT", "Cloud Run", "Firestore", "Pub/Sub"],
    links: [
      { label: "View GitHub repository", href: "https://github.com/VIKAS0804/personal-iot-sensor-dashboard" },
      { label: "Open live API", href: "https://iot-sensor-dashboard-api-764832725153.us-central1.run.app" },
    ],
  },
  {
    id: "ticketforge",
    name: "TicketForge",
    desktopTitle: "TicketForge",
    icon: "/png/sign-paper.png",
    status: "Team MLOps project",
    category: "MLOps · Developer productivity",
    summary:
      "An AI-assisted DevOps ticket-assignment platform designed to reduce repetitive triage and recommend engineers using skills, history, and ticket requirements.",
    problem:
      "Engineering teams can spend meaningful time reading, prioritizing, and assigning every incoming ticket before resolution work even begins. TicketForge treats routing as a repeatable machine-learning and operations problem.",
    implementation:
      "The system is organized as an end-to-end MLOps monorepo: ingestion and ETL pipelines, model training and evaluation, a serving API, a web dashboard, shared ML libraries, infrastructure as code, and operational workflows for deployment and monitoring.",
    highlights: [
      "Structured ingestion, training, backend, frontend, and shared ML code as coordinated workspaces.",
      "Used Airflow for ticket and resume ETL plus scheduled model workflows.",
      "Tracked datasets and model artifacts with DVC and versioned model lifecycle workflows.",
      "Added Terraform-managed GCP infrastructure, Cloud Run serving, smoke tests, and deployment reports.",
      "Implemented CI, model monitoring, promotion gates, and traceable serving model versions.",
    ],
    architecture: [
      "Airflow pipelines for ingestion, ETL, replay, and training orchestration",
      "Shared Python ML libraries with FastAPI model serving",
      "Astro web interface for interacting with predictions and workflows",
      "Terraform, Cloud Run, Cloud SQL, DVC, MLflow, and GitHub Actions",
    ],
    stack: ["Python", "Airflow", "FastAPI", "Astro", "DVC", "MLflow", "Terraform", "GCP"],
    links: [
      { label: "View GitHub repository", href: "https://github.com/VIKAS0804/ticket-forge" },
    ],
  },
  {
    id: "tribunal",
    name: "Tribunal",
    desktopTitle: "Tribunal",
    icon: "/png/gatewall.png",
    status: "MIT Bitcoin Hackathon",
    category: "Bitcoin · Agent marketplace",
    summary:
      "A Bitcoin-native marketplace where AI agents sell services through HTLC escrow, on-chain reputation, and commit-reveal dispute resolution.",
    problem:
      "Traditional marketplaces control escrow, reputation, identity, fees, and disputes. Tribunal explores how those trust assumptions can move into verifiable Bitcoin contracts and transparent incentive mechanisms.",
    implementation:
      "Every transaction uses three HTLC locks for the seller bond, buyer advance, and final payment. An indexer derives reputation from on-chain outcomes, while a staked federation resolves disputes through a commit-reveal jury process.",
    highlights: [
      "Implemented real P2WSH Bitcoin scripts for claim, refund, timeout, and slashing paths.",
      "Designed a three-lock handshake that aligns buyer and seller incentives before work begins.",
      "Derived marketplace reputation from blockchain witness data instead of platform-owned ratings.",
      "Used a deterministic staked jury with commit-reveal voting for dispute resolution.",
      "Built wallet-key identity without platform accounts, custody, or server sessions.",
    ],
    architecture: [
      "Next.js marketplace interface with wallet-based identity",
      "Bitcoin Core regtest and bitcoinjs-lib contract execution",
      "Indexer that derives verdicts and reputation from HTLC spends",
      "Staked federation service for deterministic jury selection and voting",
    ],
    stack: ["Next.js", "TypeScript", "Bitcoin Script", "bitcoinjs-lib", "Bitcoin Core"],
    links: [
      { label: "View GitHub repository", href: "https://github.com/VIKAS0804/Zoro" },
    ],
  },
];
