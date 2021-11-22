import { Button, Space, Upload, Popconfirm } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'umi';

interface Data {
  name: string;
}
function IndexPage() {
  return (
    <div>
      <Link to="/about">About</Link>
      <h1>Index Page</h1>
      <Space>
        Space
        <Button type="primary">Button</Button>
        <Upload>
          <Button>
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload>
        <Popconfirm
          title="Are you sure delete this task?"
          okText="Yes"
          cancelText="No"
        >
          <Button>Confirm</Button>
        </Popconfirm>
      </Space>
    </div>
  );
}

export default IndexPage;
