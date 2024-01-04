import React from "react";
import Image from "next/image";
import { HeaderOne, HeaderTitle } from "@/app/common/Header/h1";
import Schedule from "@/app/common/Schedule/schedule";
import Paging from "@/app/common/paging/paging";
import { format, startOfToday } from "date-fns";
import Button from "@/app/common/Button/button";

const data = [
  {
    img: "/avatar.png",
    name: "Dimitres Viga",
    money: "$ 50,036",
    status: "Complete",
  },
  {
    img: "/avatar.png",
    name: "Dimitres Viga",
    money: "$ 50,036",
    status: "Pending",
  },
  {
    img: "/avatar.png",
    name: "Dimitres Viga",
    money: "$ 50,036",
    status: "Complete",
  },
  {
    img: "/avatar.png",
    name: "Dimitres Viga",
    money: "$ 50,036",
    status: "Canceled",
  },
  {
    img: "/avatar.png",
    name: "Dimitres Viga",
    money: "$ 50,036",
    status: "Complete",
  },
  {
    img: "/avatar.png",
    name: "Dimitres Viga",
    money: "$ 50,036",
    status: "Canceled",
  },
  {
    img: "/avatar.png",
    name: "Dimitres Viga",
    money: "$ 50,036",
    status: "Pending",
  },
];

const TeacherInfo = () => {
  const bsA = "Basic Algorithm";
  const bsAr = "Basic Art";
  const bsHS = "HTML & CSS Class";
  const bsAl = "Simple Past Tense";
  let today = startOfToday();
  return (
    <>
      <div className="flex gap-1">
        <div className="p-4">
          <div>
            <div className=" bg-[#4D44B5] w-[1007px] h-[140px] rounded-t-2xl p-5">
              <div className="overflow-hidden top-2 left-6 relative flex justify-between">
                <Image
                  src={"/avatar.png"}
                  alt="logo"
                  width={164}
                  height={164}
                  className="rounded-full border-8 border-white"
                />
              </div>
            </div>
            <div className=" bg-[#FFFFFF] w-[1007px] h-[900px] rounded-b-2xl p-5">
              <div className="flex justify-end cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0012 9.36C11.6543 9.36 11.3109 9.42832 10.9904 9.56105C10.67 9.69378 10.3788 9.88833 10.1335 10.1336C9.88829 10.3788 9.69374 10.67 9.56101 10.9905C9.42828 11.3109 9.35996 11.6544 9.35996 12.0012C9.35996 12.348 9.42828 12.6915 9.56101 13.0119C9.69374 13.3324 9.88829 13.6236 10.1335 13.8688C10.3788 14.1141 10.67 14.3086 10.9904 14.4414C11.3109 14.5741 11.6543 14.6424 12.0012 14.6424C12.7017 14.6422 13.3734 14.3638 13.8686 13.8684C14.3638 13.373 14.6419 12.7011 14.6418 12.0006C14.6416 11.3001 14.3632 10.6284 13.8677 10.1332C13.3723 9.63796 12.7004 9.35984 12 9.36H12.0012ZM3.60116 9.36C3.25431 9.36 2.91086 9.42832 2.59042 9.56105C2.26997 9.69378 1.97881 9.88833 1.73355 10.1336C1.48829 10.3788 1.29374 10.67 1.16101 10.9905C1.02828 11.3109 0.959961 11.6544 0.959961 12.0012C0.959961 12.348 1.02828 12.6915 1.16101 13.0119C1.29374 13.3324 1.48829 13.6236 1.73355 13.8688C1.97881 14.1141 2.26997 14.3086 2.59042 14.4414C2.91086 14.5741 3.25431 14.6424 3.60116 14.6424C4.30165 14.6422 4.97339 14.3638 5.4686 13.8684C5.9638 13.373 6.24192 12.7011 6.24176 12.0006C6.2416 11.3001 5.96318 10.6284 5.46775 10.1332C4.97231 9.63796 4.30045 9.35984 3.59996 9.36H3.60116ZM20.4012 9.36C20.0543 9.36 19.7109 9.42832 19.3904 9.56105C19.07 9.69378 18.7788 9.88833 18.5336 10.1336C18.2883 10.3788 18.0937 10.67 17.961 10.9905C17.8283 11.3109 17.76 11.6544 17.76 12.0012C17.76 12.348 17.8283 12.6915 17.961 13.0119C18.0937 13.3324 18.2883 13.6236 18.5336 13.8688C18.7788 14.1141 19.07 14.3086 19.3904 14.4414C19.7109 14.5741 20.0543 14.6424 20.4012 14.6424C21.1017 14.6422 21.7734 14.3638 22.2686 13.8684C22.7638 13.373 23.0419 12.7011 23.0418 12.0006C23.0416 11.3001 22.7632 10.6284 22.2677 10.1332C21.7723 9.63796 21.1005 9.35984 20.4 9.36H20.4012Z"
                    fill="#A098AE"
                  />
                </svg>
              </div>
              <div className="mt-5 flex flex-col gap-1 p-5">
                <HeaderTitle title="Maria Historia" />
                <p className="font-semibold text-lg leading-normal text-[#A098AE]">
                  History Teacher
                </p>
                <div className="flex gap-20 mt-10">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-3 items-center ">
                      <div className="w-10 h-10 bg-[#FB7D5B] rounded-full flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19.4396 13C19.2196 13 18.9896 12.93 18.7696 12.88C18.3241 12.7818 17.8863 12.6515 17.4596 12.49C16.9957 12.3212 16.4858 12.33 16.0279 12.5146C15.5701 12.6992 15.1967 13.0466 14.9796 13.49L14.7596 13.94C13.7856 13.3982 12.8906 12.7252 12.0996 11.94C11.3144 11.149 10.6414 10.254 10.0996 9.27999L10.5196 8.99999C10.963 8.78291 11.3104 8.40952 11.495 7.95168C11.6796 7.49384 11.6884 6.9839 11.5196 6.51999C11.3608 6.09241 11.2305 5.65479 11.1296 5.20999C11.0796 4.98999 11.0396 4.75999 11.0096 4.52999C10.8882 3.82561 10.5192 3.18773 9.96923 2.73123C9.41923 2.27473 8.72431 2.0296 8.00961 2.03999H5.00961C4.57864 2.03594 4.15186 2.1248 3.75832 2.30052C3.36478 2.47624 3.01372 2.73469 2.72904 3.05827C2.44436 3.38186 2.23275 3.76298 2.1086 4.1757C1.98445 4.58842 1.95069 5.02305 2.00961 5.44999C2.54235 9.63937 4.45564 13.5319 7.44726 16.5126C10.4389 19.4934 14.3383 21.3925 18.5296 21.91H18.9096C19.647 21.9111 20.359 21.6405 20.9096 21.15C21.226 20.867 21.4787 20.5202 21.6511 20.1323C21.8235 19.7444 21.9116 19.3244 21.9096 18.9V15.9C21.8974 15.2054 21.6444 14.5365 21.194 14.0077C20.7435 13.4788 20.1234 13.1226 19.4396 13ZM19.9396 19C19.9394 19.142 19.909 19.2823 19.8504 19.4116C19.7918 19.5409 19.7063 19.6563 19.5996 19.75C19.4879 19.8465 19.3572 19.9185 19.216 19.9616C19.0748 20.0046 18.9262 20.0177 18.7796 20C15.0345 19.5198 11.5558 17.8065 8.89233 15.1303C6.22881 12.4541 4.53202 8.96733 4.06961 5.21999C4.0537 5.07351 4.06765 4.92532 4.11061 4.78438C4.15358 4.64344 4.22468 4.51268 4.31961 4.39999C4.41332 4.29332 4.52867 4.20783 4.65799 4.14921C4.78731 4.09058 4.92763 4.06017 5.06961 4.05999H8.06961C8.30216 4.05482 8.52924 4.13087 8.71176 4.27506C8.89428 4.41925 9.02082 4.62256 9.06961 4.84999C9.10961 5.12332 9.15961 5.39332 9.21961 5.65999C9.33513 6.18713 9.48887 6.70517 9.67961 7.20999L8.27961 7.85999C8.15991 7.91491 8.05223 7.99294 7.96277 8.08959C7.87331 8.18623 7.80381 8.2996 7.75828 8.42318C7.71275 8.54677 7.69208 8.67812 7.69746 8.80971C7.70284 8.9413 7.73415 9.07054 7.78961 9.18999C9.22881 12.2727 11.7069 14.7508 14.7896 16.19C15.0331 16.29 15.3062 16.29 15.5496 16.19C15.6743 16.1454 15.7889 16.0764 15.8868 15.9872C15.9846 15.8979 16.0638 15.7901 16.1196 15.67L16.7396 14.27C17.2566 14.4549 17.7842 14.6085 18.3196 14.73C18.5863 14.79 18.8563 14.84 19.1296 14.88C19.357 14.9288 19.5604 15.0553 19.7045 15.2378C19.8487 15.4204 19.9248 15.6474 19.9196 15.88L19.9396 19Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <p className="font-semibold leading-normal text-lg text-[#303972]">
                        +12 345 6789 0
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 bg-[#FB7D5B] rounded-full flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 15.4 11.05 21.5 11.35 21.76C11.5311 21.9149 11.7616 22.0001 12 22.0001C12.2384 22.0001 12.4689 21.9149 12.65 21.76C13 21.5 20 15.4 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2ZM12 19.65C9.87 17.65 6 13.34 6 10C6 8.4087 6.63214 6.88258 7.75736 5.75736C8.88258 4.63214 10.4087 4 12 4C13.5913 4 15.1174 4.63214 16.2426 5.75736C17.3679 6.88258 18 8.4087 18 10C18 13.34 14.13 17.66 12 19.65ZM12 6C11.2089 6 10.4355 6.2346 9.77772 6.67412C9.11992 7.11365 8.60723 7.73836 8.30448 8.46927C8.00173 9.20017 7.92252 10.0044 8.07686 10.7804C8.2312 11.5563 8.61216 12.269 9.17157 12.8284C9.73098 13.3878 10.4437 13.7688 11.2196 13.9231C11.9956 14.0775 12.7998 13.9983 13.5307 13.6955C14.2616 13.3928 14.8864 12.8801 15.3259 12.2223C15.7654 11.5645 16 10.7911 16 10C16 8.93913 15.5786 7.92172 14.8284 7.17157C14.0783 6.42143 13.0609 6 12 6ZM12 12C11.6044 12 11.2178 11.8827 10.8889 11.6629C10.56 11.4432 10.3036 11.1308 10.1522 10.7654C10.0009 10.3999 9.96126 9.99778 10.0384 9.60982C10.1156 9.22186 10.3061 8.86549 10.5858 8.58579C10.8655 8.30608 11.2219 8.1156 11.6098 8.03843C11.9978 7.96126 12.3999 8.00087 12.7654 8.15224C13.1308 8.30362 13.4432 8.55996 13.6629 8.88886C13.8827 9.21776 14 9.60444 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <p className="font-semibold leading-normal text-lg text-[#303972]">
                        Jakarta, Indonesia
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 bg-[#FB7D5B] rounded-full flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM18.427 6L12.6 10.8C12.4335 10.9267 12.2312 10.9976 12.022 11.0026C11.8129 11.0077 11.6074 10.9465 11.435 10.828L5.573 6H18.427ZM19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7.3L10.2 12.4C10.7159 12.7863 11.3435 12.9944 11.988 12.993C12.6551 12.992 13.3037 12.774 13.836 12.372L20 7.3V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <p className="font-semibold leading-normal text-lg text-[#303972]">
                        Hope@mail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 space-y-2">
                  <HeaderOne title="About:" />
                  <p className="font-normal text-lg leading-normal text-[#303972]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do <br /> eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut <br />
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris
                    <br /> nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="mt-8">
                  <HeaderOne title="Education:" />
                  <div className="p-4 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="font-semibold text-lg leading-normal text-[#303972]">
                        History Major, University Akademi Historia
                      </div>
                      <p className="font-normal text-lg leading-normal text-[#A098AE]">2013-2017</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="font-semibold text-lg leading-normal text-[#303972]">Master of History, University Akademi Historia</div>
                      <p className="font-normal text-lg leading-normal text-[#A098AE]">2017-2020</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 space-y-6">
                  <HeaderOne title="Expertise:" />
                  <p className="font-semibold text-lg leading-normal text-[#303972]">
                    World History, Philosophy, Prehistoric, Culture, Ancient
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="bg-[white] w-[428px] h-[129px] rounded-2xl flex flex-4 p-6">
            <div>
              <h1 className="text-2xl font-bold leading-normal text-[#363B64]">
                Schedule Details
              </h1>
              <p className="text-sm font-normal leading-normal text-[#A098AE]">
                {format(today, "yyyy/MM/dd")}
              </p>
            </div>
          </div>
          <Schedule
            subject="Algorithm"
            title="Basic Algorithm"
            date="March 20, 2021"
            time="09.00 - 10.00 AM"
            img="/avatar.png"
            bgCl={`${bsA === "Basic Algorithm" && "bg-[#303972]"}`}
          />
          <Schedule
            subject="Basic Art"
            title="Art"
            date="March 20, 2021"
            time="09.00 - 10.00 AM"
            img="/avatar.png"
            bgCl={`${bsAr === "Basic Art" && "bg-[#FB7D5B]"}`}
          />
          <Schedule
            subject="HTML & CSS Class"
            title="Programming"
            date="March 20, 2021"
            time="09.00 - 10.00 AM"
            img="/avatar.png"
            bgCl={`${bsHS === "HTML & CSS Class" && "bg-[#FCC43E]"}`}
          />
          <Schedule
            subject="Simple Past Tense"
            title="English"
            date="March 20, 2021"
            time="09.00 - 10.00 AM"
            img="/avatar.png"
            bgCl={`${bsAl === "Simple Past Tense" && "bg-[#303972]"}`}
          />
          <Button title="View More" />
        </div>
      </div>
    </>
  );
};

export default TeacherInfo;
