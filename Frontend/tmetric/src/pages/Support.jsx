import React from "react";
import style from "../Styles/Support.module.css";
import { IoMdSearch } from "react-icons/io";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

// Reviewed for: fw16_078 and fw15_451 - Divide component in smaller components
const Support = () => {
  return (
    <div>
      {/* header part */}
      <div className={style.mainsp}>
        <div className={style.navsp}>
          <div className={style.headingsp}>
            <h1 className={style.navsph1}>How can we help you?</h1>
          </div>

          <div className={style.searchsp}>
            <div>
              {" "}
              <IoMdSearch className={style.searchbtn} />
            </div>
            <div>
              {" "}
              <input
                className={style.searchinput}
                type="text"
                placeholder="Enter a question, keyword,or topic to find answer "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick start videos part */}

      <div className={style.videosp}>
        <div>
          <h2 className={style.videosph2}>Quick Start Videos</h2>
        </div>
{/* Reviewed for: fw16_078 and fw15_451: use loops to render list, pass URLs from constant file */}
        <ul className={style.videospvideo}>
          <li className={style.videospvideo1}>
            <img
              src="https://i.ytimg.com/vi/jT3467I-c2M/mqdefault.jpg"
              alt=""
            />
          </li>
          <li className={style.videospvideo1}>
            <img
              src="https://i.ytimg.com/vi/jT3467I-c2M/mqdefault.jpg"
              alt=""
            />
          </li>
          <li className={style.videospvideo1}>
            <img
              src="https://i.ytimg.com/vi/jT3467I-c2M/mqdefault.jpg"
              alt=""
            />
          </li>
          <li className={style.videospvideo1}>
            <img
              src="https://i.ytimg.com/vi/jT3467I-c2M/mqdefault.jpg"
              alt=""
            />
          </li>
        </ul>
        <div className={style.videospcnt}>
          <a
            href="https://www.youtube.com/playlist?list=PL74QEPdFcvLbliXZZ04Zm8UlGl_G6tmvL"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Watch Other Tutorials
            <span>
              <BsFillArrowUpRightSquareFill />
            </span>
          </a>
        </div>
      </div>

      {/* user guide videos part*/}

      <div className={style.userguidemain}>
        <div>
          <h2 className={style.videosph2}>User Guide</h2>
        </div>
        <div className={style.userguide}>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/fqmd4fox/icon-guide-getting-started.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Getting Started</h2>
              <p className={style.userguide1p}>
                This section explains what a new <br />
                TMetric user should know and do to <br />
                quickly start tracking their work time.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/pgxe2341/icon-guide-time-tracking.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Time Tracking</h2>
              <p className={style.userguide1p}>
                Learn how to manage and lock time, <br />
                link tasks to time entries, set a required <br />
                work schedule and permissions.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img src="https://tmetric.com/media/nhhdfvxt/tasks.svg" alt="" />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Tasks</h2>
              <p className={style.userguide1p}>
                Learn about task management - how to <br />
                create and edit tasks, customize a task <br />
                list, and share tasks with others.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/ajnblb01/icon-guide-projects.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Projects</h2>
              <p className={style.userguide1p}>
                This section includes information about <br />
                creating different types of projects, <br />
                setting up budgets, and invoicing
                <br />
                clients for work days.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/jxsewpku/icon-guide-reports.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Reports</h2>
              <p className={style.userguide1p}>
                General information about using <br />
                reports in TMetric to review and <br />
                analyze your time tracking data.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/42if5ekb/icon-guide-billing-invoicing.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Invoices</h2>
              <p className={style.userguide1p}>
                Make invoicing painless, just go through <br />
                a learning process described in this <br />
                section and get paid on time.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/5uzjal2u/icon-guide-time-off.svg"
                alt=""
              />
            </div>
{/* Reviewed for: fw16_078 and fw15_451: these heading can be rendered using one component, you need to pass dynamic data to it */}
            <div>
              <h2 className={style.userguide1h2}>Time Off</h2>
              <p className={style.userguide1p}>
                Learn how to simplify employee paid <br />
                time off and vacation tracking: set up <br />
                time off policies and properly <br />
                compensate days
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/0ssdlvqw/icon-guide-productivity-tracking.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Productivity Tracking</h2>
              <p className={style.userguide1p}>
                Here you will find everything about <br />
                productivity tracking - what activity <br />
                level is and where to get user activity
                <br />
                details.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/sa1fife4/icon-guide-team-management.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Team Management</h2>
              <p className={style.userguide1p}>
                Learn about team management - how <br />
                to add people to your workspace, create <br />a team, and
                monitor and payroll its work.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/lkpdnu2f/icon-guide-workspace-management.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Workspace Management</h2>
              <p className={style.userguide1p}>
                Configure your workspace, manage <br />
                members, learn user roles and track <br />
                your time as a team in TMetric.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/rfij2vrr/icon-guide-apps.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Apps</h2>
              <p className={style.userguide1p}>
                This topic describes a broad range of <br />
                TMetric apps: how to install and use <br />
                them and the features they provide.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/mpdjzi1w/icon-guide-integrations.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Intergation</h2>
              <p className={style.userguide1p}>
                Integrate TMetric with various time and <br />
                project management systems to track <br />
                time, create reports, and monitor your <br />
                team.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/iuyisza0/icon-guide-user-account.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>User Account Management</h2>
              <p className={style.userguide1p}>
                Here you will find all the necessary <br />
                information about a user account in
                <br /> TMetric and how to manage it with
                <br /> ease.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
          <div className={style.userguide1}>
            <div>
              <img
                src="https://tmetric.com/media/srnmkwja/icon-guide-subscription-billing.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className={style.userguide1h2}>Subscription & Billing</h2>
              <p className={style.userguide1p}>
                This section provides information about <br />
                the subscription and billing process in <br />
                TMetric to understand how it all works.
              </p>
              <hr className={style.hr} />
            </div>
          </div>
        </div>
      </div>
      {/* question ans part */}

      <div className={style.qmain}>
        <div>
          <h2 className={style.videosph2}>Frequently asked questions</h2>
        </div>

        <div className={style.qmain1}>
          <div className={style.qmain1div}>
            <div className={style.qmain1divli}>
              <h3 className={style.qmainh3}>Subscription & Billing</h3>
              <ul>
                <li>• Do you have discounts for non-profits?</li>
                <li>• Do you have volume discounts?</li>
                <li>
                  • Do I have to pay for myself even if I only monitor my
                  employees?
                </li>
                <li>• Why 'Proceed to Checkout' button doesn't work?</li>
                <li>
                  • I've bought a subscription, why my workspace wasn't
                  upgraded?
                </li>
                <li>• How Can I Change my Payment Details?</li>
                <li>• How Can I Get My Invoices for Subscription?</li>
                <li>
                  • Can we retire a former team member license, but keep his
                  data for historical purposes?
                </li>
              </ul>
              <hr />
            </div>

            <div className={style.qmain1divli}>
              <h3 className={style.qmainh3}>Time Tracking</h3>
              <ul>
                <li>• Can I add custom notes for a time entry?</li>
                <li>• Can I have two active timers at the same time?</li>
                <li>
                  • Do I need to install a browser extension to use TMetric?
                </li>
                <li>
                  • Why does a report display less time than is actually
                  tracked?
                </li>
                <li>
                  • What should I do with 'Timer is longer than 12 hours' alert?
                </li>
                <li>• What does 'Monthly Balance' mean?</li>
              </ul>
              <hr />
            </div>
          </div>

          <div className={style.qmain1div}>
            <div className={style.qmain1divli}>
              <h3 className={style.qmainh3}>Productivity Tracking</h3>
              <ul>
                <li>• What data is collected in TMetric?</li>
                <li>• How long is activity data stored?</li>
                <li>• How can I delete my activity records?</li>
                <li>• How to turn off activity recording?</li>
                <li>• How to download user full activity?</li>
              </ul>
              <hr />
            </div>

            <div className={style.qmain1divli}>
              <h3 className={style.qmainh3}>Projects</h3>
              <ul>
                <li>
                  • Can I allow creating projects for regular team members?
                </li>
                <li>
                  • How can I assign a client to multiple projects at once?
                </li>
                <li>
                  • Can I create a list of routine tasks for fast tracking?
                </li>
              </ul>
              <hr />
            </div>

            <div className={style.qmain1divli}>
              <h3 className={style.qmainh3}>Team Management</h3>
              <ul>
                <li>
                  • Can I delete a team member and not lose the time tracked on
                  projects?
                </li>
                <li>
                  • How can I add a team member to several projects at once?
                </li>
                <li>• How can I forbid team members to edit time manually?</li>
              </ul>
              <hr />
            </div>
          </div>

          <div className={style.qmain1div}>
            <div className={style.qmain1divli}>
              <h3 className={style.qmainh3}>Time Off</h3>
              <ul>
                <li>
                  • How can I find out how much vacation time I will have in a
                  while?
                </li>
                <li>
                  • Is it possible for my team members to see who and when goes
                  on vacation?
                </li>
                <li>• How to see workdays that an employee missed?</li>
                <li>• How to add a bonus day off for an employee?</li>
              </ul>
              <hr />
            </div>

            <div className={style.qmain1divli}>
              <h3 className={style.qmainh3}>Reporting</h3>
              <ul>
                <li>• How can I see distribution of time between my tasks?</li>
                <li>• How to view all time entries for entire project span?</li>
                <li>
                  • How to view time an employee spent working for each client?
                </li>
                <li>• How to view all time entries for a particular task?</li>
                <li>
                  • I want to get a report for a member that is set to
                  inactive/locked.
                </li>
              </ul>
              <hr />
            </div>

            <div className={style.qmain1divli}>
              <h3 className={style.qmainh3}>Tasks</h3>
              <ul>
                <li>• I am a workspace owner, why I don't see my tasks.</li>
                <li>
                  • How can I see my employee's private tasks that don't belong
                  to any project?
                </li>
              </ul>
              <hr />
            </div>
          </div>
        </div>
      </div>

      {/* contact part */}

      <div className={style.cmain}>
        <div className={style.cmainh1}>
          <h1>There is no topic you interested in?</h1>
        </div>
        <div className={style.cmainh3}>
          <h3>
            If you didn't find what you were looking for, you can make a support
            request or email <br />
            us to support@tmetric.com. We'll be glad to help you personally.
          </h3>
        </div>

        <div className={style.cbtndiv}>
          <button className={style.cbtn}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Support;
