import { Link, useParams } from "react-router";
import type { User, Users } from "../Types";
import usePromise from "react-promise-suspense";
import { getUsers } from "../api";

export default function Contact() {
  const params = useParams<{ id: string }>();
  const users: Users = usePromise(getUsers, []);
  const user: User | undefined = users.find((u) => u.id == parseInt(params.id!, 10));

  return (
    user && (
      <div className="lg:w-[50vw] xl:w-[40vw] h-[95vh] lg:ml-[25vw] xl:ml-[30vw] mt-[50px]">
        <div className="flex flex-col items-center">
          <div>
            <div className="border-1 relative left-[-90px] md:left-[-100px] border-black rounded-md w-[50px] hover:cursor-pointer hover:bg-gray-200 hover:border-[#4A4FC7]">
              <Link to="/">
                <img src="/back_arrow.svg" className="w-[50px] p-[10px]" />
              </Link>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
              className="w-30"
            />
          </div>
          <p className="mt-[20px] font-semibold text-4xl">{user.name}</p>
          <div className="flex items-center gap-[10px] mt-[20px]">
            <img src="/user.svg" className="w-[30px]" />
            <p className="text-xl text-[#666666]">{user.username}</p>
          </div>
          <div className="flex flex-row mt-[40px] gap-[30px] md:gap-[50px]">
            <div className="w-[80px] h-[50px] bg-[#4A4FC7] rounded-md flex items-center justify-center hover:cursor-pointer hover:bg-[#3B3F9F]">
              <img src="/white_phone.svg" className="w-[25px]" />
            </div>
            <div className="border-[#666666] border-1 w-[80px] h-[50px] rounded-md flex items-center justify-center hover:cursor-pointer hover:bg-gray-200 hover:border-[#4A4FC7]">
              <img src="/camera.svg" className="w-[25px]" />
            </div>
            <div className="border-[#666666] border-1 w-[80px] h-[50px] rounded-md flex items-center justify-center hover:cursor-pointer hover:bg-gray-200 hover:border-[#4A4FC7]">
              <img src="/message.svg" className="w-[25px]" />
            </div>
          </div>
          <div className="mt-[60px] w-[300px] sm:w-[500px]">
            <div className="border-[#666666] border-t-1 flex flex-row items-center h-[60px] pl-[30px] gap-[15px]">
              <img src="/phone.svg" className="w-[25px]" />
              {user.phone}
            </div>
            <div className="border-[#666666] border-t-1 flex flex-row items-center h-[60px] pl-[30px] gap-[15px]">
              <img src="/email.svg" className="w-[25px]" />
              {user.email}
            </div>
            <div className="border-[#666666] border-t-1 flex flex-row items-center h-[60px] pl-[30px] gap-[15px]">
              <img src="/company.svg" className="w-[25px]" />
              {user.company.name}
            </div>
            <div className="border-[#666666] border-t-1 flex flex-row items-center h-[60px] pl-[30px] gap-[15px]">
              <img src="/website.svg" className="w-[25px]" />
              {user.website}
            </div>
            <div className="border-[#666666] border-t-1 flex flex-row items-center h-[60px] pl-[30px] gap-[15px]">
              <img src="/location.svg" className="w-[25px]" />
              {user.address.city}
            </div>
            <div className="border-[#666666] border-t-1 border-b-1 flex flex-row items-center h-[60px] pl-[30px] gap-[15px] mb-[50px]">
              <img src="/home.svg" className="w-[25px]" />
              {user.address.street}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
