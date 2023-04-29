import { useSelector, useDispatch } from "react-redux";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

export default function Profile() {
  const { user, allEntries } = useSelector((depo) => depo);

  const m = allEntries.filter((i) => i.owner_id == user.id);

  /*   const d = new Date(entry.created_at);
  const tarih = formatDistanceToNow(d, { locale: tr, addSuffix: true }); */

  return (
    <div className="">
      <p className="text-center  border text-2xl font-suslu">Dwitlerim</p>
      <div className="flex flex-col-reverse w-full max-w-lg px-6 mx-auto font-suslu text-xl">
        {m.map((i) => (
          <div key={i.id} className="flex items-center ">
            <div className="w-16 h-16  rounded-full overflow-hidden">
              {i.avatar_url ? (
                <img
                  className="w-full h-full object-cover"
                  src={i.avatar_url}
                />
              ) : (
                <div className="bg-blue-100 h-full text-center leading-[6rem]">
                  {i.owner_name ? i.owner_name[0].toUpperCase() : "U"}
                </div>
              )}
            </div>
            <div className="px-6 flex-col py-8">
              <div className="flex items-baseline gap-10">
                <p>
                  <p className="text-base  text-black mb-2">{i.owner_name}</p>
                </p>
                <p className="text-base  text-stone-500 mb-2">
                  {formatDistanceToNow(new Date(i.created_at), {
                    locale: tr,
                    addSuffix: true,
                  })}
                </p>
              </div>
              <p>{i.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
