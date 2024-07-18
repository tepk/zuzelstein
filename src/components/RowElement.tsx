import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useEffect, useState } from "react";
import { Button, Card } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import rowStyles from "../styles/RowElement.module.scss";

type OffersCard = {
  name: string;
  image: string;
  price: string;
  description: string;
};

const cards: Array<OffersCard> = [
  {
    name: "Бомж-пати",
    image: "/bread.jpg",
    price: "3000",
    description: "",
  },
  {
    name: "Натяжные потолки",
    image: "/floor.jpg",
    price: "3850",
    description: "",
  },
  {
    name: "Хиппи",
    image: "/hippie.jpg",
    price: "4700",
    description: "",
  },

  {
    name: "Муж на час",
    image: "/husband.jpg",
    price: "3200",
    description: "",
  },
  {
    name: "Общага",
    image: "/kitchen.jpg",
    price: "7450",
    description: "",
  },
  {
    name: "Свинарник",
    image: "/mess.jpg",
    price: "3300",
    description: "",
  },
  {
    name: "Студентческая вписка",
    image: "/student.jpg",
    price: "2800",
    description: "",
  },
  {
    name: "Неадекватный сосед",
    image: "/neighbour.jpg",
    price: "1900",
    description: "",
  },
  {
    name: "Веганство",
    image: "/vegetables.jpg",
    price: "1900",
    description: "",
  },
];

function cellRepeater(arr: Array<OffersCard>) {
  return arr.map((el, index) => (
    <Card
      key={index}
      sx={{ width: "350px", height: "420px", borderRadius: "15px" }}
    >
      <img src={el.image} />
      <h3>{el.name}</h3>
    </Card>
  ));
}

function scrollLess(e: React.MouseEvent<HTMLButtonElement>, type: string) {
  const tempId = type + "RowElement";
  const temp1 = document.getElementById(tempId);
  temp1 && (temp1.scrollLeft -= 995);
}
function scrollMore(e: React.MouseEvent<HTMLButtonElement>, type: string) {
  const tempId = type + "RowElement";
  const temp1 = document.getElementById(tempId);
  temp1 && (temp1.scrollLeft += 995);
}

export default function RowElement() {
  // const isClient = process.browser;
  useEffect(() => {
    console.log("???");
  }, []);
  return (
    <>
      <div className={rowStyles.header}>
        <h2 className={rowStyles.title}>Пакетные предложения</h2>
      </div>
      <div className={rowStyles.rowContainer}>
        <div className={rowStyles.rowNavContainer}>
          <IconButton
            aria-label="less"
            className={rowStyles.leftButton}
            onClick={(e) => scrollLess(e, "story")}
          >
            <ArrowCircleLeftOutlinedIcon
              fontSize={"large"}
              sx={{ bgcolor: "white", borderRadius: "50%" }}
            />
          </IconButton>
          <IconButton
            aria-label="more"
            className={rowStyles.rightButton}
            onClick={(e) => scrollMore(e, "story")}
          >
            <ArrowCircleRightOutlinedIcon
              fontSize={"large"}
              sx={{ bgcolor: "white", borderRadius: "50%" }}
            />
          </IconButton>
        </div>
        <div className={rowStyles.row} id={"story" + "RowElement"}>
          {cellRepeater(cards)}
        </div>
      </div>
    </>
  );
}
