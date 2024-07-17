import { getLocalSUserInfo } from '../services/handleLocalStorage';

export const ProfileData = () => {

  const {name} = getLocalSUserInfo()

  return (
    <>
      <img className=" rounded-full bg-cover  w-32 h-32 bg-[url('/profile.jfif')] mt-5 bg-center" />

      <p className=" font-bold text-heading-lg text-black mt-4 font-lato">
        {name}
      </p>

      {/* <div className=" flex flex-row w-full justify-center items-center pt-8 px-6">
        <div className=" flex flex-col gap-2 items-center justify-center px-4">
          <LightingSVG />

          <p className=" text-heading text-black font-bold font-lato">246</p>

          <p className=" text-heading-sm text-gray-300 font-black font-lato">
            Calorias totales
          </p>
        </div>

        <div className=" flex flex-col gap-2 items-center justify-center px-4">
          <FollowersSVG />

          <p className=" text-heading text-black font-bold font-lato">682</p>

          <p className=" text-heading-sm text-gray-300 font-black font-lato">
            Seguidores
          </p>
        </div>
      </div> */}
    </>
  );
}

export default ProfileData;
