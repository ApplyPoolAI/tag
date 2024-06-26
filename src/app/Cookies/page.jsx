import React from "react";
import "../../style/content.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Privacy() {
  const navArray = [
    {
      label: "Home",
      url: "/",
      target: "",
    },
    {
      label: "Privacy",
      url: "/Privacy",
      target: "_blank",
    },
    {
      label: "Cookies",
      url: "/Cookies",
      target: "_blank",
    },
  ];

  return (
    <section className="">
      <div className="px-5 sm:px-16 2xl:px-16 bg-main">
        <Navbar theme="dark" data={navArray} />
      </div>

      <div className="contentPage content mx-auto max-w-7xl px-5 sm:px-10 py-10 text-main flex flex-col gap-5">
        <h1>Cookie Policy</h1>
        <hr className="my-5" />
        <h2>Last updated 10/11/22</h2>
        <p>
          This Cookies Policy must be read by all Users with consideration and
          agreement in conjunction with The Apply Group {"Ltd's"} other Policies and
          Terms & Conditions, which will provide context and definitions.
        </p>
        <h2>Introduction</h2>
        <p>
          This Cookies Policy applies to The Apply Group {"Ltd's"} digital platforms
          {"'Website(s)'"}, Website(s), as defined in the Company Terms &
          Conditions, connecting existing university students (Mentors/Tutors)
          with potential applicants (Students/Applicants) and their
          representatives (inc. parents, legal guardians, schools) as well as
          potential employers. When we mention “TAG” or refer to, “we, us or
          our” in this Cookies Policy then we are referring to:
        </p>
        <ul>
          <li>
            The Apply Group Ltd.{"('TAG')"} with CRN: 12938105 has its registered
            office at: Suite 209, Mayfair Point, 34 South Molton Street, London
            W1K 5RG, United Kingdom.
          </li>
        </ul>
        <p>In this cookies policy you can read about</p>
        <ul>
          <li>how we use cookies,</li>
          <li>the types of cookies we use,</li>
          <li>for how long they work and for what purposes they are used,</li>
          <li>how to change your cookie settings and opt-out, and</li>
          <li>Who are we and how can you contact Us</li>
        </ul>
        <p>
          When we refer to “You/Your” we mean you as a User or visitor of our
          website.
        </p>
        <p>
          Our use of cookies may include processing of your personal data as a
          part of our Privacy Notice and can be found here Privacy Notice.
        </p>
        <p>
          <b>Consent</b>
        </p>
        <p>
          Where you have consented to our use of cookies through the consent
          banner, apart from necessary cookies, you consent to our use of
          cookies as described under “Types of cookies and how we use them”
          below. You may at any time change or withdraw your cookie consent -
          See the section “How you can change your cookie settings, incl. opting
          out” below.
        </p>
        <p>
          <b>What do I need to know about cookies?</b>
        </p>
        <p>
          There are different types of cookies and they are used for different
          purposes.
        </p>
        <p>
          Below you can read about what a cookie is, the difference between
          first and third party cookies and session cookies vs. persistent
          cookies and what types of cookies we use on our website and why.
        </p>
        <p>
          <b>What is a cookie?</b>
        </p>
        <p>
          A cookie is a small piece of data that a website stores on your device
          when you visit it and which is then read when you later revisit the
          site. The word “cookies” in this policy and the consent also refers to
          other forms of automatic collection of data, e.g. Flash-cookies (Local
          Shared Objects), Web Storage (HTML5), Javascripts or cookies placed by
          other software.
        </p>
        <p>
          A cookie may contain information about the website itself, a unique
          identifier that allows the site to recognise your web browser when you
          return to the website, additional data that serves the purpose of the
          cookie, and the lifespan of the cookie itself.
        </p>
        <p>
          The word “cookies” or “cookie data” also covers information about IP
          and MAC addresses and other information about your device collected by
          said technologies.
        </p>
        <p>
          Cookies are used to enable certain features (e.g. logging in), to
          track site usage (e.g. analytics), to store your user settings (e.g.
          timezone, notification preferences), and to personalise your content
          (e.g. advertising, language).
        </p>
        <p>
          <b>Session cookies vs. persistent cookies</b>
        </p>
        <p>
          Session cookies only last as long as your online session. This means
          that they will disappear from your computer or device when you close
          your browser.
        </p>
        <p>
          They are therefore also sometimes referred to as temporary cookies.
          Typically, session cookies are used to remember what a user put in
          their shopping basket when they are browsing a website.
        </p>
        <p>
          Persistent cookies are different. These cookies are sometimes called
          permanent cookies. They will stay on your computer or device after you
          close your browser. These types of cookies will expire according to
          the time specified in the cookie. You can see the specific duration of
          each persistent cookie below.
        </p>
        <p>
          <b>{"What's"} the difference between first and third party cookies?</b>
        </p>
        <p>
          First party cookies are cookies that are set by the website that you
          are visiting and {"it's"} only this website that can access and read these
          cookies.
        </p>
        <p>
          Third party cookies are set by someone other than the owner of the
          website {"you're"} visiting. As an example, some pages have content from
          other sites like YouTube. YouTube may set their own cookies on your
          browser when you play the video from YouTube. Cookies set by other
          sites and companies (i.e. third parties) can be used to track you on
          other websites that use the same third-party service.
        </p>
        <p>
          We may engage third parties to assist with maintenance, operation,
          creation or functionality of our website, e.g. analytics providers and
          content partners. We grant these third {"partie's"} access to selected
          information to perform specific tasks on our behalf.
        </p>
        <p>
          We are, as a general rule, joint controller with providers of
          third-party cookies for the collection of personal data via such
          cookies and the disclosure to the provider. The provider of
          third-party cookies is the data controller for the processing taking
          place after receiving the personal data from us. You can read more
          about the extent of our joint controllership with providers of
          third-party cookies in our Privacy Notice.
        </p>
        <p>
          We recommend reading the {"provider's"} privacy policy which can be found
          through links in the tables below, where you can also see which
          cookies on our website are first party cookies and third-party
          cookies.
        </p>
        <p>
          <b>Types of cookies and how we use them:</b>
        </p>
        <p>
          Below is a list of the types of cookies which we may collect from
          users that visit our Company Websites. Our Websites are scanned on a
          regular basis for monitor which cookies and data we are collecting and
          duration they are stored. These can be viewed via our cookie tool
          (Customise {">"} Customise Your Cookie Consent Preferences) under each
          of the headings below, where Your consent can also be adjusted by You
          at anytime, including withdrawal of any consent You may have
          previously given.
        </p>
        <ul>
          <ul>
            <li>Necessary</li>
          </ul>
        </ul>
        <p>
          Necessary cookies are required for the basic functionality of our
          website to work. We use necessary cookies to make it possible for you
          to only have to enter your username and password once during a visits
          to our our company website(s).
        </p>
        <p>
          We also use necessary cookies to help with ensuring that you are given
          the option to accept or reject cookies, block non-necessary cookies
          from working until you give consent, and remember your cookie settings
          and choices. The cookies also help keep track of, if, and when, you
          gave consent to analytical cookies, T&Cs and email marketing.
          Necessary cookies are also used for any payment processing.
        </p>
        <p>
          {"It's"} not necessary to accept nor possible to reject the use of
          necessary cookies as they are core for the functionality of our
          website.
        </p>
        <ul>
          <ul>
            <li>Functional</li>
          </ul>
        </ul>
        <p>
          Functional cookies help perform certain functionalities like sharing
          the content of the website on social media platforms, collecting
          feedback, and other third-party features.
        </p>
        <ul>
          <ul>
            <li>Analytical</li>
          </ul>
        </ul>
        <p>
          Analytical cookies gather statistics. We use this information to make
          our website even better. The information collected via the analytical
          cookies track how you use our website during your visit. It helps us
          understand visitor usage patterns, identify, and diagnose problems or
          errors you may encounter, and make better strategic decisions in
          improving the website experience.
        </p>
        <p>
          We will only set analytical cookies on Your device if you give Us Your
          consent via the cookie consent tool you will see and be promted to
          respond to on visiting our Website(s).
        </p>
        <ul>
          <ul>
            <li>Performance</li>
          </ul>
        </ul>
        <p>
          Performance cookies are used to understand and analyise the key
          performance indexes of the website which helps in delivering a better
          user experience for the visitors.
        </p>
        <ul>
          <ul>
            <li>Advertisement</li>
          </ul>
        </ul>
        <p>
          Advertisement cookies are used to provide visitors with customized
          advertisements based on the pages you visited previously and to
          analyze the effectiveness of the ad campaigns.
        </p>
        <p>
          <b>Cookie Settings</b>
        </p>
        <p>
          You can change your cookie preferences any time by clicking on the
          cookie icon shown on the left hand corner of the page of our Websites.
          This will let you revisit the cookie consent banner and change your
          preferences or withdraw your consent right away.
        </p>
        <p>
          In addition to this, different browsers provide different methods to
          block and delete cookies used by websites. You can change the settings
          of your browser to block/delete the cookies. Listed below are the
          links to the support documents on how to manage and delete cookies
          from the major web browsers:
        </p>
        <p>
          Chrome :{" "}
          <a href="https://support.google.com/accounts/answer/32050">
            https://support.google.com/accounts/answer/32050
          </a>
        </p>
        <p>
          Safari:{" "}
          <a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac">
            https://support.apple.com/en-in/guide/safari/sfri11471/mac
          </a>
        </p>
        <p>
          Firefox:{" "}
          <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US">
            https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US
          </a>
        </p>
        <p>
          Internet Explorer:{" "}
          <a href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc">
            https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc
          </a>
        </p>
        <p>
          If you are using any other web browser, please visit your {"browser's"}
          official support documents.
        </p>
        <p>
          <b>Pixels</b>
        </p>
        <p>
          Cookies are not the only way to recognise or track visitors to a
          website. We may use other, similar technologies from time to time,
          like web beacons (sometimes called “tracking pixels” or “clear gifs”).
          These are tiny graphics files that contain a unique identifier that
          enable us to recognise when someone has visited our website
        </p>
        <p>
          [or opened an email that we have sent them]. This allows us, for
          example, [to monitor the traffic patterns of users from one page
          within our website to another, to understand whether you have come to
          our website from an online advertisement displayed on a third-party
          website, to improve site performance, and to measure the success of
          email marketing campaigns].
        </p>
        <p>How you can change your cookie settings, incl. opting out</p>
        <p>
          As part of our cookie solution, we always ask for your consent to
          cookies, except for necessary cookies, before placing cookies on your
          device.
        </p>
        <p>
          We also always give you the option to change your consent. If you at
          one point gave consent to non-necessary cookies on our website, you
          can always change which cookies you will give consent to. Just look
          for the shield or the cookie settings link on our website. If you
          click the shield or the cookie settings link, your cookie settings
          will appear, allowing you to always change your settings and reject
          cookies.
        </p>
        <p>
          {"It's"} also possible to instruct your browser to refuse cookies from our
          website. Most browsers are configured to accept cookies by default,
          but you can update these settings to either refuse cookies altogether,
          or to notify you when a website is trying to set or update a cookie.
          If you use multiple browsers and wish to block cookies or change or
          withdraw your consent, remember to do this in all browsers.
        </p>
        <p>
          If you browse websites from multiple devices, you may also need to
          update your settings on each individual device.
        </p>
        <p>
          Although some cookies can be blocked with little impact on your
          experience of a website, blocking all cookies may mean you are unable
          to access certain features and content on the site.
        </p>
        <p>
          <b>How often will we update this Cookie Notice?</b>
        </p>
        <p>
          We may update this Cookie Policy from time to time in order to
          reflect, for example, changes to the cookies we use or for other
          operational, legal or regulatory reasons. Please therefore re-visit
          this Cookie Policy regularly to stay informed about our use of cookies
          and related technologies. The date at the bottom of this Cookie Policy
          indicates when it was last updated.
        </p>
        <p>
          <b>Who are we and how can you contact us?</b>
        </p>
        <p>
          <b>The Apply Group Ltd.</b> {"('TAG')"} with CRN: 12938105 has its
          registered office at: Suite 209, Mayfair Point, 34 South Molton
          Street, London W1K 5RG, United Kingdom.
        </p>
        <p>You can always write to us at:{" "}
        <a href="contact@theapplygroup.com">contact@theapplygroup.com</a></p>
      </div>
      <Footer></Footer>
    </section>
  );
}
