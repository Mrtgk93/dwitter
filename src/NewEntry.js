import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addEntry } from "./redux-stuff/actions";
import React, { useState } from "react";

export default function NewEntry() {
  const [showModal, setShowModal] = useState(false);
  const { user, token } = useSelector((depo) => depo);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    const gidecekVeri = { ...data, owner_id: user.id };
    dispatch(addEntry(gidecekVeri, token));
  };
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return user ? (
    /* (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-white rounded border mb-10 p-6 max-w-md mx-auto"
    >
      <div className=" mb-4">
        <div className="flex justify-between items-baseline">
          <label htmlFor="body">Entry</label>
          {errors?.body && (
            <span className="text-sm text-red-700">{errors.body.message}</span>
          )}
        </div>
        <input
          id="body"
          {...register("body", { required: "Entry boş olamaz" })}
        />
      </div>
      <div className="">
        <div className="flex justify-between items-baseline">
          <label htmlFor="img_url">image</label>
        </div>
        <input id="img_url" {...register("img_url")} />{" "}
      </div>

      {errors?.exampleRequired && <span>This field is required</span>}

      <button className="action-button" type="submit" disabled={!isValid}>
        Entry ekle
      </button>
    </form>
  ) */ <div className="flex justify-center">
      {/* Buton */}
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Entry Gir
      </button>

      {/* Modal Ekranı */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={closeModal}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label
                      htmlFor="body"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Entry
                    </label>
                    {errors?.body && (
                      <span className="text-sm text-red-700">
                        {errors.body.message}
                      </span>
                    )}
                    <input
                      id="body"
                      {...register("body", { required: "Entry boş olamaz" })}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="img_url"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Image URL
                    </label>
                    <input
                      type="text"
                      id="img_url"
                      {...register("img_url")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Kapat
                    </button>
                    <button
                      disabled={!isValid}
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Entry Ekle
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : null;
}
