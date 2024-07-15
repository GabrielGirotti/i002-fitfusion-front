import HeaderProfile from "./HeaderProfile";
import { Classes } from "../types/classesTypes";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  CardElement,

  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import GreenButton from "./GreenButton";
import { ScheduledClasses } from "../types/scheduledClassesTypes";


type PayPageProps = {
  item: ScheduledClasses[];
  setItem: React.Dispatch<React.SetStateAction<ScheduledClasses[] | undefined >>;
};

export const PayPage = ({ item, setItem }: PayPageProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setItem([]);
  };

  const [classConfirmed, setclassConfirmed] = useState<ScheduledClasses[]>([]);

  const handleConfirm = () => {
    setclassConfirmed(item);
    // navigate("/profile");
  };

  // console.log(item);
  // console.log(classConfirmed);

  const stripe = useStripe();
  const element = useElements();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("desde stripe");

    const { error, paymentMethod } = await stripe?.createPaymentMethod({
      type: "card",
      card: element?.getElement(CardElement),
    });

    if (!error) {
      console.log(paymentMethod);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center ">
        <HeaderProfile
          closeButton={false}
          text={"Pagina de pago"}
          showConfig={false}
          handleClick={handleClick}
        />

        {item.map((clase) => (
          <>
            <div
              key={clase.id}
              className="flex flex-col justify-center items-center text-center w-full text-black bg-lima-100 py-6 mt-8"
            >
              <p className=" font-bold text-heading font-lato min-[566px]:max-w-xl text-center px-6 ">
                Estas a punto de reservar la clase "{clase.title}" con el
                profesor 
                {/* {clase.instructor.name} */}
              </p>
            </div>
          </>
        ))}

        <div className="w-full bg-black-bg py-10 flex flex-col items-center">
          <p className="mt-8 font-bold text-heading font-lato min-[566px]:max-w-xl text-center px-6 text-white">
            De querer realizar tu pago te pedimos los siguientes datos:
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-y-4 py-6 w-full px-6 min-[566px]:max-w-xl"
          >      

            <CardElement className="bg-white rounded w-full p-4 text-black" />

          

            <GreenButton text="Confirmar clase" handleClick={handleConfirm} />
          </form>
        </div>
      </div>
    </>
  );
};

export default PayPage;
