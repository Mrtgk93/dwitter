import React, { useEffect } from "react";
import Entry from "./Entry";
import { useSelector, useDispatch } from "react-redux";
import { getAllEntries } from "./redux-stuff/actions";

export default function AllEntries() {
  const entries = useSelector((depo) => depo.allEntries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEntries());
  }, []);

  return (
    <div className=" font-suslu text-3xl flex flex-col-reverse">
      {entries.map((entry) => (
        <div key={entry.id}>
          <Entry entry={entry} />
        </div>
      ))}
    </div>
  );
}
