import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

export default function Entry({ entry }) {
  const d = new Date(entry.created_at);
  const tarih = formatDistanceToNow(d, { locale: tr, addSuffix: true });

  return (
    <div className="flex px-6 py-8 gap-4 items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden">
        {entry.avatar_url ? (
          <img className="w-full h-full object-cover" src={entry.avatar_url} />
        ) : (
          <div className="bg-blue-100 h-full text-center leading-[6rem]">
            {entry.owner_name ? entry.owner_name[0].toUpperCase() : "U"}
          </div>
        )}
      </div>
      <div className="px-6 flex-col py-2">
        <div className="flex items-baseline gap-10">
          <p className="text-xl">{entry.owner_name}</p>
          <p className="text-base  text-stone-500 mb-2">{tarih}</p>
        </div>
        <p>{entry.body}</p>
      </div>
    </div>
  );
}
