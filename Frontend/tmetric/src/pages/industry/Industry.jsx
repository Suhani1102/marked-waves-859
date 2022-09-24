import React from "react";
import { Button, Heading } from "@chakra-ui/react";
import "./industry.css";
import {HiArrowRight} from "react-icons/hi"
const Industry = () => {
  const cardData = [
    {
      img: "https://tmetric.com/media/eaicsaaz/icon-solution-developers-over.svg",
      heading: "Software Developers",
      text: "Measure project progress, set billable rates, send detailed reports and invoice clients.",
    },
    {
      img: "https://tmetric.com/media/ljhg1qum/icon-solution-marketing-over.svg",
      heading: "Marketing Agencies",
      text: "Free yourself from issues of remote teams/freelancers management, complete any project in time and get paid.",
    },
    {
      img: "https://tmetric.com/media/0oaafmp1/icon-solution-designers-over.svg",
      heading: "Designers",
      text: "Concentrate on making great designs and leave time management issues to TMetric.",
    },
    {
      img: "https://tmetric.com/media/pknjjmsf/icon-solution-freelancers-over.svg",
      heading: "Freelancers",
      text: "Eliminate guesswork, gain client trust and discover how profitable your freelance projects are.",
    },
    {
      img: "https://tmetric.com/media/opepw0xc/icon-solution-support-over.svg",
      heading: "Customer Support",
      text: "Track time allocated by engineers to their support tickets, categorize time spent on various support activities.",
    },
    {
      img: "https://tmetric.com/media/jnsnxtl4/icon-solution-consultants-over.svg",
      heading: "Consultants",
      text: "Automate tracking time for consulting services and generate invoices for clients.",
    },
    {
      img: "https://tmetric.com/media/wjiiufje/icon-solution-lawyers-over.svg",
      heading: "Lawyers",
      text: "Spend less time on administrative tasks and more time with a client.",
    },
    {
      img: "https://tmetric.com/media/nm2lh2ns/icon-solution-employees-over.svg",
      heading: "Employees",
      text: "Monitor employees productivity level and generate transparent report about teamwork.",
    },
    {
      img: "https://tmetric.com/media/q3tkyixi/icon-solution-personal-over.svg",
      heading: "Personal",
      text: "Measure your personal productivity without an effort.",
    },
    {
      img: "https://tmetric.com/media/c4up525j/icon-solution-contractors-over.svg",
      heading: "Contractors",
      text: "Create projects, setup billable rates, and budgets, track work time, generate reports, and prepare printable docs for your clients with a click.",
    }
  ];

  return (
    <div>
      <div className="indus-top">
        <div className="indus-top-head">
          <Heading fontSize='3.4rem'>
            Time tracking solution for any business specifics
          </Heading>
          <Heading fontSize='1.3rem' marginTop="12">
            TMetric is developed to help any business to achieve better results.
          </Heading>
        </div>
      </div>
      <div className="indus-mid">
        {cardData.map((el) => (
          <div className="card">
            <img src={el.img} alt="" />
            <div className="card-body">
              <Heading fontSize={"1.5rem"} marginBottom='5'>{el.heading}</Heading>
              <p>{el.text}</p>
              <div>
              <HiArrowRight className="card-icon"/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="indus-bottom">
           <div className="indus-review">
            <div>
            <Heading>Read Hundreds of Reviews</Heading>
            <img src="https://tmetric.com/media/rt1k0zjc/img-rating-4-5.svg" alt="" />
            <Heading>4.5 Customer Rating</Heading>
            <Heading color="#3070f0">242 Reviews</Heading>
            </div>
           </div>
           <div className="indus-company">
            <p>Used and trusted by 3000+ businesses in the world</p>
            <div className="company-logos">
              {/* Reviewed for: Use loops and URLs from constant file*/}
                <img src="https://tmetric.com/media/wdgiiy51/logo-business-glide.svg" alt="" />
                <img src="https://tmetric.com/media/uzplg3xo/logo-business-microscope-it.svg" alt="" />
                <img src="https://tmetric.com/media/wtvdfb00/logo-business-chc-advocacia.svg" alt="" />
                <img src="https://tmetric.com/media/lhxfyeio/logo-business-makedit.svg" alt="" />
                <img src="https://tmetric.com/media/xl3pvyku/logo-business-viator-group.svg" alt="" />
                <img src="https://tmetric.com/media/0p3bzx4v/logo-business-seadev.svg" alt="" />
                <img src="https://tmetric.com/media/0jqiqjfm/logo-business-afzelius.svg" alt="" />
                <img src="https://tmetric.com/media/3jslxcgk/logo-business-representa.svg" alt="" />
            </div>
           </div>
           <div className="indus-trial">
            <Heading color={"white"}>Give TMetric a try today!</Heading>
            <Button>Start Free Trial</Button>
           </div>
      </div>
    </div>
  );
};

export default Industry;
