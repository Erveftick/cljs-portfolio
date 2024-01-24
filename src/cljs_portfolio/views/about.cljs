(ns cljs-portfolio.views.about
  (:require
   [garden.core :refer [css]]
   [garden.stylesheet :as gs]))

(defn social-links []
  [:div
   {:style {:display :flex
            :justify-content :center
            :font-size :32px
            :margin "15px 0"
            :gap :15px}}
   [:a {:href "https://www.linkedin.com/in/ekvashyn/"
        :target "_blank"} [:i.fab.fa-linkedin]]
   [:a {:href "https://github.com/Erveftick/"
        :target "_blank"} [:i.fab.fa-github]]
   [:a {:href "mailto:edwardkvashin@gmail.com"
        :target "_blank"} [:i.fas.fa-envelope]]])

(defn about-me
  []
  [:div#about.inside.wow.fadeIn.about-block
   {:data-wow-duration "2s"
    :style {:visibility :visible
            :animation-duration :2s
            :animation-name :fadeIn}}
   [:p.about__tagline "Profile" [:br] " of developer"]
   [:div
    [:p.about__content "I am a " [:b "creative full-stack developer"] " in the field of
software development and engineering with a design background, crafting immersive digital
experiences that combine creativity and functionality. With a passion for design and
development, I make and contribute to projects, ensuring a seamless journey that
leaves a lasting impact in the digital landscape"]
    [social-links]]])

(def about-styles
  [:.section
   {:margin      "18vh 4vw"}
   [:.work-card
    {:padding :2em}]
   [:.title
    {:text-align  :center
     :font-size :4em
     :font-family "\"Philosopher\", sans-serif"
     :font-weight :600}]
   [:.position-title
    {:font-size :2em
     :margin 0}]
   [:.project-title
    {:font-size :1em
     :color :#abb8c3
     :font-weight :100}]
   [:.project-description
    {:font-size :1.3em}]
   [:.position-subtitle
    {:margin "0.7em 0"}]
   [:.d-flex
    {:display :flex}]
   [:.content-space-between
    {:justify-content :space-between}]
   [:.link
    {:color "#fbd54a !important"}]
   [:.p-2
    {:padding :2em}]
   [:.content-center
    {:justify-content :center}]
   [:.project-img-block
    {:width :60%
     :background "linear-gradient(34deg, rgba(207,46,46,1) 0%, rgba(255,105,0,1) 23%, rgba(251,213,74,1) 100%)"}]
   [:.project-img-label
    {:width :40%}]
   [:.project-img
    {:height :250px}]
   [:.portfolio-img
    {:height :200px}]
   [:.project-btn
    {:transition :0.3s}]
   [:.project-btn:hover
    {:transition :0.3s
     :color :black!important
     :background-color "#fbd54a !important"}]
   (gs/at-media {:max-width :578px}
                [:.d-sd-block
                 {:display    :block}])
   (gs/at-media {:max-width :786px}
                [:.project-img-block
                 {:width :100%
                  :height :150%}]
                [:.portfolio-img
                 {:height :150px}]
                [:.project-img
                 {:margin-top :5em}]
                [:.project-img-label
                 {:width :100%}]
                [:.d-md-block
                 {:display    :block}]
                [:.d-md-reverse
                 {:dislay :flex
                  :flex-direction :column-reverse}
                 ])])

(def blaster-timeline
  [:div
   [:p "In this role, I was hands-on with the team, doing a bunch of coding, making it run better, and writing tests to make sure everything works smoothly. I also took charge of keeping our codebase in check, reviewing my teammates' work and offering feedback. I made sure to stay in the loop with the latest in Clojure by keeping an eye on news and being part of various Clojure meetups and master-classes"]
   [:ul.timeline
    [:li.timeline-item.wow.slideInRight
     [:div.timeline-marker]
     [:div.timeline-content
      [:h3.timeline-title "E-commerce management system"]
      [:ul
       [:li "Contributed a major part to the development of a complex web-based accounting and management system for
an online fashion manufacturer"]
       [:li "Developed platform using Clojure (Script), JavaScript, Datalog, React (Reagent), Re-frame, Polylith, Ring, HTML,
CSS, and AWS services, while also conducting data analysis"]
       [:li "Implemented functionality for orders, returns, user management, price lists, analytics, and sales reports"]
       [:li "Conducted code reviews and actively engaged in troubleshooting sessions, contributing to the team's commitment to high-quality, maintainable code"]]]]
    [:li.timeline-item.wow.slideInRight
     [:div.timeline-marker]
     [:div.timeline-content
      [:h3.timeline-title "Web extension"]
      [:ul
       [:li "Initiated and constructed a web extension for both Google Chrome and Mozilla browsers, building the project entirely from the ground up"]
       [:li "Leveraging Chromex, I implemented the web extension using Clojure(Script), strategically employing core.async to facilitate seamless communication between the back-end and front-end. This asynchronous approach enabled efficient and responsive operations, ensuring effective interaction and data flow within the extension"]
       [:li "Implemented robust data handling using DataScript and LocalStorage, effectively storing and managing user input as a database"]
       [:li "Blended technologies seamlessly, incorporating JavaScript, React (Reagent), and HTML/CSS to develop a dynamic and user-friendly front end"]]]]
    [:li.timeline-item.wow.slideInRight
     [:div.timeline-marker]
     [:div.timeline-content
      [:h3.timeline-title "Booking web-based system"]
      [:ul
       [:li "Played a key role in the development and implementation of features, ensuring seamless
booking functionality, user-friendly interfaces, and optimal performance"]
       [:li "Spearheaded the utilization of ClojureScript with Datascript to architect and develop scalable and
efficient solutions for our booking system, achieving a rapid time-to-market"]
       [:li "Actively participated in team meetings, providing technical insights, and contributing to strategic decisions to meet project timelines"]]]]]])

(def mxf-timeline
  [:div
   [:p "In my role as a research assistant during an exchange program for students from Ukraine, I ventured into an entirely new field of theorem proving and software verification. I joined a seasoned group of researchers who had developed the verification tool SPACER, an integral component of the z3 python library. This immersive experience not only broadened my horizons but also allowed me to contribute to a cutting-edge project in the field"]
   [:ul.timeline
    [:li.timeline-item.wow.slideInRight
     [:div.timeline-marker]
     [:div.timeline-content
      [:h3.timeline-title "Verification add-on tool"]
      [:p "As part of a dynamic team of researchers, every day was a learning experience. Within a
 month, I identified patterns in the software we were attempting to verify and proposed a novel idea.
 This idea materialized into an enhancement integrated into a tool named "
       [:a.link {:href "https://github.com/Erveftick/magicXform"} [:b "magicXform"]]
       ", serving as an add-on to the existing solver utilized by the team. Notably, my contribution
 led to a remarkable 63% improvement in results"]]]
    [:li.timeline-item.wow.slideInRight
     [:div.timeline-marker]
     [:div.timeline-content
      [:h3.timeline-title "Tool enhancement"]
      [:p "Buoyed by this success, I persisted in my quest to enhance tool performance. Two months later, I successfully implemented two additional ideas into the codebase, resulting in a substantial 2.15-fold increase in the initial performance of the researchers' tool. This experience underscored my adaptability and problem-solving skills in navigating uncharted territories within the realm of research and software development"]]]
    ]])

[:ul
            [:li "Developed two fundamental ideas to improve the team's tool for bug-free code verification"]
            [:li "Built a Python tool named “magicXform” with the Z3 theorem prover to address challenges and enhance
results on top of the team's tool"]
            [:li "Improved the efficiency of a research team's tool for finding invariants, resulting in a 2.15-fold increase in
effectivenes"]]

(defn work-card-header
  [{:keys [title company company-wp years contract location]}]
  [:div.content-space-between.d-flex.d-md-block
   [:div
    [:h3.position-title title]
    [:div.d-flex.d-sd-block
     {:style {:margin 0
              :gap :10px}}
     [:div.d-flex
      {:style {:margin 0
               :gap :10px}}
      [:h5.position-subtitle
       [:a {:style {:color "#fbd54a"}
            :href company-wp
            :target "_blank"} company]]
      [:h5.position-subtitle "•"]
      [:h5.position-subtitle contract]
      [:h5.position-subtitle "•"]]
     [:h5.position-subtitle years]]]
   [:h5.position-subtitle location]])

(defn work-card
  [{:keys [about] :as work-data}]
  [:div.wow.fadeIn
   {:key about
    :style {:padding "2em 0"}}
   [work-card-header work-data]
   about])

(def work-exp-data
  [{:title "Software Developer / Research Assistant"
    :company "University of Waterloo"
    :company-wp "https://uwaterloo.ca/"
    :years "2023 - Now"
    :contract "Full-time"
    :location "Waterloo, Canada"
    :about mxf-timeline}
   {:title "Software Developer"
    :company "Blaster Inc. / MDNT45"
    :company-wp "https://mdnt45.com/"
    :years "2021 - 2023"
    :contract "Full-time"
    :location "Lisbon, Portugal"
    :about blaster-timeline}
   {:title "Front-end software developer"
    :company "LEM platform"
    :company-wp "https://platform-lem.vercel.app/en"
    :years "2019 - 2022"
    :contract "Self-employed"
    :location "Kyiv, Ukraine"
    :about [:ul
            [:li "Emphasized the development of user-friendly interfaces to render, customize, and manage course content on
an educational platform designed for independent study of school curriculum and specialized courses,
adaptable to school and university settings. Leveraged JavaScript, React, NextJS, HTML, and
CSS"]
            [:li "Strengthen my skills in front-end development and user experience design"]]}])

(defn work-exp []
  [:div#work-experience.section
   [:h3.title.wow.fadeIn "Work experience"]
   (for [w work-exp-data]
     [work-card w])])

(defn project-tag [text style]
  [:div
   {:style (merge {:color :black
                   :padding "8px 10px"
                   :background :white
                   :position :absolute
                   :margin :2em
                   :border-radius :50px}
                  style)}
   text])

(defn skill-tag [text]
  [:div
   {:style {:padding ".2rem .8rem"
            :color :#d46b08
            :background :#fff7e6
            :border-color :##ffd591
            :border-radius :999px}}
   text])

(defn project-btn [label link & {:keys [filled?]}]
  [:a {:href link
       :target "_blank"}
   [:div.project-btn
    {:style (cond-> {:padding "10px"
                     :border-radius :999px
                     :border "2px solid white"
                     :cursor :pointer
                     :color :white}
              filled?  (assoc :background :white
                              :color :black))}
    label]])

(defn lem-project-block []
  [:div.d-flex.d-md-block.wow.slideInRight
   {:style {:width :100%}}
   [:div.project-img-block.d-flex.content-center
    [project-tag "Education" {:left 0}]
    [:img.project-img {:src "img/lem.png"
                       :style {:position :relative
                               :bottom :-50%}}]]
   [:div.p-2.project-img-label
    [:h3.project-title "Platform LEM"]
    [:p.project-description (str "Developed user-friendly interfaces for an educational platform, strengthened skills in front-end development and UX design, enhancing the independent study of school curriculum and specialized courses")]
    [:h3.project-title "Stack"]
    [:div.d-flex
     {:style {:gap :10px
              :flex-wrap :wrap
              :width :100%}}
     [skill-tag "JavaScript"]
     [skill-tag "React"]
     [skill-tag "NextJS"]
     [skill-tag "MongoDB"]
     [skill-tag "Express.js"]
     [skill-tag "Redux"]
     [skill-tag "UI/UX"]
     [skill-tag "HTML/CSS"]
     [skill-tag "GitHub"]
     [skill-tag "Vercel"]]
    [:div.d-flex
     {:style {:margin-top :3em
              :gap :10px}}
     [project-btn "View Demo" "https://platform-lem.vercel.app/en" {:filled? true}]
     [project-btn "Watch Video" "https://www.youtube.com/watch?v=YRG9T42zfYs&t=19s"]]]])

(defn blaster-project-block []
  [:div.d-flex.d-md-reverse.wow.slideInLeft
   {:style {:width :100%
            :margin "3em 0"}}
   [:div.p-2.project-img-label
    [:h3.project-title "BlasterOS"]
    [:p.project-description "Developed comprehensive e-commerce management system featuring a robust role system, financial tools, user management, admin privileges, configurable settings, and more"]
    [:h3.project-title "Stack"]
    [:div.d-flex
     {:style {:gap :10px
              :flex-wrap :wrap
              :width :100%}}
     [skill-tag "Clojure"]
     [skill-tag "ClojureScript"]
     [skill-tag "Datomic"]
     [skill-tag "Reagent"]
     [skill-tag "Re-frame"]
     [skill-tag "Spec/Malli"]
     [skill-tag "Polylith"]
     [skill-tag "Ring"]
     [skill-tag "AWS"]
     [skill-tag "DynamoDB"]
     [skill-tag "GitHub"]]
    [:div.d-flex
     {:style {:margin-top :3em
              :gap :10px}}
     [project-btn "Watch Video" "https://www.youtube.com/watch?v=UlzjoNwpmrU"]]]
   [:div.project-img-block.d-flex.content-center
    [project-tag "Management" {:right 0}]
    [:img.project-img {:src "img/blstros.png"
                       :style {:position :relative
                               :bottom :-50%}}]]])

(defn portfolio-project-block []
  [:div.d-flex.d-md-block.wow.slideInRight
   {:style {:width :100%}}
   [:div.project-img-block.d-flex.content-center
    [project-tag "Portfolio" {:left 0}]
    [:img.project-img.portfolio-img
     {:src "img/portfolio.png"
      :style {:position :relative
              :bottom :-45%}}]]
   [:div.p-2.project-img-label
    [:h3.project-title "Portfolio"]
    [:p.project-description "Designed and implemented my portfolio using Clojure and ClojureScript, incorporating JavaScript scripts for enhanced interactivity. This project showcases my proficiency in functional programming, web development, and a keen eye for design. Explore my skills and experiences in a seamless and visually appealing interface"]
    [:h3.project-title "Stack"]
    [:div.d-flex
     {:style {:gap :10px
              :flex-wrap :wrap
              :width :100%}}
     [skill-tag "Clojure"]
     [skill-tag "ClojureScript"]
     [skill-tag "JavaScript"]
     [skill-tag "UI/UX"]
     [skill-tag "HTML/CSS"]
     [skill-tag "GitHub"]]]])

(defn projects []
  [:<>
   [:div#projects.section
    {:style {:margin-bottom 0}}
    [:h3.title.wow.fadeIn "Projects"]]
   [:div.section
    {:style {:margin 0
             :dislay :flex
             :flex-direction :column
             :gap :4em}}
    [lem-project-block]
    [blaster-project-block]
    [portfolio-project-block]]])

(def study-exp-data
  [{:title "Bachelor's Degree"
    :company "Igor Sikorsky Kyiv Polytechnic Institute"
    :company-wp "https://kpi.ua/"
    :years "2019 - 2023"
    :contract "Applied Mathematic"
    :location "Kyiv, Ukraine"}
   {:title "Master's degree"
    :company "University of Waterloo"
    :company-wp "https://uwaterloo.ca/"
    :years "2023 - Now"
    :contract "Electrical and Computer Engineering"
    :location "Waterloo, Canada"}])

(defn study []
  [:div#edu.section
   [:h3.title.wow.fadeIn "Education"]
   (for [w study-exp-data]
     [work-card w])])

(def lead-exp-data
  [{:title "Lead of Ukrainian National Team in Robotics"
    :company "Team “Cyberpunks”"
    :company-wp "https://frc-events.firstinspires.org/2020/team/8187"
    :years "2019 - 2020"
    :contract "Volunteer"
    :location "Kyiv, Ukraine"
    :about [:ul
            [:li "Led and managed the Ukrainian national team's participation in the 2020 FIRST Robotics
Competition held in Istanbul, Europe stage"]
            [:li "Collaborated with team members to design, build, and program a robot for the competition, emphasizing
problem-solving, teamwork, and innovation"]]}
   {:title "Youth Education Program Facilitator"
    :company "Fivone education"
    :company-wp "https://www.linkedin.com/company/fivone/about/"
    :years "2020 - 2021"
    :contract "Contract"
    :location "Kyiv, Ukraine"
    :about [:ul
            [:li "Instructed children in web development, Python, JavaScript, and C++, applying these skills in robotics within
engaging and age-appropriate educational programs"]
            [:li "Provided individual and group coaching to children, with a focus on programming, problem-solving, and teamwork"]]}])

(defn lead-exp []
  [:div#leadership.section
   [:h3.title.wow.fadeIn "Leadership Experience"]
   (for [w lead-exp-data]
     [work-card w])])

(defn contacts []
  [:div#contact.section.wow.fadeIn
   {:style {:text-align :center}}
   [:h3.title.wow.fadeIn
    {:style {:margin-bottom 0}}
    "Contact"]
   [:p "Shoot me an email if you want to connect! You can also find me on "
    [:a {:style {:color "#fbd54a"}
         :href "https://www.linkedin.com/in/ekvashyn/"} "Linkedin"]
    " if that's more your speed."]
   [:h3
    {:style {:margin-top :3em}}
    [:a {:href "mailto:edwardkvashin@gmail.com"}
     [:i.fas.fa-envelope {:style {:margin-right :0.5em}}] "edwardkvashin@gmail.com"]]])

(defn about
  []
  [:section.wow.fadeIn
   [:style (css about-styles)]
   [about-me]
   [work-exp]
   [projects]
   [study]
   [lead-exp]
   [contacts]])
