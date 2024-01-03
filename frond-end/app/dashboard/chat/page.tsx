import Button from "@/app/common/Button/button";
import Info, { DataProp } from "@/app/common/groupInfo/Info";
import Image from "next/image";
import React from "react";

const Chat = () => {
  const dataClass = [
    {
      logo: "/avatar.png",
      class: "Class History VII-A",
      title: "Lorem ipsum dolor sit amet...",
      time: "12:45 PM",
      mes: "2",
    },
    {
      logo: "/avatar.png",
      class: "Class History VII-A",
      title: "Lorem ipsum dolor sit amet...",
      time: "12:45 PM",
      mes: "2",
    },
    {
      logo: "/avatar.png",
      class: "Class History VII-A",
      title: "Lorem ipsum dolor sit amet...",
      time: "12:45 PM",
      mes: "2",
    },
  ];
  const dataUser = [
    {
      logo: "/avatar.png",
      class: "Samantha William",
      title: "Lorem ipsum dolor sit amet...",
      time: "12:45 PM",
      mes: "2",
    },
    {
      logo: "/avatar.png",
      class: "Tony Soap",
      title: "Lorem ipsum dolor sit amet...",
      time: "12:45 PM",
      mes: "2",
    },
    {
      logo: "/avatar.png",
      class: "Karen Hope",
      title: "Lorem ipsum dolor sit amet...",
      time: "12:45 PM",
      mes: "2",
    },
  ];
  return (
    <>
      <div className="p-5 flex">
        <div className="w-[507px] h-[1007px] bg-white rounded-l-2xl border-r-2 border-[#C1BBEB]">
          <div className="flex flex-col gap-1 p-5">
            <h1 className="p-2 font-semibold leading-normal text-2xl text-[#303972]">
              Messages
            </h1>
            <div className="flex items-center gap-3 bg-white p-3 rounded-full border-2 border-[#A098AE] mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M27.6 25.8L22 20.2C23.3 18.5 24.1 16.4 24.1 14.1C24.1 8.60001 19.6 4.10001 14.1 4.10001C8.6 4.10001 4 8.60001 4 14.1C4 19.6 8.5 24.1 14 24.1C16.3 24.1 18.5 23.3 20.2 21.9L25.8 27.5C26 27.7 26.4 27.9 26.7 27.9C27 27.9 27.3 27.8 27.6 27.5C28.1 27.1 28.1 26.3 27.6 25.8ZM6.5 14.1C6.5 10 9.9 6.60001 14 6.60001C18.1 6.60001 21.5 10 21.5 14.1C21.5 18.2 18.1 21.6 14 21.6C9.9 21.6 6.5 18.3 6.5 14.1Z"
                  fill="#4D44B5"
                />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-black outline-none"
              />
            </div>
            <h5 className="p-3 font-semibold leading-normal text-lg text-[#A098AE]">
              Groups
            </h5>
            {dataClass.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <Info
                logo={item.logo}
                class={item.class}
                title={item.title}
                time={item.time}
                mes={item.mes}
              />
            ))}
            <h5 className="p-3 font-semibold leading-normal text-lg text-[#A098AE]">
              Chats
            </h5>
            {dataUser.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <Info
                logo={item.logo}
                class={item.class}
                title={item.title}
                time={item.time}
                mes={item.mes}
              />
            ))}
          </div>
          <Button title="View More" />
        </div>
        <div className="w-[800px] h-[1007px] bg-white rounded-r-2xl">
          <div className="p-3 mt-3">
            <div className="flex justify-between items-center p-2">
              <div className="flex gap-3 items-center">
                <Image
                  src={"/avatar.png"}
                  alt="logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <h1 className="font-bold text-2xl leading-normal text-[#303972]">
                    Samantha WIlliam
                  </h1>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <circle cx="8" cy="8" r="8" fill="#4CBC9A" />
                    </svg>
                    <p className="font-normal text-lg leading-normal text-[#A098AE]">
                      Online
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M19.9997 8H3.99967C2.52691 8 1.33301 9.19391 1.33301 10.6667V21.3333C1.33301 22.8061 2.52691 24 3.99967 24H19.9997C21.4724 24 22.6663 22.8061 22.6663 21.3333V10.6667C22.6663 9.19391 21.4724 8 19.9997 8Z"
                      stroke="#A098AE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M30.666 9.33325V22.6666L22.666 15.9999L30.666 9.33325Z"
                      stroke="#A098AE"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.0012 9.35986C11.6543 9.35986 11.3109 9.42818 10.9904 9.56091C10.67 9.69365 10.3788 9.88819 10.1335 10.1335C9.88829 10.3787 9.69374 10.6699 9.56101 10.9903C9.42828 11.3108 9.35996 11.6542 9.35996 12.0011C9.35996 12.3479 9.42828 12.6914 9.56101 13.0118C9.69374 13.3323 9.88829 13.6234 10.1335 13.8687C10.3788 14.1139 10.67 14.3085 10.9904 14.4412C11.3109 14.5739 11.6543 14.6423 12.0012 14.6423C12.7017 14.6421 13.3734 14.3637 13.8686 13.8682C14.3638 13.3728 14.6419 12.701 14.6418 12.0005C14.6416 11.3 14.3632 10.6282 13.8677 10.133C13.3723 9.63782 12.7004 9.3597 12 9.35986H12.0012ZM3.60116 9.35986C3.25431 9.35986 2.91086 9.42818 2.59042 9.56091C2.26997 9.69365 1.97881 9.88819 1.73355 10.1335C1.48829 10.3787 1.29374 10.6699 1.16101 10.9903C1.02828 11.3108 0.959961 11.6542 0.959961 12.0011C0.959961 12.3479 1.02828 12.6914 1.16101 13.0118C1.29374 13.3323 1.48829 13.6234 1.73355 13.8687C1.97881 14.1139 2.26997 14.3085 2.59042 14.4412C2.91086 14.5739 3.25431 14.6423 3.60116 14.6423C4.30165 14.6421 4.97339 14.3637 5.4686 13.8682C5.9638 13.3728 6.24192 12.701 6.24176 12.0005C6.2416 11.3 5.96318 10.6282 5.46775 10.133C4.97231 9.63782 4.30045 9.3597 3.59996 9.35986H3.60116ZM20.4012 9.35986C20.0543 9.35986 19.7109 9.42818 19.3904 9.56091C19.07 9.69365 18.7788 9.88819 18.5336 10.1335C18.2883 10.3787 18.0937 10.6699 17.961 10.9903C17.8283 11.3108 17.76 11.6542 17.76 12.0011C17.76 12.3479 17.8283 12.6914 17.961 13.0118C18.0937 13.3323 18.2883 13.6234 18.5336 13.8687C18.7788 14.1139 19.07 14.3085 19.3904 14.4412C19.7109 14.5739 20.0543 14.6423 20.4012 14.6423C21.1017 14.6421 21.7734 14.3637 22.2686 13.8682C22.7638 13.3728 23.0419 12.701 23.0418 12.0005C23.0416 11.3 22.7632 10.6282 22.2677 10.133C21.7723 9.63782 21.1005 9.3597 20.4 9.35986H20.4012Z"
                      fill="#A098AE"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#C1BBEB]"></div>
          <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
            <ul className="space-y-2">
              <li className="flex justify-start">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                  <span className="block">Hi</span>
                </div>
              </li>
              <li className="flex justify-end">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                  <span className="block">Hiiii</span>
                </div>
              </li>
              <li className="flex justify-end">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                  <span className="block">how are you?</span>
                </div>
              </li>
              <li className="flex justify-start">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                  <span className="block">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-between p-5 border-t border-gray-300">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Message"
                className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                name="message"
                required
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </button>
              <button type="submit">
                <svg
                  className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
