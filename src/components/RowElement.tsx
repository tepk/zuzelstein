import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useEffect, useState } from "react";
import { Button, Card } from "@mui/material";
import IconButton from "@mui/material/IconButton";
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

type OffersCard = {
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
    description: "Три бомжа. Что может быть милее?",
  },
  {
    name: "Натяжные потолки",
    image: floor,
    price: "3850",
    description:
      "У вас натяжные потолки? -- ни слова больше! Наши мастера легко и непринужденно забрызгают их краской, вареньем, соусами на ваш выбор. В цену включен демонтаж двух осветительных приборов с нарушением целостности полотна натяжного потолка.",
  },
  {
    name: "Хиппи",
    image: hippie,
    price: "4700",
    description:
      "Добавьте вечернике огня! Приведем к вам двух старых вонючих хиппи, которые будут курить самосад и бренчать на расстроенных гитарах, а так же (опционально) приставать к гостям противоположного пола",
  },

  {
    name: "Муж на час",
    image: husband,
    price: "3200",
    description:
      "Все лежит на своих местах? Все работает? Наш Муж На Час разберет технику, переложит инструменты в случайные места и оставит после себя творческий беспорядок",
  },
  {
    name: "Общага",
    image: kitchen,
    price: "7450",
    description:
      "Хочется вдохнуть запах студенческой свободы? Мы легко превратим вашу кухню в аналог общажной. Посуда предоставляется заказиком",
  },
  {
    name: "Студентческая вписка",
    image: student,
    price: "2800",
    description:
      "Работы проводятся только ночью. Легкий бардак. Чуть-чуть грустного веселья. Гитара и патлатый гнусавый гитарист в комплекте.",
  },
  {
    name: "Свинарник",
    image: mess,
    price: "3300",
    description:
      "Студенческая вписка на максималках! Вспоминаем, как оно бывало по утрам? Будет именно так!",
  },
  {
    name: "Неадекватный сосед",
    image: neighbour,
    price: "1900",
    description:
      "Гости надоели, но никак не расходятся? Не проблема! Ваш неадекватный сосед выключит вводной автомат квартиры, будет стучать и звонить в дверь, требуя завершения вечеринки, а когда ему откроют -- полезет в драку.",
  },
  {
    name: "Веганство",
    image: vegetables,
    price: "1900",
    description:
      "Собрались пожарить шашлык? Толпа веганов развлечет ваших друзей своими неадекватными криками и требованиями прекратить жрать трупы",
  },
];

function cellRepeater(arr: Array<OffersCard>) {
  return arr.map((el, index) => (
    <Card
      key={index}
      sx={{ width: "350px", height: "420px", borderRadius: "15px" }}
    >
      <img src={el.image} />
      <div className={rowStyles.cardHeader}>
        <h3>{el.name}</h3>
        <span>{el.price}</span>
      </div>
      <div className={rowStyles.cardDescription.replace(" --", " —")}>
        {el.description}
      </div>
      <Button>{el.price}&nbsp;$</Button>
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
