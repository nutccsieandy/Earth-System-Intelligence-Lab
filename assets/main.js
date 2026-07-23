const translations = {
  zh: {
    navOverview:"專案概覽",navFeatures:"核心功能",navArchitecture:"系統架構",navTeam:"團隊",
    heroEyebrow:"2026 總統盃黑客松國際組提案",heroTitle1:"用 AI 強化",heroTitle2:"災害韌性決策",
    heroDescription:"整合政府開放資料、GIS、機器學習、RAG 與大型語言模型，將分散的災害資訊轉化為即時風險評估、事件摘要與可執行的應變建議。",
    watchDemo:"觀看操作影片",watchExplanation:"觀看解說影片",viewGithub:"查看 GitHub",liveMonitor:"即時韌性監控",highRisk:"高風險",mediumRisk:"中風險",
    realTimeRisk:"即時災害風險",dataUpdated:"資料持續更新中",rainfall:"24 小時累積雨量",riskIndex:"綜合風險指數",
    copilotText:"東部山區短時強降雨持續，建議提高土石流警戒並預先部署避難資源。",openDatasets:"政府開放資料源",monitoring:"即時監測",
    dataSourcesLabel:"整合臺灣權威政府開放資料",overviewTag:"專案概覽",overviewTitle:"從資料碎片到可執行的災害決策",
    overviewText:"FlowResilienceAI 建立政府、救災單位與民眾之間的智慧資訊橋梁，降低資訊落差並縮短應變時間。",
    problemTitle:"現行挑戰",problemText:"災害資訊分散於多個機關，格式不一、更新頻率不同，難以在關鍵時刻形成完整態勢判斷。",
    solutionTitle:"我們的方案",solutionText:"透過資料整合、智慧分析與生成式 AI，提供風險分級、事件摘要、GIS 視覺化和個人化應變建議。",
    impactTitle:"預期影響",impactText:"協助決策者加速資源配置與跨機關協作，同時讓民眾獲得清楚、即時且可採取行動的安全資訊。",
    featuresTag:"核心能力",featuresTitle:"一個平台，串起完整災害應變流程",featuresText:"從即時監控、AI 分析到公眾溝通，兼顧政府管理端與民眾使用端。",
    feature1Title:"即時資料整合",feature1Text:"彙整氣象、雨量、水文、地質、土石流與災防警報等異質資料。",
    feature2Title:"互動式 GIS",feature2Text:"以地圖呈現高風險區域、事件分布與環境參數，快速掌握空間態勢。",
    feature3Title:"AI 風險評估",feature3Text:"運用機器學習評估洪水、山崩與極端降雨風險，產生可解釋的分級結果。",
    feature4Title:"AI Copilot",feature4Text:"透過 RAG 與 LLM 生成事件摘要、風險說明與具體應變建議。",
    feature5Title:"政府管理後台",feature5Text:"支援事件管理、資源配置、跨機關協調與決策紀錄。",
    feature6Title:"民眾 PWA",feature6Text:"提供行動裝置友善的警示通知、安全指引與個人化避難資訊。",
    architectureTag:"系統架構",architectureTitle:"可擴充、可部署、可跨區域移植",
    architectureText:"模組化架構讓不同資料來源、AI 模型與服務能彈性替換，並透過 Docker 快速部署至不同地區與情境。",
    architectureItem1:"開放資料與即時環境資料串接",architectureItem2:"機器學習、RAG 與 LLM 分析層",architectureItem3:"GIS、管理後台與 PWA 應用層",architectureItem4:"Docker 容器化與模組化部署",
    archData:"資料層",archAI:"AI 分析層",archService:"服務層",archApp:"應用層",
    openTitle:"以開放資料驅動公共價值",openText:"專案以負責任的資料治理方式，促進跨機關協作、氣候調適與永續城市發展。",
    sdg11:"永續城市與社區",sdg13:"氣候行動",sdg15:"陸域生態",sdg17:"全球夥伴關係",
    teamTag:"我們的團隊",teamTitle:"跨域、跨國的韌性創新團隊",teamText:"結合資訊系統、人工智慧、災害韌性、永續與國際合作能力。",
    roleLead:"團隊負責人／系統整合",roleTeam:"專案團隊成員",roleInternational:"國際合作",roleAdvisor:"永續與韌性顧問",
    ctaTag:"探索專案",ctaTitle:"看見 AI 如何讓災害資訊真正成為行動",ctaText:"觀看系統展示影片，或前往 GitHub 瞭解技術架構與專案內容。",
    footerText:"AI 驅動的山崩與洪水災害韌性平台。",contact:"聯絡我們"
  },
  en: {
    navOverview:"Overview",navFeatures:"Capabilities",navArchitecture:"Architecture",navTeam:"Team",
    heroEyebrow:"2026 Presidential Hackathon International Track",heroTitle1:"AI-Powered",heroTitle2:"Disaster Resilience",
    heroDescription:"Integrating open government data, GIS, machine learning, RAG, and large language models to transform fragmented disaster information into real-time risk assessments, event summaries, and actionable response recommendations.",
    watchDemo:"Watch Operation Video",watchExplanation:"Watch Project Overview",viewGithub:"View GitHub",liveMonitor:"Live Resilience Monitor",highRisk:"High Risk",mediumRisk:"Medium Risk",
    realTimeRisk:"Real-Time Disaster Risk",dataUpdated:"Data continuously updated",rainfall:"24-Hour Rainfall",riskIndex:"Composite Risk Index",
    copilotText:"Short-duration heavy rainfall continues in eastern mountain areas. Raise debris-flow alerts and pre-position evacuation resources.",openDatasets:"Open Data Sources",monitoring:"Monitoring",
    dataSourcesLabel:"Powered by authoritative Taiwan open data",overviewTag:"PROJECT OVERVIEW",overviewTitle:"From Fragmented Data to Actionable Decisions",
    overviewText:"FlowResilienceAI builds an intelligent information bridge among governments, emergency responders, and the public—reducing information gaps and shortening response time.",
    problemTitle:"The Challenge",problemText:"Disaster information is scattered across agencies, formats, and update cycles, making it difficult to build a complete operational picture during critical moments.",
    solutionTitle:"Our Solution",solutionText:"Through data integration, intelligent analytics, and generative AI, the platform delivers risk classification, event summaries, GIS visualization, and personalized response guidance.",
    impactTitle:"Expected Impact",impactText:"The platform helps decision-makers accelerate resource allocation and interagency coordination while giving citizens clear, timely, and actionable safety information.",
    featuresTag:"CORE CAPABILITIES",featuresTitle:"One Platform for the Full Disaster Response Workflow",featuresText:"From real-time monitoring and AI analysis to public communication, the platform serves both government users and citizens.",
    feature1Title:"Real-Time Data Integration",feature1Text:"Aggregates weather, rainfall, hydrology, geology, debris-flow, and emergency alert data.",
    feature2Title:"Interactive GIS",feature2Text:"Visualizes high-risk zones, event distribution, and environmental indicators for rapid situational awareness.",
    feature3Title:"AI Risk Assessment",feature3Text:"Uses machine learning to assess flood, landslide, and extreme rainfall risk with explainable classifications.",
    feature4Title:"AI Copilot",feature4Text:"Uses RAG and LLMs to generate event summaries, risk explanations, and actionable emergency recommendations.",
    feature5Title:"Government Dashboard",feature5Text:"Supports event management, resource allocation, interagency coordination, and decision records.",
    feature6Title:"Citizen PWA",feature6Text:"Provides mobile-friendly alerts, safety guidance, and personalized evacuation information.",
    architectureTag:"SYSTEM ARCHITECTURE",architectureTitle:"Scalable, Deployable, and Region-Adaptive",
    architectureText:"A modular architecture allows data sources, AI models, and services to be flexibly replaced, while Docker enables rapid deployment across regions and disaster scenarios.",
    architectureItem1:"Open data and real-time environmental data integration",architectureItem2:"Machine learning, RAG, and LLM analytics layer",architectureItem3:"GIS, government dashboard, and PWA application layer",architectureItem4:"Containerized and modular deployment with Docker",
    archData:"Data Layer",archAI:"AI Analytics",archService:"Service Layer",archApp:"Application Layer",
    openTitle:"Creating Public Value with Open Data",openText:"The project promotes interagency collaboration, climate adaptation, and sustainable urban development through responsible data governance.",
    sdg11:"Sustainable Cities",sdg13:"Climate Action",sdg15:"Life on Land",sdg17:"Partnerships",
    teamTag:"OUR TEAM",teamTitle:"A Cross-Disciplinary, International Resilience Team",teamText:"Combining information systems, artificial intelligence, disaster resilience, sustainability, and international collaboration.",
    roleLead:"Team Lead / System Integration",roleTeam:"Project Team Member",roleInternational:"International Collaboration",roleAdvisor:"Sustainability & Resilience Advisor",
    ctaTag:"EXPLORE THE PROJECT",ctaTitle:"See How AI Turns Disaster Information into Action",ctaText:"Watch the system demonstration or visit GitHub to explore the technical architecture and project details.",
    footerText:"An AI-Powered Landslide and Flood Resilience Platform.",contact:"Contact"
  }
};

let currentLang = "zh";
const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

function applyLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });
  languageToggle.textContent = lang === "zh" ? "EN" : "中";
}

languageToggle.addEventListener("click", () => applyLanguage(currentLang === "zh" ? "en" : "zh"));
menuToggle.addEventListener("click", () => mobileNav.classList.toggle("open"));
mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileNav.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.animate(
        [{opacity:0, transform:"translateY(24px)"},{opacity:1, transform:"translateY(0)"}],
        {duration:650,easing:"cubic-bezier(.2,.7,.2,1)",fill:"forwards"}
      );
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll(".feature-card,.team-member,.overview-grid article,.sdg-card,.architecture-diagram").forEach(el => {
  el.style.opacity = "0";
  observer.observe(el);
});
