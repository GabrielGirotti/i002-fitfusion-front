import ClasesLayout from "./ClasesLayout";
import TeacherBanner from "./TeacherBanner";

function ClasesProfile() {
  return (
    <>
      <ClasesLayout />
      <div className=" flex flex-row w-full justify-between items-center pt-2  px-6">
        <p className=" font-bold text-heading font-lato">
          Comienza a entrenar hoy
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0733 10C13.1712 10 14.0611 9.10457 14.0611 8C14.0611 6.89543 13.1712 6 12.0733 6C10.9755 6 10.0856 6.89543 10.0856 8C10.0856 9.10457 10.9755 10 12.0733 10ZM12.0733 18C13.1712 18 14.0611 17.1046 14.0611 16C14.0611 14.8954 13.1712 14 12.0733 14C10.9755 14 10.0856 14.8954 10.0856 16C10.0856 17.1046 10.9755 18 12.0733 18Z"
            fill="#040415"
            fill-opacity="0.4"
          />
        </svg>
      </div>
      <div className=" flex flex-col items-center px-6 mt-8 gap-4">
        <TeacherBanner />
      </div>
    </>
  );
}

export default ClasesProfile;
