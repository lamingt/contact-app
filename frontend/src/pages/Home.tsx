import usePromise from "react-promise-suspense";
import { getUsers } from "../api";
import { Link } from "react-router";
import type { Users } from "../Types";

type GroupedUsers = Record<string, Users[number][]>;

export default function Home() {
  const users: Users = usePromise(getUsers, []);
  console.log(users);
  users.sort((user1, user2) => user1.name.localeCompare(user2.name));
  const grouped: GroupedUsers = {};
  for (const user of users) {
    const name = user.name;
    const letter = name[0];
    if (!grouped[letter]) {
      grouped[letter] = [];
    }
    grouped[letter].push(user);
  }

  return (
    <div className="lg:w-[50vw] xl:w-[40vw] h-[95vh] lg:ml-[25vw] xl:ml-[30vw]">
      <div className="flex flex-col">
        <div className="flex justify-center mt-[20px] mb-5">
          <p className="text-4xl md:text-5xl">Contacts</p>
        </div>
        <div>
          {Object.entries(grouped).map(([letter, users]) => (
            <div className="flex flex-col" key={letter}>
              <div className="text-2xl border-b-2">
                <div className="ml-4 mt-5">{letter}</div>
              </div>
              {users.map((user) => (
                <div className="border-b-1 flex items-center bg-gray-50" key={user.id}>
                  <div className="ml-4 mt-2 mb-2">
                    <div className="flex justify-between w-[90vw] lg:w-[48vw] xl:w-[38vw]">
                      <Link
                        to={`/${user.id}`}
                        className="flex gap-3 items-center hover:cursor-pointer hover:underline decoration-[#4A4FC7]"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
                          className="w-10"
                        />
                        <p className="font-bold ">{user.name}</p>
                      </Link>

                      <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 hover:cursor-pointer">
                        <img src="/phone.svg" className="w-6" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
