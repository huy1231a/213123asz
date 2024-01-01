import Image from "next/image";
import React from "react";

const RecentStudent = () => {
  const dataInfo = [
    {
      img: "/avatar.png",
      name: "Samantha William",
      class: "Class VII A",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20 4.00011H4C3.20435 4.00011 2.44129 4.31619 1.87868 4.87879C1.31607 5.4414 1 6.20446 1 7.00011V17.0001C1 17.7958 1.31607 18.5588 1.87868 19.1214C2.44129 19.684 3.20435 20.0001 4 20.0001H20C20.7956 20.0001 21.5587 19.684 22.1213 19.1214C22.6839 18.5588 23 17.7958 23 17.0001V7.00011C23 6.20446 22.6839 5.4414 22.1213 4.87879C21.5587 4.31619 20.7956 4.00011 20 4.00011ZM21 16.7501L16.1 12.3501L21 8.92011V16.7501ZM3 8.92011L7.9 12.3501L3 16.7501V8.92011ZM9.58 13.5301L11.43 14.8201C11.5974 14.9362 11.7963 14.9985 12 14.9985C12.2037 14.9985 12.4026 14.9362 12.57 14.8201L14.42 13.5301L19.42 18.0001H4.6L9.58 13.5301ZM4 6.00011H20C20.1857 6.0016 20.3673 6.05478 20.5245 6.15369C20.6817 6.2526 20.8083 6.39333 20.89 6.56011L12 12.7801L3.11 6.56011C3.19171 6.39333 3.31826 6.2526 3.47545 6.15369C3.63265 6.05478 3.81428 6.0016 4 6.00011Z"
            fill="#A098AE"
          />
        </svg>
      ),
    },
    {
      img: "/avatar.png",
      name: "Samantha William",
      class: "Class VII A",
      chose: "false",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20 4.00011H4C3.20435 4.00011 2.44129 4.31619 1.87868 4.87879C1.31607 5.4414 1 6.20446 1 7.00011V17.0001C1 17.7958 1.31607 18.5588 1.87868 19.1214C2.44129 19.684 3.20435 20.0001 4 20.0001H20C20.7956 20.0001 21.5587 19.684 22.1213 19.1214C22.6839 18.5588 23 17.7958 23 17.0001V7.00011C23 6.20446 22.6839 5.4414 22.1213 4.87879C21.5587 4.31619 20.7956 4.00011 20 4.00011ZM21 16.7501L16.1 12.3501L21 8.92011V16.7501ZM3 8.92011L7.9 12.3501L3 16.7501V8.92011ZM9.58 13.5301L11.43 14.8201C11.5974 14.9362 11.7963 14.9985 12 14.9985C12.2037 14.9985 12.4026 14.9362 12.57 14.8201L14.42 13.5301L19.42 18.0001H4.6L9.58 13.5301ZM4 6.00011H20C20.1857 6.0016 20.3673 6.05478 20.5245 6.15369C20.6817 6.2526 20.8083 6.39333 20.89 6.56011L12 12.7801L3.11 6.56011C3.19171 6.39333 3.31826 6.2526 3.47545 6.15369C3.63265 6.05478 3.81428 6.0016 4 6.00011Z"
            fill="#A098AE"
          />
        </svg>
      ),
    },
    {
      img: "/avatar.png",
      name: "Samantha William",
      class: "Class VII A",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20 4.00011H4C3.20435 4.00011 2.44129 4.31619 1.87868 4.87879C1.31607 5.4414 1 6.20446 1 7.00011V17.0001C1 17.7958 1.31607 18.5588 1.87868 19.1214C2.44129 19.684 3.20435 20.0001 4 20.0001H20C20.7956 20.0001 21.5587 19.684 22.1213 19.1214C22.6839 18.5588 23 17.7958 23 17.0001V7.00011C23 6.20446 22.6839 5.4414 22.1213 4.87879C21.5587 4.31619 20.7956 4.00011 20 4.00011ZM21 16.7501L16.1 12.3501L21 8.92011V16.7501ZM3 8.92011L7.9 12.3501L3 16.7501V8.92011ZM9.58 13.5301L11.43 14.8201C11.5974 14.9362 11.7963 14.9985 12 14.9985C12.2037 14.9985 12.4026 14.9362 12.57 14.8201L14.42 13.5301L19.42 18.0001H4.6L9.58 13.5301ZM4 6.00011H20C20.1857 6.0016 20.3673 6.05478 20.5245 6.15369C20.6817 6.2526 20.8083 6.39333 20.89 6.56011L12 12.7801L3.11 6.56011C3.19171 6.39333 3.31826 6.2526 3.47545 6.15369C3.63265 6.05478 3.81428 6.0016 4 6.00011Z"
            fill="#A098AE"
          />
        </svg>
      ),
    },
    {
      img: "/avatar.png",
      name: "Samantha William",
      class: "Class VII A",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20 4.00011H4C3.20435 4.00011 2.44129 4.31619 1.87868 4.87879C1.31607 5.4414 1 6.20446 1 7.00011V17.0001C1 17.7958 1.31607 18.5588 1.87868 19.1214C2.44129 19.684 3.20435 20.0001 4 20.0001H20C20.7956 20.0001 21.5587 19.684 22.1213 19.1214C22.6839 18.5588 23 17.7958 23 17.0001V7.00011C23 6.20446 22.6839 5.4414 22.1213 4.87879C21.5587 4.31619 20.7956 4.00011 20 4.00011ZM21 16.7501L16.1 12.3501L21 8.92011V16.7501ZM3 8.92011L7.9 12.3501L3 16.7501V8.92011ZM9.58 13.5301L11.43 14.8201C11.5974 14.9362 11.7963 14.9985 12 14.9985C12.2037 14.9985 12.4026 14.9362 12.57 14.8201L14.42 13.5301L19.42 18.0001H4.6L9.58 13.5301ZM4 6.00011H20C20.1857 6.0016 20.3673 6.05478 20.5245 6.15369C20.6817 6.2526 20.8083 6.39333 20.89 6.56011L12 12.7801L3.11 6.56011C3.19171 6.39333 3.31826 6.2526 3.47545 6.15369C3.63265 6.05478 3.81428 6.0016 4 6.00011Z"
            fill="#A098AE"
          />
        </svg>
      ),
    },
    {
      img: "/avatar.png",
      name: "Samantha William",
      class: "Class VII A",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20 4.00011H4C3.20435 4.00011 2.44129 4.31619 1.87868 4.87879C1.31607 5.4414 1 6.20446 1 7.00011V17.0001C1 17.7958 1.31607 18.5588 1.87868 19.1214C2.44129 19.684 3.20435 20.0001 4 20.0001H20C20.7956 20.0001 21.5587 19.684 22.1213 19.1214C22.6839 18.5588 23 17.7958 23 17.0001V7.00011C23 6.20446 22.6839 5.4414 22.1213 4.87879C21.5587 4.31619 20.7956 4.00011 20 4.00011ZM21 16.7501L16.1 12.3501L21 8.92011V16.7501ZM3 8.92011L7.9 12.3501L3 16.7501V8.92011ZM9.58 13.5301L11.43 14.8201C11.5974 14.9362 11.7963 14.9985 12 14.9985C12.2037 14.9985 12.4026 14.9362 12.57 14.8201L14.42 13.5301L19.42 18.0001H4.6L9.58 13.5301ZM4 6.00011H20C20.1857 6.0016 20.3673 6.05478 20.5245 6.15369C20.6817 6.2526 20.8083 6.39333 20.89 6.56011L12 12.7801L3.11 6.56011C3.19171 6.39333 3.31826 6.2526 3.47545 6.15369C3.63265 6.05478 3.81428 6.0016 4 6.00011Z"
            fill="#A098AE"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      <div className="flex justify-between  items-center mt-5 p-2">
        <div>
          <h1 className="text-2xl font-bold text-[#303972]">Recent Students</h1>
          <p className="text-[#A098AE] text-base font-semibold">
            You have 456 students
          </p>
        </div>
        <div className="w-12 h-12 rounded-full bg-[#4D44B5] flex items-center justify-center">
          <span className="text-white font-bold text-2xl text-center cursor-pointer">
            +
          </span>
        </div>
      </div>
      {dataInfo.map((item) => (
        <>
          <div className="flex justify-between mt-4 p-2">
            <div className="flex gap-3">
              <Image
                src={item.img}
                alt="icon"
                width={49}
                height={49}
                className="rounded-full"
              />
              <div className="space-x-0 flex flex-col gap-1">
                <h1 className="text-sm font-semibold text-[#303972]">
                  {item.name}
                </h1>
                <p className="text-sm font-normal text-[#A098AE]">
                  {item.class}
                </p>
              </div>
            </div>

            <div
              className={`w-12 h-12 ${
                item.chose === "false" ? "bg-[#4D44B5] border-none" : ""
              } border-[#A098AE] rounded-full border-2 flex justify-center items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 4.00011H4C3.20435 4.00011 2.44129 4.31619 1.87868 4.87879C1.31607 5.4414 1 6.20446 1 7.00011V17.0001C1 17.7958 1.31607 18.5588 1.87868 19.1214C2.44129 19.684 3.20435 20.0001 4 20.0001H20C20.7956 20.0001 21.5587 19.684 22.1213 19.1214C22.6839 18.5588 23 17.7958 23 17.0001V7.00011C23 6.20446 22.6839 5.4414 22.1213 4.87879C21.5587 4.31619 20.7956 4.00011 20 4.00011ZM21 16.7501L16.1 12.3501L21 8.92011V16.7501ZM3 8.92011L7.9 12.3501L3 16.7501V8.92011ZM9.58 13.5301L11.43 14.8201C11.5974 14.9362 11.7963 14.9985 12 14.9985C12.2037 14.9985 12.4026 14.9362 12.57 14.8201L14.42 13.5301L19.42 18.0001H4.6L9.58 13.5301ZM4 6.00011H20C20.1857 6.0016 20.3673 6.05478 20.5245 6.15369C20.6817 6.2526 20.8083 6.39333 20.89 6.56011L12 12.7801L3.11 6.56011C3.19171 6.39333 3.31826 6.2526 3.47545 6.15369C3.63265 6.05478 3.81428 6.0016 4 6.00011Z"
                  fill={`${item.chose === "false" ? "white" : "#A098AE"}`}
                />
              </svg>
            </div>
          </div>
        </>
      ))}
      <div className="flex items-center justify-center mt-6">
        <button className="w-80 h-16 flex-shrink-0 bg-[#4D44B51A] rounded-full">
          <p className="text-[#4D44B5] text-lg font-semibold font-">View More</p>
        </button>
      </div>
    </>
  );
};

export default RecentStudent;
