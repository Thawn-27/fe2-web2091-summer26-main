import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

import { Form, Input, Button } from "antd";
import { Modal } from "antd";
import { useState } from "react";
import { Table } from "antd";
import { Layout } from "antd";

function App() {
  const onFinish = (values: any) => {
    console.log(values);
  };

    const [open, setOpen] = useState(false);

    const { Header, Content, Footer } = Layout;

    const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Email", dataIndex: "email" },
   { title: "Role", dataIndex: "role" },
];

const data = [
  { key: 1, name: "John", email: 123 , role: "admin" },
  { key: 1, name: "John", email: 123 , role: "admin" },
    { key: 1, name: "John", email: 123 , role: "admin" },
];
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>

         <Layout>
      <Header style={{ color: "white" }}>Header</Header>
      <Content style={{ padding: 20 }}>Content</Content>
      <Footer>Sidebar</Footer>
    </Layout>

        <Button type="primary">1</Button>


        <Form onFinish={onFinish}>
      <Form.Item
      label="Email"
         name="email"
        rules={[{ required: true, message: "Nhập email" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

        <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Nhập name" }]}
      >
        <Input placeholder="Name" />
      </Form.Item>

        <Form.Item
        label="Password"
        name="Password"
        rules={[{ required: true, message: "Nhập Password" }]}
      >
        <Input placeholder="Password" />
      </Form.Item>

      

      <Form.Item>
        <Button htmlType="submit" type="primary">
          Button submit
        </Button>
      </Form.Item>
    </Form>

     <Button onClick={() => setOpen(true)}>Open</Button>

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
      >
        Nội dung modal
      </Modal>

      <Table columns={columns} dataSource={data} />

    
      </div>
      

      <Toaster />
    </>
  );
}

export default App;
