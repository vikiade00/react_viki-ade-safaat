import { useCallback, useState } from "react";
import { api } from "../../../api";
import { message } from "antd";
// Get Data
export const useGetProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const getData = useCallback(async () => {
    try {
      const res = await api.getProduct();
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
  return [isLoading, data, getData];
};

// Create Data Product
export const usePostProduct = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createData = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true);
      await api.createProduct(body);
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

// Update data product
export const useUpdateProduct = () => {
  const [isLoading, setIsLoading] = useState(false);

  const updateData = useCallback(async (id, body, onSuccess) => {
    try {
      setIsLoading(true);
      await api.updateProduct(id, body);
      onSuccess && onSuccess();
      message.open({
        type: "success",
        content: "Berhasil update data",
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

  return [isLoading, updateData];
};

// Delete Data Product
export const useDeleteProduct = () => {
  const [isLoading, setIsLoading] = useState(false);

  const deleteData = useCallback(async (id, onSuccess) => {
    try {
      setIsLoading(true);
      await api.deleteProduct(id);
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
