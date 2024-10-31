import { Link } from "react-router-dom";
import "./Topic.scss";
import { useEffect, useState } from "react";
import { createTopic, deleteTopicApi, getListTopic } from "../../services/topicService";
import { Table, Space, Button, Modal, Form, Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { addTopic} from "../../actions/topic";
import { setTopic, deleteTopic } from "../../actions/topic";

const { Column, ColumnGroup } = Table;

function Topic() {
  const dispatch = useDispatch();

  const topics = useSelector((state) => state.topics);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListTopic();
      dispatch(setTopic(response)); // Dispatch action để lưu danh sách topics vào Redux state
    };
    fetchApi();
  }, [dispatch]);

  console.log("topicArray",topics)

  const handleDelete = (id) => {
    deleteTopicApi(id);
    dispatch(deleteTopic(id));
  };
  

 
  return (
    <>
      <h2>Danh sách chủ đề</h2>

      {/* <Button type="primary" onClick={handleAddTopic}>Thêm chủ đề</Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form name="addTopic">
          <Form.Item
            label="Topic ID"
            name="topicID"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Topic name"
            name="topicName"
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal> */}

      {/* <Modal
        title="Sửa chủ đề"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form name="updateTopic">
          <Form.Item label="Topic Name" name="topicName">
            <Input />
          </Form.Item>
        </Form>
      </Modal> */}

      <Table
        dataSource={topics}
        pagination={{ pageSize: 6 }}
        rowKey = "id"
      >
        <Column title="Topic ID" dataIndex="id" key="id" />
        <Column title="Topic Name" dataIndex="name" key="name" />

        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle" >
              <Link to={"/quiz/" + record.id}>Làm bài | </Link>
              <Button type="primary" onClick={() => handleDelete(record.id)}>Xóa</Button>
              <Button type="primary">Sửa tên</Button>
            </Space>
          )}
        />
      </Table>
    </>
  );
}

export default Topic;