import { Link, Navigate, Route, Routes } from "react-router-dom";
import type { ReactNode } from "react";

function Menu() {
  return (
    <nav className="menu">
      <Link to="/stuff">stuff</Link>
      <Link to="/about">about</Link>
      <Link to="/games">games</Link>
      <Link to="/projects">projects</Link>
    </nav>
  );
}

function HomePage() {
  return (
    <div className="landing">
      <div className="landing-inner">
        <h1 className="name">nnamdi</h1>
        <Menu />
      </div>
    </div>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <section className="page-wrap">
      <h2>{title}</h2>
      <p>Page is being updated.</p>
    </section>
  );
}

function AboutPage() {
  return (
    <section id="about" className="page-wrap">
      <div className="about-content">
        <div className="timeline alt" />
        <small className="section-title alt">About/&gt;</small>
        <div className="about-code-wrap">
          <div className="code-wrp">
            <CodeLine line="01" content={<><span className="method">class</span><span className="propname"> Nnamdi Echem</span> {' {'}</>} />
            <CodeLine line="02" content={<><span className="dot">..</span><span className="comment">// This is a comment!</span></>} />
            <CodeLine line="03" content={<><span className="dot">..</span><span className="comment">// Remember to add background-color later.</span></>} />
            <CodeLine line="04" content={<><span className="dot">..</span><span className="method">constructor</span>()</>} />
            <CodeLine line="05" content={<><span className="dot">....</span><span className="scope">this</span>.<span className="prop2">name</span><span className="scope"> = </span><span className="string">'Nnamdi Echem'</span>;</>} />
            <CodeLine line="06" content={<><span className="dot">....</span><span className="scope">this</span>.<span className="prop2">dateOfBirth</span><span className="scope"> = </span><span className="number">02101987</span>;</>} />
            <CodeLine line="07" content={<><span className="dot">....</span><span className="scope">this</span>.<span className="prop2">email</span><span className="scope"> = </span><span className="string">'nnamdi.b@gmail.com'</span>;</>} />
            <CodeLine line="08" content={<><span className="dot">..</span>{'}'}</>} />
            <CodeLine line="09" content={<><span className="dot">..</span><span className="propname">workExperience</span>() {'{'}</>} />
            <CodeLine line="10" content={<><span className="dot">....</span><span className="method">return</span> [</>} />
            <CodeLine line="11" content={<><span className="dot">......</span>{'{'}<span className="string">'2023-now' </span>: <span className="string">'Front-end Developer at Subtrackr'</span>{'}'};</>} />
            <CodeLine line="12" content={<><span className="dot">......</span>{'{'}<span className="string">'2018-2018' </span>: <span className="string">'Operations Consultant at ISS'</span>{'}'};</>} />
            <CodeLine line="13" content={<><span className="dot">......</span>{'{'}<span className="string">'2016-2016' </span>: <span className="string">'Interactions Designer at Nettmaker AS'</span>{'}'};</>} />
            <CodeLine line="14" content={<><span className="dot">......</span>{'{'}<span className="string">'2010-2011' </span>: <span className="string">'IT-support at Riverside Youth Club'</span>{'}'};</>} />
            <CodeLine line="15" content={<><span className="dot">....</span>]</>} />
            <CodeLine line="16" content={<><span className="dot">..</span>{'}'}</>} />
            <CodeLine line="17" content={<><span className="dot">..</span><span className="propname">education</span>() {'{'}</>} />
            <CodeLine line="18" content={<><span className="dot">....</span><span className="method">return</span> [</>} />
            <CodeLine line="19" content={<><span className="dot">......</span>{'{'}<span className="string">'2011-2041' </span>: <span className="string">"Bachelor's Degree in Information Technology (IT) - Westerdals Oslo ACT"</span>{'}'};</>} />
            <CodeLine line="20" content={<><span className="dot">......</span>{'{'}<span className="string">'2006-2007' </span>: <span className="string">'General Subjects - Elvebakken VGS'</span>{'}'};</>} />
            <CodeLine line="21" content={<><span className="dot">......</span>{'{'}<span className="string">'2005-2006' </span>: <span className="string">'ICT Operations Subject - Sogn VGS'</span>{'}'};</>} />
            <CodeLine line="22" content={<><span className="dot">......</span>{'{'}<span className="string">'2004-2005' </span>: <span className="string">'General, Economic and Administrative Subjects'</span>{'}'};</>} />
            <CodeLine line="23" content={<><span className="dot">....</span>]</>} />
            <CodeLine line="24" content={<><span className="dot">..</span>{'}'}</>} />
            <CodeLine line="25" content={<><span className="dot">..</span><span className="propname">skills</span>() {'{'}</>} />
            <CodeLine line="26" content={<><span className="dot">....</span><span className="method">return</span> [<span className="string">'HTML/CSS/JS', 'React', 'NextJS', 'Angular', 'TypeScript', 'Bootstrap/Tailwind/MUI', 'npm', 'SSR', 'SPA', 'GIT', 'Firebase', 'W3C/ARIA', 'MySQL/MongoDB', 'Wordpress', 'Photoshop', 'After Effects', 'UX/UI', 'C#'</span><span className="cursor" />];</>} />
            <CodeLine line="27" content={<><span className="dot">..</span>{'}'}</>} />
            <CodeLine line="28" content={<>{'}'}</>} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeLine({ line, content }: { line: string; content: ReactNode }) {
  return (
    <div data-line-nr={line} className="code-l">
      {content}
    </div>
  );
}

function NotFoundPage() {
  return (
    <section className="page-wrap">
      <h1>404 Error</h1>
      <h2>Page Not Found</h2>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<PlaceholderPage title="projects" />} />
        <Route path="/stuff" element={<PlaceholderPage title="stuff" />} />
        <Route path="/games" element={<PlaceholderPage title="games" />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}
