import { SVGProps } from "react";

export const NotificationSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1C7 0.44772 7.4477 0 8 0C8.5523 0 9 0.44772 9 1V2C9 2.02774 8.9989 2.05522 8.9967 2.08239C11.836 2.55707 14 5.02582 14 8V9.9574C14 10.3881 14.156 10.8042 14.439 11.1289L15.0834 11.8682C17.1702 14.2623 15.4699 18 12.294 18H10C10 19.1046 9.1046 20 8 20C6.8954 20 6 19.1046 6 18H3.70609C0.530189 18 -1.17014 14.2623 0.916679 11.8682L1.56112 11.1289C1.84413 10.8042 2.00004 10.3881 2.00004 9.9574V8C2.00004 5.02585 4.16401 2.55712 7.0033 2.08241C7.0011 2.05523 7 2.02775 7 2V1ZM8 4C5.7909 4 4.00004 5.79086 4.00004 8V9.9574C4.00004 10.8712 3.66924 11.7542 3.06876 12.443L2.42432 13.1824C1.4654 14.2825 2.24672 16 3.70609 16H12.294C13.7534 16 14.5347 14.2825 13.5758 13.1824L12.9313 12.443C12.3308 11.7542 12 10.8712 12 9.9574V8C12 5.79086 10.2092 4 8 4Z"
      />
    </svg>
  );
};
