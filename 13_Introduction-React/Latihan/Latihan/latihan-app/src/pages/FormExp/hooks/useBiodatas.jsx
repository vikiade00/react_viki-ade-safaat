import { useCallback, useState } from "react";
import { api } from "../../../api";
import { message } from "antd";

// get data
export const userGetBiodata = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const getdata = useCallback(async () => {
    try {
      const res = await api.getBiodata();
      setData(res?.data);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, data, getdata];
};

// create data
export const userPostBiodata = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createData = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true);
      await api.createBiodata(body);
      onSuccess && onSuccess();
      message.open({
        type: "success",
        content: "Data Berhasil Di Tambah",
      });
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, createData];
};

// update data
export const useUpdateBiodata = () => {
  const [isLoading, setIsLoading] = useState(false);

  const updateBiodata = useCallback(async (id, body, onSuccess) => {
    try {
      setIsLoading(true);
      await api.updateBiodata(id, body);
      onSuccess && onSuccess();
      message.open({
        type: "success",
        content: "Data Berhasil Di Tambah",
      });
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, updateBiodata];
};

// delete data
export const userDeleteBiodata = () => {
  const [isLoading, setIsLoading] = useState(false);

  const deleteData = useCallback(async (id, onSuccess) => {
    try {
      setIsLoading(true);
      await api.deleteBiodata(id);
      onSuccess && onSuccess();
      message.open({
        type: "success",
        content: "Data Berhasil Di Hapus",
      });
      setIsLoading(false);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, deleteData];
};
