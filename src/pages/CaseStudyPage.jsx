import React from 'react';
import architectureImg from '../data/architecture.png';

const StatCard = ({ number, label }) => (
  <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center transition-all hover:shadow-md hover:-translate-y-1 group">
    <div className="text-4xl lg:text-5xl font-extrabold text-primary font-headline mb-2 group-hover:scale-105 transition-transform">{number}</div>
    <div className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">{label}</div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-primary/20 group">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      <span className="material-symbols-outlined !text-[24px]">{icon}</span>
    </div>
    <h4 className="text-xl font-bold text-on-surface mb-2 font-headline">{title}</h4>
    <p className="text-on-surface-variant leading-relaxed text-sm">{description}</p>
  </div>
);

const Badge = ({ children, colorClass = "bg-primary/10 text-primary" }) => (
  <span className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase ${colorClass}`}>
    {children}
  </span>
);

const CaseStudyPage = () => {
  return (
    <div className="animate-in fade-in duration-700 w-full max-w-6xl mx-auto pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="py-16 lg:py-16 flex flex-col items-center text-center px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Badge colorClass="bg-orange-100 text-orange-700 border border-orange-200">GSoC</Badge>
          <Badge colorClass="bg-blue-100 text-blue-700 border border-blue-200">Digital Health</Badge>
          <Badge colorClass="bg-blue-100 text-blue-700 border border-blue-200">Healthcare</Badge>
          <Badge colorClass="bg-purple-100 text-purple-700 border border-purple-200">Interoperability</Badge>
          <Badge colorClass="bg-emerald-100 text-emerald-700 border border-emerald-200">PoC</Badge>
        </div>
        
        <h1 className="text-4xl lg:text-6xl font-black text-slate-900  mb-6 font-headline max-w-4xl">
          D4CG: The SMART on FHIR <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Patient Dashboard</span>
        </h1>
        
        <p className="text-lg lg:text-xl text-slate-600 max-w-4xl mb-10 leading-relaxed">
  A modern, patient-centric frontend that empowers users to connect to FHIR servers, fetch their medical records, and visualize data through a beautiful, accessible interface. 
  It transforms complex clinical data into meaningful insights, enabling better understanding, control, and interaction with personal health information.
</p>
        
        <div className="flex items-center gap-4">
          <a href="#" className="px-8 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all text-sm tracking-wide">
            Live Demo
          </a>
          <a href="#" className="px-8 py-3 bg-white text-slate-700 border border-slate-200 font-bold rounded-full hover:bg-slate-50 transition-all text-sm tracking-wide flex items-center gap-2">
            <span className="material-symbols-outlined !text-[18px]">code</span>
            GitHub Repo
          </a>
        </div>
      </section>

      {/* 2. OVERVIEW */}
<section className="py-16 px-6 relative">

  <div className="mb-10">
    <h2 className="text-4xl font-black text-slate-900 font-headline mb-2">Overview</h2>
    <p className="text-slate-500">
      Understanding the problem space, the approach taken, and how this PoC delivers real value.
    </p>
  </div>

  <div className="grid gap-12 mt-12">

    {/* Problem */}
    <div>
      <h3 className="text-sm font-black text-primary uppercase tracking-widest mb-4">
        Fragmented Healthcare Data Access
      </h3>
      <p className="text-slate-700 leading-relaxed text-lg">
        Healthcare systems today are highly fragmented, making it extremely difficult for patients to access and control their medical data across multiple providers. Even with standards like FHIR, real-world implementations often lack consistency and usability. 
        Most patient portals are built with complex workflows, poor navigation, and limited accessibility, resulting in confusion and high drop-off rates.
        This creates a major gap between available healthcare data and actual patient empowerment.
      </p>
    </div>

    {/* Solution */}
    <div>
      <h3 className="text-sm font-black text-secondary uppercase tracking-widest mb-4">
        Simplifying Clinical Data Experience
      </h3>
      <p className="text-slate-700 leading-relaxed text-lg">
        This project introduces a modern frontend application designed to simplify how patients interact with their health data. By connecting directly to FHIR-based APIs, the system fetches raw clinical records and transforms them into structured, user-friendly components.
        The focus is on clarity, accessibility, and intuitive design—ensuring that even complex medical information can be easily understood by non-technical users.
        This approach bridges the gap between technical interoperability and real-world usability.
      </p>
    </div>

    {/* PoC */}
    <div>
      <h3 className="text-sm font-black text-tertiary uppercase tracking-widest mb-4">
        Scalable SMART on FHIR Foundation
      </h3>
      <p className="text-slate-700 leading-relaxed text-lg">
        This Proof of Concept successfully simulates a SMART on FHIR patient workflow, demonstrating how a frontend system can securely fetch, normalize, and present healthcare data in real time.
        It includes features like observation tracking, mini visualizations, and responsive dashboards that adapt to different datasets.
        More importantly, it establishes a scalable architectural foundation that can be extended with OAuth (PKCE), multi-provider support, and patient-controlled data sharing in future iterations.
      </p>
    </div>

  </div>
</section>

      {/* 3. KEY METRICS (STATS) */}
      <section className="py-16 px-6">
        <div className="mb-10">
    <h2 className="text-4xl font-black text-slate-900 font-headline mb-2">Key Metrics</h2>
    <p className="text-slate-500">
      Key metrics that demonstrate the effectiveness of the PoC:
    </p>
  </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard number="< 2s" label="Data Load Time" />
          <StatCard number="100%" label="Data Accuracy" />
          <StatCard number="WCAG" label="Accessibility" />
          <StatCard number="R4" label="FHIR Version" />
        </div>
      </section>

      {/* ----------------- PROJECT GOALS SECTION ----------------- */}
<section className="py-16 px-6 bg-slate-50">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="mb-10">
      <h2 className="text-4xl font-black text-slate-900 font-headline mb-2">
        Project Goals & Objectives
      </h2>
      <p className="text-slate-500 text-lg max-w-2xl">
        Clear goals that guided the design, development, and future scalability of this SMART on FHIR patient dashboard.
      </p>
    </div>

    {/* Goals Cards */}
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-primary font-bold text-xl mb-2">Build Patient-Centric Experience</h3>
        <p className="text-slate-700 leading-relaxed">
          Design an intuitive and accessible interface that enables patients to easily view, understand, and interact with their medical data without technical complexity.
        </p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-primary font-bold text-xl mb-2">Enable Seamless FHIR Integration</h3>
        <p className="text-slate-700 leading-relaxed">
          Establish a robust connection with FHIR-based APIs to fetch real-world healthcare data and ensure compatibility with standardized EHR systems.
        </p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-primary font-bold text-xl mb-2">Optimize Performance & Responsiveness</h3>
        <p className="text-slate-700 leading-relaxed">
          Ensure fast data loading, smooth UI transitions, and efficient rendering even when handling large and complex healthcare datasets.
        </p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-primary font-bold text-xl mb-2">Simplify Complex Medical Data</h3>
        <p className="text-slate-700 leading-relaxed">
          Transform deeply nested FHIR JSON responses into clean, structured, and visually understandable formats for better user comprehension.
        </p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-primary font-bold text-xl mb-2">Build Scalable Frontend Architecture</h3>
        <p className="text-slate-700 leading-relaxed">
          Create a modular and maintainable codebase that can be easily extended for additional features like multi-provider support and advanced analytics.
        </p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-primary font-bold text-xl mb-2">Prepare for Secure Data Access</h3>
        <p className="text-slate-700 leading-relaxed">
          Lay the groundwork for SMART on FHIR OAuth (PKCE) integration to enable secure authentication and patient-controlled data sharing.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* 5. KEY FEATURES */}
      <section className="py-16 px-6">
        <div className="mb-10">
    <h2 className="text-4xl font-black text-slate-900 font-headline mb-2">Core Features</h2>
    <p className="text-slate-500">
      Core features that demonstrate the effectiveness of the PoC:
    </p>
  </div>
        
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon="hub" 
            title="FHIR Connectivity" 
            description="Simulated connection flow ready for full SMART OAuth integration to securely access EHRs." 
          />
          <FeatureCard 
            icon="patient_list" 
            title="Patient Profiling" 
            description="Aggregates demographics, generated avatars, and core identity markers dynamically." 
          />
          <FeatureCard 
            icon="monitor_heart" 
            title="Medical Observations" 
            description="Intelligently filters and surfaces top vital signs over noise, featuring sparkline trends." 
          />
          <FeatureCard 
            icon="bolt" 
            title="Real-time Fetching" 
            description="Leverages modern async calls with polished, non-blocking skeleton loading states." 
          />
          <FeatureCard 
            icon="error" 
            title="Graceful Error Handling" 
            description="User-friendly error boundaries and retry mechanisms that don't overwhelm the patient." 
          />
          <FeatureCard 
            icon="brush" 
            title="Modern Interface" 
            description="Clean, responsive bento-box dashboard layout prioritizing hierarchy and ease of use." 
          />
        </div>
      </section>

     {/* ----------------- TECH STACK SECTION ----------------- */}
<section className="py-16 px-6 bg-slate-50">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="mb-10">
      <h2 className="text-4xl font-black text-slate-900 font-headline mb-2">
        Technology Stack
      </h2>
      <p className="text-slate-500 text-lg max-w-2xl">
        A clean, modular stack chosen for performance, scalability.
      </p>
    </div>

    {/* Categories */}
    <div className="space-y-6 max-w-4xl mx-auto">

      {/* Frontend */}
      <div className="flex flex-wrap items-center gap-6">
        <h3 className="text-lg font-semibold text-primary min-w-[200px]">Frontend:</h3>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
            React.js
          </div>
          <div className="bg-white rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
            Tailwind CSS
          </div>
          <div className="bg-white rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
            Vite
          </div>
        </div>
      </div>

      {/* Data & State Management */}
      <div className="flex flex-wrap items-center gap-6">
        <h3 className="text-md font-semibold text-secondary min-w-[200px]">Data & State:</h3>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
            React Query
          </div>
          <div className="bg-white rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
            Axios
          </div>
        </div>
      </div>

      {/* API */}
      <div className="flex flex-wrap items-center gap-6">
        <h3 className="text-md font-semibold text-tertiary min-w-[200px]">API & Backend:</h3>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
            FHIR / HAPI FHIR
          </div>
          <div className="bg-white rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
            SMART OAuth (Future)
          </div>
        </div>
      </div>

      {/* Data Visualization */}
      <div className="flex flex-wrap items-center gap-6">
        <h3 className="text-md font-semibold text-primary min-w-[200px]">Visualization:</h3>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
            Chart.js / Recharts
          </div>
        </div>
      </div>

      {/* Deployment & Dev Tools */}
      <div className="flex flex-wrap items-center gap-6">
        <h3 className="text-lg font-semibold text-secondary min-w-[200px]">Deployment & Tools:</h3>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
            Vercel / Netlify
          </div>
          <div className="bg-white rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
            Git & GitHub
          </div>
          <div className="bg-white rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
            ESLint & Prettier
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/*  7. ARCHITECTURE */}
<section className="py-16 px-6">
  <div className="max-w-7xl mx-auto space-y-8">
    {/* Heading & Text */}
    <div>
      <h2 className="text-3xl font-black text-slate-900 font-headline mb-4">
        Technical Architecture
      </h2>
      <p className="text-slate-600 leading-relaxed mb-4">
        The system is designed with a strict separation of concerns. The frontend communicates exclusively through normalized hooks and services, decoupling the presentation layer from the complex FHIR JSON structures. 
        This approach allows the UI to remain responsive, maintainable, and highly testable while ensuring consistent patient data rendering.
      </p>
      <p className="text-slate-600 leading-relaxed mb-8">
        All interactions with the backend, including patient queries and observation fetches, pass through a dedicated API layer. Data normalization, validation, and error handling occur before hydration into the UI components, guaranteeing a seamless user experience and scalability for future SMART OAuth integrations.
      </p>
    </div>

    {/* Diagram */}
    <div className="bg-[#1e293b] rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      <h4 className="text-white/60 text-xs font-mono uppercase tracking-widest mb-6">
        System Flow
      </h4>
      <div className="space-y-4 font-mono text-sm text-blue-200">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 bg-blue-500/20 rounded border border-blue-500/30">React App</span>
          <span className="material-symbols-outlined text-white/40">arrow_right_alt</span>
          <span className="text-white">User triggers Connect() or Search</span>
        </div>
        <div className="flex items-center gap-4 ml-8">
          <span className="px-3 py-1 bg-purple-500/20 rounded border border-purple-500/30">API Layer</span>
          <span className="material-symbols-outlined text-white/40">arrow_right_alt</span>
          <span className="text-white">Fetch /Patient, /Observation endpoints</span>
        </div>
        <div className="flex items-center gap-4 ml-16">
          <span className="px-3 py-1 bg-amber-500/20 rounded border border-amber-500/30">Data Parser</span>
          <span className="material-symbols-outlined text-white/40">arrow_right_alt</span>
          <span className="text-white">Normalize FHIR Bundle JSON into consumable data</span>
        </div>
        <div className="flex items-center gap-4 ml-24">
          <span className="px-3 py-1 bg-emerald-500/20 rounded border border-emerald-500/30">UI Render</span>
          <span className="material-symbols-outlined text-white/40">arrow_right_alt</span>
          <span className="text-white">Hydrate dashboard, patient cards, observation charts</span>
        </div>
        <div className="flex items-center gap-4 ml-24">
          <span className="px-3 py-1 bg-pink-500/20 rounded border border-pink-500/30">Error Handling</span>
          <span className="material-symbols-outlined text-white/40">arrow_right_alt</span>
          <span className="text-white">Display retry messages or fallback UI gracefully</span>
        </div>
      </div>
      </div>

    {/* Diagram */}
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-slate-900 pb-3 mb-3">
        System Architecture Diagram
      </h3>
      <div className="border border-slate-200 rounded-[2rem] p-6 md:p-8 bg-white shadow-sm overflow-hidden">
        <img 
          src={architectureImg} 
          alt="System Architecture Diagram" 
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  </div>
</section>

     {/* ----------------- CHALLENGES & SOLUTIONS ----------------- */}
<section className="py-16 px-6">
  <div className="mb-10">
      <h2 className="text-4xl font-black text-slate-900 font-headline mb-2">
        Challenges & Solutions
      </h2>
      <p className="text-slate-500 text-lg max-w-2xl">
        Navigating the complexities of healthcare data integration and presentation.
      </p>
    </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Challenge 1 */}
    <div className="bg-red-50/50 p-8 rounded-3xl border border-red-100">
      <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
        <span className="material-symbols-outlined">warning</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">Complex FHIR Schema</h3>
      <p className="text-slate-700 leading-relaxed">
        FHIR responses are deeply nested blocks of clinical JSON. Directly rendering this complex structure in UI components creates massive technical debt and fragile frontend code.
      </p>
    </div>

    {/* Solution 1 */}
    <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100">
      <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
        <span className="material-symbols-outlined">check_circle</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">Normalization Layer</h3>
      <p className="text-slate-700 leading-relaxed">
        Implemented a robust <code>normalizeData.js</code> utility acting as an anti-corruption layer. It strips out the noise and passes clean, predictable objects (like <code>fullName</code> and <code>bloodType</code>) to the UI.
      </p>
    </div>

    {/* Challenge 2 */}
    <div className="bg-red-50/50 p-8 rounded-3xl border border-red-100">
      <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
        <span className="material-symbols-outlined">error</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">Slow Data Fetching</h3>
      <p className="text-slate-700 leading-relaxed">
        Fetching multiple FHIR resources sequentially caused noticeable lag and poor UX, especially when patients have large histories or multiple observations.
      </p>
    </div>

    {/* Solution 2 */}
    <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100">
      <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
        <span className="material-symbols-outlined">bolt</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">Asynchronous Fetching & Caching</h3>
      <p className="text-slate-700 leading-relaxed">
        Leveraged <code>React Query</code> for concurrent resource fetching, caching, and retry mechanisms, drastically improving response times and UX.
      </p>
    </div>

    {/* Challenge 3 */}
    <div className="bg-red-50/50 p-8 rounded-3xl border border-red-100">
      <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
        <span className="material-symbols-outlined">visibility_off</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">Limited Data Visualization</h3>
      <p className="text-slate-700 leading-relaxed">
        Raw FHIR data lacked immediate visual cues. Users struggled to identify trends or vital patterns without a structured and graphical representation.
      </p>
    </div>

    {/* Solution 3 */}
    <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100">
      <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
        <span className="material-symbols-outlined">show_chart</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">Interactive Visual Components</h3>
      <p className="text-slate-700 leading-relaxed">
        Added dynamic charts, sparklines, and highlight metrics in <code>ObservationList.jsx</code> and <code>StatsCard.jsx</code>, allowing users to interpret vital data instantly.
      </p>
    </div>

  </div>
</section>

      {/* ----------------- PROJECT GOALS / ROADMAP ----------------- */}
<section className="py-16 px-6 max-w-4xl mx-auto">
  <div className="mb-10">
      <h2 className="text-4xl font-black text-slate-900 font-headline mb-2">
        Project Roadmap
      </h2>
      <p className="text-slate-500 text-lg max-w-2xl">
        A phased approach to building a production-ready healthcare application.
      </p>
    </div>

  <div className="space-y-6">
    {/* Phase 1 */}
    <div className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      <div className="px-4 py-2 bg-emerald-100 text-emerald-800 font-bold rounded-xl text-sm whitespace-nowrap">Phase 1 (Completed)</div>
      <div>
        <h4 className="font-bold text-lg mb-1">PoC & Data Fetching</h4>
        <p className="text-slate-600 text-sm">
          Built the initial FHIR dashboard, implemented basic patient & observation data parsing, loading states, and ensured full responsive design. Demonstrated feasibility of SMART on FHIR patient flow.
        </p>
      </div>
    </div>

    {/* Phase 2 */}
    <div className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative">
      <div className="absolute -left-3 top-1/2 w-6 h-[2px] bg-slate-200"></div>
      <div className="px-4 py-2 bg-blue-100 text-blue-800 font-bold rounded-xl text-sm whitespace-nowrap">Phase 2 (Next)</div>
      <div>
        <h4 className="font-bold text-lg mb-1">SMART OAuth Integration</h4>
        <p className="text-slate-600 text-sm">
          Implement true PKCE OAuth flow to authorize patients in real FHIR sandboxes. Ensure secure, granular consent handling and safe token storage.
        </p>
      </div>
    </div>

    {/* Phase 3 */}
    <div className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      <div className="px-4 py-2 bg-slate-100 text-slate-800 font-bold rounded-xl text-sm whitespace-nowrap">Phase 3 (Future)</div>
      <div>
        <h4 className="font-bold text-lg mb-1">Multi-Provider Ecosystem</h4>
        <p className="text-slate-600 text-sm">
          Expand support for multiple EHR providers like Epic and Cerner. Add cross-provider data aggregation and seamless consent management for universal patient access.
        </p>
      </div>
    </div>

    {/* Phase 4 */}
    <div className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative">
      <div className="absolute -left-3 top-1/2 w-6 h-[2px] bg-slate-200"></div>
      <div className="px-4 py-2 bg-yellow-100 text-yellow-800 font-bold rounded-xl text-sm whitespace-nowrap">Phase 4</div>
      <div>
        <h4 className="font-bold text-lg mb-1">Advanced Data Visualization</h4>
        <p className="text-slate-600 text-sm">
          Introduce dynamic charts, trend lines, and sparkline analytics in observation cards. Enable real-time visualization of patient vitals and historical trends.
        </p>
      </div>
    </div>

    {/* Phase 5 */}
    <div className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      <div className="px-4 py-2 bg-purple-100 text-purple-800 font-bold rounded-xl text-sm whitespace-nowrap">Phase 5</div>
      <div>
        <h4 className="font-bold text-lg mb-1">User Personalization & Notifications</h4>
        <p className="text-slate-600 text-sm">
          Add customizable patient dashboards, alert notifications, and reminders for upcoming tests or abnormal results. Ensure data-driven personalization for better engagement.
        </p>
      </div>
    </div>

    {/* Phase 6 */}
    <div className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative">
      <div className="absolute -left-3 top-1/2 w-6 h-[2px] bg-slate-200"></div>
      <div className="px-4 py-2 bg-pink-100 text-pink-800 font-bold rounded-xl text-sm whitespace-nowrap">Phase 6</div>
      <div>
        <h4 className="font-bold text-lg mb-1">Production & Scalability</h4>
        <p className="text-slate-600 text-sm">
          Launch full production version with robust logging, monitoring, and auto-scaling capabilities. Focus on high availability, secure API endpoints, and enterprise-ready deployment.
        </p>
      </div>
    </div>

  </div>
</section>

      {/* 10. CONCLUSION */}
       <section className="py-16 px-6 mt-10">
        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-10 lg:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <h2 className="text-3xl font-black text-slate-900 font-headline mb-6">Empowering the Patient</h2>
          <p className="text-lg text-slate-700 leading-relaxed font-medium mb-8 max-w-2xl mx-auto">
            This project validates that healthcare applications don't have to be clunky. By combining the vast standard-driven power of FHIR with modern frontend product design, we can create experiences that actually place the patient at the center of their own data.
          </p>
          <button className="px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg">
            View Source Code
          </button>
        </div>
      </section>

    </div>
  );
};

export default CaseStudyPage;
