import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useEffect, useState } from "react";
import { Button, Card } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import rowStyles from "../styles/RowElement.module.scss";
import bread from "../cardImages/bread.jpeg";
import floor from "../cardImages/floor.jpeg";
import hippie from "../cardImages/hippie.jpeg";
import husband from "../cardImages/husband.jpeg";
import kitchen from "../cardImages/kitchen.jpeg";
import mess from "../cardImages/mess.jpeg";
import student from "../cardImages/student.jpeg";
import neighbour from "../cardImages/neighbour.jpeg";
import vegetables from "../cardImages/vegetables.jpeg";
import { OfferCard } from "./OfferCard";

export type OffersCard = {
  name: string;
  image: string;
  price: string;
  description: string;
};

const cards: Array<OffersCard> = [
  {
    name: "Бомж-пати",
    image: bread,
    price: "3000",
    description: "<p>Три бомжа. Что может быть милее?</p>",
  },
  {
    name: "Натяжные потолки",
    image: floor,
    price: "3850",
    description:
      "<p>У&nbsp;вас натяжные потолки? &mdash;&nbsp;ни&nbsp;слова больше! Наши мастера легко и&nbsp;непринужденно забрызгают их&nbsp;краской, вареньем, соусами на&nbsp;ваш выбор. В&nbsp;цену включен демонтаж двух осветительных приборов с&nbsp;нарушением целостности полотна натяжного потолка.</p>",
  },
  {
    name: "Хиппи",
    image: hippie,
    price: "4700",
    description:
      "<p>Добавьте вечернике огня! Приведем к&nbsp;вам двух старых вонючих хиппи, которые будут курить самосад и&nbsp;бренчать на&nbsp;расстроенных гитарах, а&nbsp;так&nbsp;же (опционально) приставать к&nbsp;гостям противоположного пола</p>",
  },

  {
    name: "Муж на час",
    image: husband,
    price: "3200",
    description:
      "<p>Все лежит на&nbsp;своих местах? Все работает? Наш Муж На&nbsp;Час разберет технику, переложит инструменты в&nbsp;случайные места и&nbsp;оставит после себя творческий беспорядок</p>",
  },
  {
    name: "Общага",
    image: kitchen,
    price: "7450",
    description:
      "<p>Хочется вдохнуть запах студенческой свободы? Мы&nbsp;легко превратим вашу кухню в&nbsp;аналог общажной. Посуда предоставляется заказиком</p>",
  },
  {
    name: "Студентческая вписка",
    image: student,
    price: "2800",
    description:
      "<p>Работы проводятся только ночью. Легкий бардак. Чуть-чуть грустного веселья. Гитара и&nbsp;патлатый гнусавый гитарист в&nbsp;комплекте.</p>",
  },
  {
    name: "Свинарник",
    image: mess,
    price: "3300",
    description:
      "<p>Студенческая вписка на&nbsp;максималках! Вспоминаем, как оно бывало по&nbsp;утрам? Будет именно так!</p>",
  },
  {
    name: "Неадекватный сосед",
    image: neighbour,
    price: "1900",
    description:
      "<p>Гости надоели, но&nbsp;никак не&nbsp;расходятся? Не&nbsp;проблема! Ваш неадекватный сосед выключит вводной автомат квартиры, будет стучать и&nbsp;звонить в&nbsp;дверь, требуя завершения вечеринки, а&nbsp;когда ему откроют&nbsp;&mdash; полезет в&nbsp;драку.</p>",
  },
  {
    name: "Веганство",
    image: vegetables,
    price: "1900",
    description:
      "<p>Собрались пожарить шашлык? Толпа веганов развлечет ваших друзей своими неадекватными криками и&nbsp;требованиями прекратить жрать трупы</p>",
  },
];

function cellRepeater(arr: Array<OffersCard>) {
  return arr.map((el, index) => <OfferCard data={el} key={index} />);
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
        <div className={rowStyles.row} id={"storyRowElement"}>
          {cellRepeater(cards)}
        </div>
      </div>
    </>
  );
}
