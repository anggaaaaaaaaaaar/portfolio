# Anggar Pujianto

Software developer in Jakarta. React on the frontend, Java Spring Boot on the backend, mostly on wealth management and payment systems.

**Website:** [anggaaaaaaaaaaar.github.io/portfolio](https://anggaaaaaaaaaaar.github.io/portfolio/)  
**CV (PDF):** [Anggar-Pujianto-CV.pdf](https://anggaaaaaaaaaaar.github.io/portfolio/assets/Anggar-Pujianto-CV.pdf)  
**Email:** [anggarpujianto3@gmail.com](mailto:anggarpujianto3@gmail.com)  
**LinkedIn:** [anggar-pujianto-511569275](https://www.linkedin.com/in/anggar-pujianto-511569275)

## About

I build web apps end to end. Day to day that means building features and fixing bugs across the stack, deploying to servers, and reading logs to keep things running. I have 6 years of experience, most of it in financial services, including two years as a QA tester.

## Experience

### Avantrade, wealth management system · PT Indivara Group

Product Specialist (Jul 2024 – present) · Frontend Developer (Apr 2023 – Jan 2024)

An integrated wealth management platform used by financial institutions for investment and asset management.

- Delivered eKYC (electronic Know Your Customer), speeding up user onboarding and reducing manual verification for the operations team.
- Built the payment module with digital wallet integration, designed so new wallet providers plug in with minimal code changes.
- Built the frontend from scratch with React, TypeScript, Redux Toolkit and Tailwind CSS.
- Developed Spring Boot services and REST APIs that connect multiple internal systems.
- Set up CI/CD with Jenkins and GitLab CI, and wrote scripts to automate data migration and database backup and restore for testing.
- Wrote technical specification documents (TSD) and worked with business analysts, QA, backend and UI/UX teams.

**Stack:** React, TypeScript, Redux Toolkit, Tailwind CSS, Spring Boot, Oracle Database, Jenkins, GitLab CI

### Internal investment tool · Bahana Sekuritas

Frontend Developer, part-time via Sagara Technology (Dec 2022 – Aug 2023)

- Built the interface from scratch for a tool that tracks investments and projects profit and loss.
- Integrated backend APIs and worked with the project manager and QA team.

**Stack:** React, Redux Toolkit, Ant Design

### Online cake shop · Agrinesia Raya

Frontend Developer, part-time via Sagara Technology (Feb 2022 – Aug 2022)

- Built a store that finds the nearest cake shop and hands orders to a delivery service.
- Used Next.js server-side rendering and static generation for performance and SEO.

**Stack:** Next.js, Redux Toolkit

### PPOB webview · RUMA (Mapan)

Frontend Developer, part-time via Sagara Technology (Sep 2021 – Jan 2022)

- Built two apps from scratch: the customer webview for bill payments and top-ups, and the admin dashboard.
- Handled Android native permissions and integrated AppsFlyer.
- Wrote technical documentation for developer onboarding.

**Stack:** React, Redux, AppsFlyer

### PasarID · Bank Rakyat Indonesia

Frontend Developer, part-time via Sagara Technology (Oct 2020 – May 2021)

- Built a site where people order from traditional markets and get it delivered by courier.
- Integrated Google Maps for market locations and delivery tracking, then revamped the UI and added features.

**Stack:** React, Google Maps API

### Software QA Tester · PT Enigma Cipta Humanika

Placed at PT Mekar Investama Sampoerna (Feb 2021 – Feb 2023)

- Wrote test plans, test cases and test scripts, and tracked defects through to resolution with developers.

## Skills

- **Frontend:** React, Next.js, TypeScript, Redux Toolkit, Tailwind CSS, Ant Design
- **Backend:** Java, Spring Boot, REST API, Go, Oracle Database
- **DevOps:** Docker, Jenkins, GitLab CI/CD

## Education

Bachelor of Information Systems, Universitas AMIKOM Yogyakarta (2015 – 2019), GPA 3.49/4.00

## About this repo

The website is plain HTML and CSS served by GitHub Pages, with no build step.

- `index.html` and `assets/style.css`: the website
- `cv.html`: source for the CV PDF
- `scripts/render.js`: regenerates `assets/Anggar-Pujianto-CV.pdf` and the link preview image `assets/og.png`. Run `node scripts/render.js` after editing `cv.html` (needs Playwright).
