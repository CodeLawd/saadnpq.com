import React from 'react'
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'

const projects = [
  { 
    name: "matrixcli",
    description: "command line matrix chat client",
    repo: "saadnpq/matrixcli",
    techonlogies : [ 
      {
        preJSX: <FaPython />,
        name: "python"
      }, 
    ],
    showCount: true,
  },
  { 
    name: "npq hugo",
    description: "hugo theme for personal blogs",
    repo: "saadnpq/npq-hugo",
    demo: "https://themes.gohugo.io/theme/npq-hugo/",
    techonlogies : [ 
      {
        preJSX: <FaHtml5 />,
        name: "html"
      }, 
      {
        preJSX: <FaCss3Alt />,
        name: "css"
      }, 
      {
        preJSX: <FaJs />,
        name: "js"
      }, 
    ],
    showCount: true,
  },
  { 
    name: "evolve",
    description: "simple mathematical representation of the evolution theory",
    repo: "saadnpq/evolve",
    techonlogies : [ 
      {
        preJSX: <FaPython />,
        name: "python"
      }, 
    ],
    showCount: false,
  },
  { 
    name: "this.site",
  description: "this react app",
    repo: "saadnpq/saadnpq.com",
    techonlogies : [ 
      {
        preJSX: <FaReact />,
        name: "react"
      }, 
    ],
    showCount: false,
  },
  { 
    name: "compliant franco",
    description: "the documented Franco writing system.",
    repo: "saadnpq/compliant-franco",
    techonlogies : [ 
      {
        name: "none"
      }, 
    ],
    showCount: false,
  },
  { 
    name: "npq layout",
    description: "the firmware of the npq keyboard layout designed for the atreus keyboard",
    repo: "saadnpq/npq-layout",
    techonlogies : [ 
      {
        name: "C"
      }, 
      {
        name: "qmk"
      }, 
    ],
    showCount: false,
  },
]


export default projects