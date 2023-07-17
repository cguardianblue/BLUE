export default {
  themeConfig: {
    siteTitle: "cg-ui",
    nav: [
      { text: "指南", link: "/guide/install/" },
      { text: "组件", link: "/components/collapse/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guide/install/",
            },
            {
              text: "快速开始",
              link: "/guide/quickstart/",
            },
          ],
        },
        {
          text: "进阶",
          items: [
            {
              text: "多语言",
              link: "/guide/i18n/",
            },
          ],
        },
      ],
      "/components/": [
        {
          text: "基础组件",
          items: [
            {
              text: "collapse",
              link: "/components/collapse/",
            },
            {
              text: "pagination",
              link: "/components/pagination/",
            },
            {
              text: "select",
              link: "/components/select/",
            },
            {
              text: "slider",
              link: "/components/slider/",
            },
            {
              text: "button",
              link: "/components/button/",
            },
            {
              text: "empty",
              link: "/components/empty/",
            },
            {
              text: "swiper",
              link: "/components/swiper/",
            },
            {
              text: "steps",
              link: "/components/steps/",
            },
            {
              text: "iframe",
              link: "/components/iframe/",
            },
            {
              text: "checkbox",
              link: "/components/checkbox/",
            },
            {
              text: "checkboxGroup",
              link: "/components/checkboxGroup/",
            },
            {
              text: "radio",
              link: "/components/radio/",
            },
            {
              text: "radioGroup",
              link: "/components/radioGroup/",
            },
            {
              text: "image",
              link: "/components/image/",
            },
            {
              text: "tabs",
              link: "/components/tabs/",
            },
            {
              text: "timeLine",
              link: "/components/timeLine/",
            },
            {
              text: "switch",
              link: "/components/switch/",
            },
            {
              text: "waterfall",
              link: "/components/waterfall/",
            },
            {
              text: "tooltip",
              link: "/components/tooltip/",
            },
            {
              text: "toast",
              link: "/components/toast/",
            },
            {
              text: "dialog",
              link: "/components/dialog/",
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/qddidi/easyest" },
    ],
  },
}
