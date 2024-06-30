import React from "react";
import "./CompanyStyles.css";
import about_img from "./../assets/holding-hands.png";

const Company = () => {
  return (
    <div className="company">
      <div className="company-left">
        <img src={about_img} alt="" className="company-img" />
      </div>
      <div className="company-right">
        <h2>Alcoholics Anonymous (AA)</h2>
        <p>
          Alcoholics Anonymous (AA) is an international fellowship established
          in 1935 to help individuals struggling with alcohol addiction achieve
          and maintain sobriety. The program is based on a 12-step approach that
          emphasizes personal accountability, spiritual growth, and mutual
          support. AA meetings, which are held worldwide, provide a safe space
          for members to share their experiences and support each other in their
          recovery journeys.
        </p>
        <p>
          Anonymity and confidentiality are core principles of AA, fostering a
          trusting and non-judgmental environment. The organization is
          non-professional, self-supporting, and open to anyone who wants to
          address their drinking problem. With a wide range of literature and
          resources, as well as the option to attend online meetings, AA offers
          accessible support to those seeking a path to recovery.
        </p>
      </div>
    </div>
  );
};
export default Company;
