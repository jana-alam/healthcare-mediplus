import useDoctors from "../../../hooks/useDoctors";
import Doctor from "../Doctor/Doctor";

const OurDoctors = () => {
  const { doctors } = useDoctors();
  return (
    <div className="bg-gray-100 px-2">
      {/*  Doctors sections*/}
      <div className="md:container mx-auto py-12 text-center ">
        <div className="text-right">
          <h4 className="text-2xl mb-10">Our Doctors</h4>
          <h2 className="text-4xl md:text-6xl">Who Will Be</h2>
          <h2 className="text-4xl md:text-6xl font-bold text-pink-600 mt-4">
            Caring For You?
          </h2>
        </div>
        {/* Doctors COntainer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* Single Doctor */}
          {doctors.map((doctor) => (
            <Doctor key={`doctor-${doctor.id}`} doctor={doctor}></Doctor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;
