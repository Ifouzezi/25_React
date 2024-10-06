const menuData = [
  {
    title: "Home",
    path: "/home",
    icon: "home",
    subMenu: [
      {
        title: "Introduction",
        path: "/home/introduction",
        subMenu: []
      },
      {
        title: "Overview",
        path: "/home/overview",
        subMenu: []
      }
    
    ]
  },
  {
    title: "Services",
    path: "/services",
    icon: "services",
    subMenu: [
      {
        title: "Web Development",
        path: "/services/web-development",
        subMenu: [
          {
            title: "Frontend Development",
            path: "/services/web-development/frontend",
            subMenu: []
          },
          {
            title: "Backend Development",
            path: "/services/web-development/backend",
            subMenu: []
          }
        ]
      },
      {
        title: "App Development",
        path: "/services/app-development",
        subMenu: [
          {
            title: "iOS Development",
            path: "/services/app-development/ios",
            subMenu: []
          },
          {
            title: "Android Development",
            path: "/services/app-development/android",
            subMenu: []
          }
        ]
      },
      {
        title: "SEO",
        path: "/services/seo",
        subMenu: []
      }
    ]
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: "portfolio",
    subMenu: [
      {
        title: "Projects",
        path: "/portfolio/projects",
        subMenu: [
          {
            title: "React Projects",
            path: "/portfolio/projects/react",
            subMenu: []
          },
          {
            title: "Node.js Projects",
            path: "/portfolio/projects/nodejs",
            subMenu: []
          }
        ]
      },
      {
        title: "Clients",
        path: "/portfolio/clients",
        subMenu: [
          {
            title: "Corporate Clients",
            path: "/portfolio/clients/corporate",
            subMenu: []
          },
          {
            title: "Individual Clients",
            path: "/portfolio/clients/individual",
            subMenu: []
          }
        ]
      }
    ]
  },
  {
    title: "Contact",
    path: "/contact",
    icon: "contact",
    subMenu: [
      {
        title: "Email Us",
        path: "/contact/email",
        subMenu: []
      },
      {
        title: "Visit Us",
        path: "/contact/visit",
        subMenu: []
      }
    ]
  }
];

export default menuData;
