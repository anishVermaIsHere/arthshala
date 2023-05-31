import { Category,Paper,Edit } from "./widgets/icons";


export const checkedDays=[
    {
      id: 1,
      label: "S",
      value: 0,
      checked: false,
    },
    {
      id: 2,
      label: "M",
      value: 1,
      checked: false,
    },
    {
      id: 3,
      label: "T",
      value: 2,
      checked: false,
    },
    {
      id: 4,
      label: "W",
      value: 3,
      checked: false,
    },
    {
      id: 5,
      label: "T",
      value: 4,
      checked: false,
    },
    {
      id: 6,
      label: "F",
      value: 5,
      checked: false,
    },
    {
      id: 7,
      label: "S",
      value: 6,
      checked: false,
    },
  ];

  export const navMenus=[
    {
      label:'Planning',
      link:'#',
      icon:<Category />,
      accessibility:'open planning',
      id:1
    },
    {
      label:'Documentation',
      link:'#',
      icon:<Edit />,
      accessibility:'open documentation',
      id:2
    },
    {
      label:'Housekeeping',
      link:'#',
      icon:<Paper />,
      accessibility:'open housekeeping',
      id:3
    },
  ];

  export const colors=["#F8EBF1","#E9E8FD","#FFFBDA","#CFFFF1"];

