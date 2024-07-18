import { OffersCard } from "./RowElement";
import rowStyles from "../styles/RowElement.module.scss";
import { Button, Card } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useState } from "react";

export function OfferCard({ data }: { data: OffersCard }) {
  const [inCart, setInCart] = useState<boolean>(false);
  return (
    <Card
      sx={{
        width: "350px",
        height: "440px",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src={data.image} />
      <div className={rowStyles.cardContent}>
        <h3>{data.name}</h3>
        <div
          className={rowStyles.cardDescription}
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
          }}
        />
        <Button
          style={{ display: "flex", justifyContent: "space-between" }}
          onClick={() => setInCart((oldV) => !oldV)}
        >
          {inCart ? (
            <>
              <ShoppingCartCheckoutIcon
                sx={{ marginRight: "4px", fontSize: "16px" }}
              />
              <span>Оформить заказ</span>
              <div />
            </>
          ) : (
            <>
              <AddShoppingCartIcon
                sx={{ marginRight: "4px", fontSize: "16px" }}
              />
              <span>{data.price}&nbsp;&curren;</span>
              <div />
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}
