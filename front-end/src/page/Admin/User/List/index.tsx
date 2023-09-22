import "@/public/css/table.css";
import { Table } from "antd";
import { useFetchUserQuery } from "@/api/auth";
import ButtonAdmin from "@/components/ButtonAdmin";
const ListUser = () => {
  const { data } = useFetchUserQuery();

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "vai trò",
      dataIndex: "role_id",
      key: "role_id",
      render: (role_id: number) => {
        if (role_id === 1) {
          return "Admin";
        } else if (role_id === 2) {
          return "Người dùng";
        }
        return null;
      },
    },
    {
      title: "hành động",
      dataIndex: "id",
      key: "",
      render: () => (
        <>
          <ButtonAdmin link={`/admin`} title="Sửa" edit />
          <button className="font-sans border border-alizarin-crimson text-sm text-white bg-alizarin-crimson px-5 py-1 rounded-3xl hover:bg-white hover:text-alizarin-crimson ml-2">
            block
          </button>
        </>
      ),
    },
  ];
  return (
    <>
      <h1 className="md:ml-16 md:text-left text-center mt-5 text-3xl font-semibold dark:text-white text-black">
        Danh sách user
      </h1>
      <Table
        columns={columns}
        dataSource={data}
        className=" bg-white md:w-[90%] md:ml-16 sm:mx-auto mx-2 rounded-md mt-5 border border-[#f0f0f0] w-[600px] overflow-x-scroll z-0"
      />
    </>
  );
};
export default ListUser;
