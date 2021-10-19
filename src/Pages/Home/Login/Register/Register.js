import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="py-20 md:w-1/4 mx-auto">
      <h2 className="my-6 text-center text-bold text-4xl text-pink-600">
        Please Sign Up Here
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col">
        <input
          className="px-3 py-3 bg-gray-100 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
          placeholder="Your Name"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="text-red-600">*Name is required</span>}
        <input
          className="px-3 py-3 bg-gray-100 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent mt-4"
          placeholder="john@abraham.com"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-600">*Email is required</span>
        )}
        <input
          className="px-3 py-3 bg-gray-100 placeholder-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent mt-4"
          placeholder="*******"
          {...register("password", { required: true })}
        />

        {errors.password && (
          <span className="text-red-600">*Password is required</span>
        )}

        <input
          type="submit"
          className="px-3 py-3 bg-pink-600 text-white my-4 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
        />
      </form>
      <hr className="w-1/4 mx-auto border-b-1 border-pink-900 " />
      <div className="my-2 text-center ">
        <h3 className="font-bold text-lg text-pink-600">Or Login With</h3>
        <button className=" flex items-center justify-center w-full px-3 py-2 bg-pink-600 my-4 text-white focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="36"
            height="36"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g id="original-icon" fill="#ffffff">
                <path d="M86,24.08c-34.17715,0 -61.92,27.74285 -61.92,61.92c0,34.17715 27.74285,61.92 61.92,61.92c34.17715,0 61.92,-27.74285 61.92,-61.92c0,-3.63118 -0.34253,-7.17352 -0.94062,-10.61562c-0.14387,-0.82417 -0.85985,-1.42532 -1.69648,-1.42438h-59.28289c-0.94989,0.00009 -1.71991,0.77011 -1.72,1.72v22.36c0.00009,0.94989 0.77011,1.71991 1.72,1.72h33.27797c-5.42135,13.09081 -18.20783,22.36 -33.27797,22.36c-19.9684,0 -36.12,-16.1516 -36.12,-36.12c0,-19.9684 16.1516,-36.12 36.12,-36.12c7.88608,0 15.15794,2.52942 21.09687,6.81281c0.68531,0.49372 1.62767,0.41685 2.22391,-0.18141l15.94023,-15.94023c0.34429,-0.34379 0.52688,-0.8173 0.50256,-1.30324c-0.02433,-0.48594 -0.25331,-0.93884 -0.63021,-1.24653c-10.66437,-8.7098 -24.29689,-13.94141 -39.13336,-13.94141zM86,27.52c13.33706,0 25.53536,4.56614 35.37086,12.07695l-13.5282,13.5282c-6.26848,-4.17466 -13.75156,-6.68516 -21.84266,-6.68516c-21.8276,0 -39.56,17.7324 -39.56,39.56c0,5.14386 0.99386,10.05572 2.78492,14.56625l-1.64945,1.04812c-0.40075,0.25511 -0.51882,0.78679 -0.26371,1.18754c0.25511,0.40075 0.78679,0.51882 1.18754,0.26371l1.40422,-0.89359c6.19068,13.77592 20.03008,23.38797 36.09648,23.38797c17.43002,0 32.24285,-11.29311 37.50406,-26.97242c0.17627,-0.52512 0.08889,-1.10299 -0.23477,-1.55251c-0.32366,-0.44952 -0.84397,-0.71568 -1.39789,-0.71507h-34.15141v-18.92h55.99742c0.42631,2.82252 0.76258,5.67119 0.76258,8.6c0,18.50919 -8.58939,34.98848 -21.99383,45.70094l-5.81172,-5.23055c-0.17004,-0.15773 -0.39657,-0.24011 -0.6282,-0.22844c-0.34893,0.01906 -0.65165,0.24734 -0.7659,0.57759c-0.11426,0.33024 -0.01735,0.69679 0.2452,0.92741l5.58664,5.02898c-9.77592,7.34713 -21.93054,11.70406 -35.11219,11.70406c-22.80993,0 -42.53839,-13.0408 -52.18117,-32.07195l3.62141,-2.30453c0.32902,-0.20267 0.48248,-0.59989 0.37518,-0.97112c-0.1073,-0.37123 -0.44901,-0.62533 -0.83542,-0.62122c-0.16371,0.00227 -0.32338,0.05121 -0.46023,0.14109l-3.46352,2.20375c-3.54421,-7.54313 -5.53625,-15.96419 -5.53625,-24.85602c0,-9.22293 2.13963,-17.94063 5.93602,-25.69586l8.22375,5.23391c0.25941,0.18083 0.59712,0.20473 0.87941,0.06223c0.28229,-0.14249 0.46362,-0.42839 0.4722,-0.74449c0.00858,-0.3161 -0.15699,-0.61141 -0.43114,-0.769l-8.35813,-5.31789c9.78995,-18.58302 29.27818,-31.24891 51.75789,-31.24891zM45.55313,66.13602c-0.38145,0.00777 -0.7122,0.26591 -0.81239,0.63405c-0.10019,0.36814 0.05412,0.75829 0.37903,0.95829l1.72,1.09516c0.25941,0.18083 0.59712,0.20473 0.87941,0.06223c0.28229,-0.14249 0.46362,-0.42839 0.4722,-0.74449c0.00858,-0.3161 -0.15699,-0.61141 -0.43114,-0.769l-1.72,-1.09516c-0.1445,-0.09492 -0.31425,-0.14409 -0.48711,-0.14109zM43.86,104.13055c-0.16371,0.00227 -0.32338,0.05121 -0.46023,0.14109l-3.44,2.19031c-0.27415,0.15759 -0.43972,0.4529 -0.43114,0.769c0.00858,0.3161 0.18991,0.602 0.4722,0.74449c0.28229,0.14249 0.62,0.11859 0.87941,-0.06223l3.44,-2.19031c0.32902,-0.20267 0.48248,-0.59989 0.37518,-0.97112c-0.1073,-0.37123 -0.44901,-0.62533 -0.83542,-0.62122zM109.54586,120.39328c-0.34893,0.01906 -0.65165,0.24734 -0.7659,0.57759c-0.11426,0.33024 -0.01735,0.69679 0.2452,0.92741l3.06039,2.75133c0.22461,0.22633 0.556,0.30982 0.86103,0.21693c0.30503,-0.09288 0.53365,-0.3469 0.594,-0.66c0.06035,-0.3131 -0.05747,-0.63389 -0.30612,-0.8335l-3.05703,-2.75133c-0.17086,-0.15859 -0.39878,-0.24103 -0.63156,-0.22844z"></path>
              </g>
            </g>
          </svg>
          Google
        </button>
      </div>

      <p className=" text-xl">
        Already registered!{" "}
        <Link className="text-pink-700" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
