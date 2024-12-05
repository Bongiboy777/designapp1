import Link from "next/link";
import Button from "./Button/Button";

export const Infobox = ({heading, subheading, buttonColor,buttonLabel}) => {
    return (
        <div className={
          "flex flex-col flex-1 shrink justify-center px-12 py-5 bg-white rounded-xl basis-0 min-w-[240px]" +
          " max-md:px-5 max-md:max-w-full"
        }>
        <div className={
          "flex flex-col justify-center p-2.5 w-full text-black max-md:max-w-full"
        }>
          <h2 className="text-lg font-bold uppercase">
            {heading}
          </h2>
          <p className="mt-2.5 text-base font-light max-md:max-w-full">
            {subheading}
          </p>
        </div>
        <div className={
          "flex gap-2.5 items-center mt-2.5 w-full text-lg font-extrabold text-center text-white uppercase max-md:max-w-full"
        }>
          <Button className={
            buttonColor
          }>
            <Link href="/search" >
              {buttonLabel}
            </Link>
          </Button>
         
        </div>
      </div>
    );
};