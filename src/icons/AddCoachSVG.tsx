import { SVGProps } from "react";

export const AddCoachSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 5C13 6.42794 12.3796 7.78545 11.3 8.72C14.1591 10.0146 15.997 12.8615 16 16C16 16.5523 15.5523 17 15 17C14.4477 17 14 16.5523 14 16C14 12.6863 11.3137 10 8 10C4.68629 10 2 12.6863 2 16C2 16.5523 1.55228 17 1 17C0.447715 17 0 16.5523 0 16C0.0030061 12.8615 1.84094 10.0146 4.7 8.72C3.62035 7.78545 2.99998 6.42794 3 5C3 2.23858 5.23858 0 8 0C10.7614 0 13 2.23858 13 5ZM5 5C5 6.65685 6.34315 8 8 8C8.79565 8 9.55871 7.68393 10.1213 7.12132C10.6839 6.55871 11 5.79565 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5ZM18 7H19C19.5523 7 20 7.44772 20 8C20 8.55229 19.5523 9 19 9H18V10C18 10.5523 17.5523 11 17 11C16.4477 11 16 10.5523 16 10V9H15C14.4477 9 14 8.55229 14 8C14 7.44772 14.4477 7 15 7H16V6C16 5.44772 16.4477 5 17 5C17.5523 5 18 5.44772 18 6V7Z"
      />
    </svg>
  );
};
