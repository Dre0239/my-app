import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            {" "}
            Hello, my name is Andr L. Mays. I am currently living in Riverside,
            CA.
            <b>My Background:</b> As a 52-year-Black American male, it is a
            testament to the adage that it is never too late to pursue one's
            passions. Born and raised in a close-knit community, I have always
            possessed an innate curiosity and love for technology. However, life
            took him on a different path, and I worked in a few utterly
            unrelated fields for most of his adult life.
            <b>My Career Transition:</b>
            Dissatisfied with the monotony of my previous job and yearning for a
            change, I boldly decided to embark on a new career path. Determined
            to pursue my long-held dream of becoming a developer, I enrolled in
            the UCR Full Stack Bootcamp program.
            <b>My Boot Camp Experience:</b> The boot camp was intense and
            transformative. Over several months, I immersed myself in coding,
            learning various programming languages, and honing my
            problem-solving skills. Despite the challenges of learning a new
            discipline, my perseverance and dedication helped me excel in the
            program.
            <b>My Professional Growth:</b> Following the boot camp, I will
            continue to expand his knowledge and skills by engaging in personal
            projects and participating in coding communities. I will become
            well-versed in web development, mastering front-end and back-end
            technologies. My commitment to continuous learning and growth
            allowed me to stay up-to-date with the latest industry trends and
            best practices.
            <b>My Career Success:</b> My hard work paid off when I landed my
            first job as a PC technician. My diverse background, coupled with my
            strong technical skills and problem-solving abilities, proved to be
            valuable assets in the workplace. Through my contributions, I
            significantly impacted projects I worked on, earning the respect and
            admiration of my colleagues.
            <b>My Community Engagement:</b> Beyond my professional achievements,
            I have actively advocated diversity and inclusion in the tech
            industry. I believe in creating opportunities for underrepresented
            communities and one-day mentoring aspiring developers from similar
            backgrounds, providing guidance and support to help them navigate
            their journeys.
            <b>My Interests:</b> When not immersed in coding, I enjoy exploring
            my artistic side through reading about American and World history
            and listening to live jazz. I value spending quality time with my
            loved ones and finding solace in nature, often going on hiking trips
            to unwind and find inspiration. In conclusion, I exemplify the power
            of determination and the willingness to pursue one's passions at any
            age. My journey from a career transition through UCR boot camp to
            becoming a successful developer will inspire others who may be
            considering a similar path. My dedication, professional growth, and
            commitment to positively impacting the world showcase my resilience
            and the vast potential within all of us to forge new paths and
            achieve our goals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
