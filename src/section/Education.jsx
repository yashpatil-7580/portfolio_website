import { HiAcademicCap } from "react-icons/hi";
export default function Education() {
  const education = [
    {
      title: "SSC (10th)",
      institute: "Vidyaniketan English Medium School, Rajaramnagar",
      year: "2019-2020",
    },
    {
      title: "HSC (12th)",
      institute: "VidyaMandir Jr.College Urun-Iswarpur",
      year: "2020-2022",
    },
    {
      title: "B.E. Information Technology",
      institute: "D Y Patil Universtiy,Ambi Pune",
      year: "2022-2026",
    },
  ];

  return (
    <>
    <div id="education" className="bg-linear-to-r from-blue-50 to-cyan-50 min-h-screen">
      <div className="flex flex-col  mx-auto py-12 max-w-6xl gap-6  ">
        <h3 className="text-xl font-semibold">Education</h3>
        <h2 className="text-2xl font-bold">My Academic Journey</h2>
        <div className="flex flex-col gap-4 ">
          {education.map((edu, idx) => {
            return (
              <div key={idx} className="flex items-start gap-4  ">
                <div className="text-2xl" ><HiAcademicCap /></div>
                <div className="border border-cyan-200 bg-white rounded-2xl px-3 py-4 w-xl transition-all duration-300 -translate-y-1 hover:shadow-xl">
                  <h3 className="text-lg font-semibold">{edu.title}</h3>
                  <p>{edu.institute}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
     </div>
    </>
  );
}
